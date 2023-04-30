import { Button } from "@/components/ui";
import React from "react";

const ButtonsSize = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="pb-8">Buttons of size</span>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <Button size="default">Default</Button>
          <span className="text-center">Default button</span>
        </div>
        <div className="flex flex-col">
          <Button size="small">Small</Button>
          <span className="text-center">Small button</span>
        </div>
        <div className="flex flex-col">
          <Button size="medium">Medium</Button>
          <span className="text-center">Medium button</span>
        </div>
        <div className="flex flex-col">
          <Button size="large">Large</Button>
          <span className="text-center">Large button</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonsSize;
