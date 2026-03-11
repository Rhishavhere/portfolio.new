"use client";

import React, { useState, useEffect } from "react";
import Loading from "./Loading";

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Show the intro for 3 seconds, then reveal the site
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <Loading />;
  }

  return <>{children}</>;
}
