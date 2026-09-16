/* Santa'lana Builders site behaviour
   Plain ES5-safe JS, no dependencies. */
(function () {
  'use strict';

  /* Opt in to the reveal animation only now that JS is running. */
  document.documentElement.classList.add('js-reveal');

  /* ---------- Theme ----------
     No stored choice means the CSS media query decides, so the attribute is
     only set once someone actually picks. Storage can throw in a private
     window, so every access is guarded. */
  var THEME_KEY = 'slb-theme';
  var root = document.documentElement;

  function storedTheme() {
    try { return window.localStorage.getItem(THEME_KEY); } catch (err) { return null; }
  }
  function storeTheme(v) {
    try { window.localStorage.setItem(THEME_KEY, v); } catch (err) { /* ignore */ }
  }
  /* Dark unless the visitor has chosen light. Matches the CSS, which puts the
     dark palette on :root and treats light as the override. */
  function activeTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  var themeBtn = document.getElementById('themeToggle');

  // A stored choice only applies where the toggle exists, so a page without
  // it can never get stuck in a theme the visitor has no way to switch back.
  var saved = themeBtn ? storedTheme() : null;
  if (saved === 'dark' || saved === 'light') { root.setAttribute('data-theme', saved); }

  if (themeBtn) {
    var syncThemeBtn = function () {
      var now = activeTheme();
      themeBtn.setAttribute('aria-label',
        now === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      themeBtn.setAttribute('title',
        now === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    };
    themeBtn.addEventListener('click', function () {
      var next = activeTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      storeTheme(next);
      syncThemeBtn();
    });
    syncThemeBtn();
  }

  /* ---------- Full-screen menu ---------- */
  var toggle = document.getElementById('navToggle');
  var panel = document.getElementById('navPanel');

  if (toggle && panel) {
    var scrollLock = 0;

    var setPanel = function (open) {
      panel.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Menu');

      // `inert` keeps the closed panel out of the tab order and away from
      // screen readers, which visibility:hidden alone does not guarantee
      // during the transition.
      if (open) { panel.removeAttribute('inert'); }
      else { panel.setAttribute('inert', ''); }

      if (open) {
        scrollLock = window.scrollY;
        document.body.classList.add('nav-open');
        var first = panel.querySelector('.nav__link');
        if (first) {
          window.setTimeout(function () {
            try { first.focus({ preventScroll: true }); } catch (err) { first.focus(); }
          }, 220);
        }
      } else {
        document.body.classList.remove('nav-open');
        window.scrollTo(0, scrollLock);
      }
    };

    setPanel(false);

    toggle.addEventListener('click', function () {
      setPanel(!panel.classList.contains('is-open'));
    });

    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) { setPanel(false); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) {
        setPanel(false);
        toggle.focus();
      }
    });

    // Keep focus inside the panel while it is open.
    panel.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !panel.classList.contains('is-open')) { return; }
      var items = Array.prototype.slice.call(
        panel.querySelectorAll('a[href], button:not([disabled])'));
      items.push(toggle);
      if (!items.length) { return; }
      var firstEl = items[0], lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault(); lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault(); firstEl.focus();
      }
    });

    // A resize up to desktop should not leave the overlay stranded open.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1040 && panel.classList.contains('is-open')) {
        setPanel(false);
      }
    });
  }

  /* ---------- Header shrinks once you scroll past the hero ---------- */
  var header = document.getElementById('siteHeader');
  if (header) {
    var lastCompact = null;
    var onScroll = function () {
      var compact = window.scrollY > 120;
      if (compact !== lastCompact) {
        header.classList.toggle('is-compact', compact);
        lastCompact = compact;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
  }

  /* ======================================================================
     Enquiry forms

     Each form ships its stages as .fstep blocks in the HTML. With scripting
     off the browser shows all of them and the single submit works as an
     ordinary long form, so none of this is load-bearing for the form to
     function.

     No back end is wired up yet (see HANDOVER.md). Until an endpoint exists
     the completed enquiry is handed to the visitor's mail client rather than
     being silently dropped.
     ====================================================================== */
  var MAILTO = 'stefan@santalana.com.au';

  var LABELS = {
    interest: 'Building',
    suburb:   'Suburb',
    stage:    'Stage',
    budget:   'Budget',
    detail:   'Details',
    name:     'Name',
    phone:    'Phone',
    email:    'Email'
  };
  var ORDER = ['name', 'phone', 'email', 'interest', 'suburb', 'stage', 'budget', 'detail'];

  function fieldsIn(el) {
    return Array.prototype.slice.call(
      el.querySelectorAll('input:not([type="hidden"]), select, textarea'));
  }

  /* Validate one stage. Returns true when every control in it is satisfied,
     and focuses plus reports the first that is not. */
  function stageValid(stepEl, statusEl) {
    var controls = fieldsIn(stepEl);
    for (var i = 0; i < controls.length; i++) {
      var c = controls[i];
      if (typeof c.checkValidity === 'function' && !c.checkValidity()) {
        // A radio group hides its inputs, so reportValidity has nothing to
        // anchor its bubble to. Write the message out instead.
        if (c.type === 'radio') {
          if (statusEl) { statusEl.textContent = 'Please choose one to continue.'; }
          var firstTile = stepEl.querySelector('.choice');
          if (firstTile) { firstTile.focus(); }
        } else {
          c.focus();
          if (typeof c.reportValidity === 'function') { c.reportValidity(); }
        }
        return false;
      }
    }
    if (statusEl) { statusEl.textContent = ''; }
    return true;
  }

  function setupStages(form) {
    var steps = Array.prototype.slice.call(form.querySelectorAll('.fstep'));
    var backBtn = form.querySelector('[data-back]');
    var nextBtn = form.querySelector('[data-next]');
    var sendBtn = form.querySelector('[data-send]');
    var statusEl = form.querySelector('[data-fstatus]');

    if (steps.length < 2 || !nextBtn || !sendBtn || !backBtn) { return null; }

    form.classList.add('is-stepped');

    // Progress readout above the stages.
    var prog = document.createElement('div');
    prog.className = 'fprogress';
    var label = document.createElement('span');
    label.className = 'fprogress__label';
    var track = document.createElement('span');
    track.className = 'fprogress__track';
    var segs = steps.map(function () {
      var seg = document.createElement('span');
      seg.className = 'fprogress__seg';
      track.appendChild(seg);
      return seg;
    });
    prog.appendChild(label);
    prog.appendChild(track);
    form.insertBefore(prog, form.firstChild);

    var at = 0;

    function render(focus) {
      steps.forEach(function (s, i) {
        s.classList.toggle('is-active', i === at);
        // Keep controls on hidden stages out of the tab order.
        fieldsIn(s).forEach(function (c) {
          if (i === at) { c.removeAttribute('tabindex'); }
          else { c.setAttribute('tabindex', '-1'); }
        });
      });
      segs.forEach(function (seg, i) { seg.classList.toggle('is-done', i <= at); });

      var title = steps[at].getAttribute('data-title') || '';
      label.textContent = 'Step ' + (at + 1) + ' of ' + steps.length +
                          (title ? '  ' + title : '');

      var last = at === steps.length - 1;
      backBtn.hidden = at === 0;
      nextBtn.hidden = last;
      sendBtn.hidden = !last;

      if (focus) {
        var first = steps[at].querySelector('.choice, input, select, textarea');
        if (first && first.focus) {
          try { first.focus({ preventScroll: true }); } catch (err) { first.focus(); }
        }
      }
    }

    function go(n, focus) {
      at = Math.max(0, Math.min(steps.length - 1, n));
      render(focus !== false);
    }

    nextBtn.addEventListener('click', function () {
      if (!stageValid(steps[at], statusEl)) { return; }
      go(at + 1);
    });

    backBtn.addEventListener('click', function () {
      if (statusEl) { statusEl.textContent = ''; }
      go(at - 1);
    });

    // Picking a tile is a complete answer, so move straight on.
    form.addEventListener('change', function (e) {
      if (e.target.classList && e.target.classList.contains('choice__input')) {
        if (statusEl) { statusEl.textContent = ''; }
        window.setTimeout(function () { go(at + 1); }, 180);
      }
    });

    // Enter advances rather than submitting a half-filled enquiry.
    form.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' &&
          at < steps.length - 1) {
        e.preventDefault();
        nextBtn.click();
      }
    });

    render(false);

    return {
      steps: steps,
      status: statusEl,
      go: go,
      reset: function () { go(0, false); }
    };
  }

  function handleSubmit(form, stages) {
    return function (e) {
      e.preventDefault();

      // Check every stage, not only the visible one, and jump back to the
      // first that fails.
      if (stages) {
        for (var i = 0; i < stages.steps.length; i++) {
          if (!stageValid(stages.steps[i], stages.status)) {
            stages.go(i);
            stageValid(stages.steps[i], stages.status);
            return;
          }
        }
      } else if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
        var bad = form.querySelector(':invalid');
        if (bad) {
          bad.focus();
          if (typeof form.reportValidity === 'function') { form.reportValidity(); }
        }
        return;
      }

      var data = new FormData(form);
      var lines = [];
      ORDER.forEach(function (key) {
        var v = data.get(key);
        if (v === null) { return; }
        v = v.toString().trim();
        if (!v) { return; }
        lines.push(LABELS[key] + ': ' + v);
      });

      var subject = 'Website enquiry: ' +
        ((data.get('interest') || 'General').toString().trim());
      window.location.href = 'mailto:' + MAILTO +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));

      var first = ((data.get('name') || '').toString().trim().split(' ')[0]) || '';
      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Thanks' + (first ? ' ' + first : '') +
          ', your email app should now be open with the enquiry ready to send. ' +
          'Prefer to talk? Call Stefan on 0421 258 240.';
        note.hidden = false;
      }
      form.reset();
      if (stages) { stages.reset(); }
    };
  }

  Array.prototype.forEach.call(
    document.querySelectorAll('#enquiryForm, .js-enquiry'),
    function (form) {
      var stages = setupStages(form);
      form.addEventListener('submit', handleSubmit(form, stages));
    });

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
