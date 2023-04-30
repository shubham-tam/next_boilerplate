import { Button } from "@/components/ui";

import LoadingButton from "./LoadingButton";

import down from "@assets/icons/down.svg";

const UtilityButtons = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <span>Utility Buttons</span>
        <div className="flex justify-center gap-3 p-8">
          <div className="flex flex-col">
            <Button isDisabled={true}>{"Disabled Button"}</Button>
            <span className="text-center"> Disabled button</span>
          </div>
          <div className="flex flex-col">
            <Button icon="search" size="large" variant="search">
              {"Search"}
            </Button>
            <span className="text-center"> Search Button</span>
          </div>
        </div>
        <LoadingButton />

        <div className="flex justify-center gap-3 p-8">
          <div className="flex flex-col">
            <Button icon={down}>Icon with down arrow</Button>
            <span className="text-center"> Icon with down arrow</span>
          </div>
          <div className="flex flex-col">
            <Button icon={down} />
            <span className="text-center"> Icon with down arrow </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilityButtons;
