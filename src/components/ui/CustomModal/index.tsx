import { FC } from "react";

import classes from "./modal.module.css";
import cross from "@/assets/icons/cross.svg";

import Button from "../Button/button";
import { footerPlacement } from "./modalDefinition";

interface CustomModal {
  children: React.ReactNode;
  open: boolean;
}
interface CustomTitle {
  children: React.ReactNode;
  onClose: () => boolean;
}

interface CustomBody {
  children: React.ReactNode;
}

interface CustomModalFooter {
  children: React.ReactNode;
  // open: boolean;
  align?: string;
}

export const CustomModal: FC<CustomModal> = ({ children, open }) => {
  if (open) {
    return null;
  }

  return (
    <div className={classes["custom-modal-overlay"]}>
      <div className={classes["custom-modal-container"]}>{children}</div>
    </div>
  );
};

export const CustomModalTitle: FC<CustomTitle> = ({ children, onClose }) => {
  return (
    <>
      <div
        className={`text-black flex justify-between py-2 ${classes["modal-title"]}`}
      >
        <span className="text-gray-700 text-xl font-medium">{children}</span>
        <Button
          icon={cross}
          onClick={onClose}
          className="bg-transparent hover:bg-gray-100 hover:rounded-full items-center"
        />
      </div>
      <hr />
    </>
  );
};

export const CustomModalBody: FC<CustomBody> = ({ children }) => {
  return (
    <div
      className={
        "bg-white py-2 px-4 items-center rounded-sm " + classes["modal-body"]
      }
    >
      {children}
    </div>
  );
};

export const CustomModalFooter: FC<CustomModalFooter> = ({
  children,
  align = "",
}) => {
  const alignStyle = footerPlacement.includes(align)
    ? align
    : footerPlacement[2];
  return (
    <>
      <hr />
      <div className={`py-2  + ${classes[alignStyle]}`}>{children}</div>
    </>
  );
};
