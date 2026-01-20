"use client";

import dynamic from "next/dynamic";

const PersonalizedMap = dynamic(
  () => import("./PersonalizedMap"),
  { ssr: false }
);

export default PersonalizedMap;