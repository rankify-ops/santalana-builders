import type { Metadata } from "next";
import { SiteScripts } from "@/components/SiteScripts";
import { PreviewGate } from "@/components/PreviewGate";
import { asset } from "@/lib/basePath";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.santalana.com.au"),
  icons: { icon: asset("/assets/img/brand/favicon.png") },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // site-behaviour adds classes to <html> before hydration finishes.
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          // Opt in to the scroll reveal before first paint, as the static site did.
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-reveal')" }}
        />
      </head>
      <body>
        {children}
        <SiteScripts />
        <PreviewGate site="santalana-builders" staffPath="/staff-153de3" clientName="Santa'lana Builders" />
      </body>
    </html>
  );
}
