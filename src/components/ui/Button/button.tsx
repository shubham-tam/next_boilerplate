import React from "react";
import { useRouter } from "next/router";

import buttonClass from "./button.module.css";

import { sizes, style, getIconElement, IconKey } from "./buttonDefinitions";

interface ButtonProps {
  link?: string;
  className?: string;
  variant?: (typeof style)[number];
  size?: (typeof sizes)[number];
  children?: string | never;
  onClick?: () => void;
  isDisabled?: boolean;
  icon?: IconKey;
  loading?: boolean;
  loadingMessage?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "",
  size = "",
  link,
  children,
  onClick,
  isDisabled,
  icon = "",
  loading,
  loadingMessage = "",
  className = "",
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      if (link) {
        router.push(link);
      }
    }
  };

  const iconElement = icon && getIconElement(icon as IconKey);

  const checkbuttonstyle = style.includes(variant) ? variant : style[0];

  const checkbuttonsize = sizes.includes(size) ? size : sizes[0];

  const disabledClass = isDisabled && buttonClass.disabled;

  return (
    <button
      className={`${buttonClass.btn} ${buttonClass[checkbuttonstyle]} ${
        buttonClass[checkbuttonsize]
      } ${disabledClass} ${icon && buttonClass.iconsClass}
      ${loading && buttonClass.loading} 
      ${iconElement && "w-fit h-fit"} ${className}`}
      onClick={handleClick}
      disabled={isDisabled || loading}
    >
      {loading && <div className={buttonClass["loading-spinner"]} />}
      {iconElement && children ? (
        <>
          <div className="mr-2"> {iconElement} </div>
          {children}
        </>
      ) : (
        iconElement
      )}

      {loading ? loadingMessage : children}
    </button>
  );
};

export default Button;
