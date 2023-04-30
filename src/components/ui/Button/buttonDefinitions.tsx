import Image from "next/image";

import search from "../../../assets/icons/search.svg";
import down from "../../../assets/icons/down.svg";
import download from "../../../assets/icons/download.svg";
import upload from "../../../assets/icons/upload.svg";

interface IconProps {
  src: string;
  alt: string;
}

export const sizes = ["default", "small", "medium", "large"];

export const style = [
  "primary",
  "warning",
  "danger",
  "success",
  "primary-outline",
  "warning-outline",
  "danger-outline",
  "success-outline",
  "link",
  "search",
];

export type IconKey = "search" | "down" | "download" | "upload";

export const iconProps = {
  search: {
    src: search,
    alt: "search image",
  },
  down: {
    src: down,
    alt: "down image",
  },
  download: {
    src: download,
    alt: "download image",
  },
  upload: {
    src: upload,
    alt: "upload image",
  },
};

export const getIconElement = (iconKeyOrObject: IconKey | IconProps) => {
  const props: IconProps =
    typeof iconKeyOrObject === "object"
      ? iconKeyOrObject
      : iconProps[iconKeyOrObject];

  return <Image src={props.src} alt={props.alt} width={20} height={20} />;
};
