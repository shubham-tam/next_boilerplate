import { useState } from "react";

import ModalTest from "./ModalTest";
import { Button } from "@/components/ui";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="items-center p-10">
        <Button
          onClick={handleModalOpen}
          className="bg-white text-slate-500 font-bold flex hover:bg-indigo-400 hover:text-white"
          size="large"
        >
          {isModalOpen ? "Close Modal" : "Open Modal"}
        </Button>
      </div>

      <ModalTest isModalOpen={isModalOpen} handleModalOpen={handleModalOpen} />
    </>
  );
};

export default Modal;
