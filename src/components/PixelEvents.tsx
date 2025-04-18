"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixelEvents: React.FC = () => {
  // Store pathname and search params in state
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Ensure that it only runs on client-side
    const pathname = window.location.pathname;
    const searchParams = window.location.search;

    setUrl(`${pathname}${searchParams}`);

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("428909963539428");
        ReactPixel.pageView();
      });
  }, []);

  return null;
};