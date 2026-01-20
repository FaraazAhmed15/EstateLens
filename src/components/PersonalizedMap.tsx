import dynamic from "next/dynamic";

const PersonalizedMap = dynamic(
  () => import("./PersonalizedMapClient"),
  { ssr: false }
);

export default PersonalizedMap;