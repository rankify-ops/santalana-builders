"use client";

import { useEffect } from "react";
import { BASE_PATH } from "@/lib/basePath";

/** Sends visitors to the homepage while only the homepage is shared with the client. */
export function RedirectHome() {
  useEffect(() => {
    window.location.replace(`${BASE_PATH}/`);
  }, []);
  return null;
}
