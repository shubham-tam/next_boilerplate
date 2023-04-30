import React, { useState } from "react";
import {
  CustomModal,
  CustomModalTitle,
  CustomModalBody,
  CustomModalFooter,
} from "@/components/ui/CustomModal";
import { Button } from "@/components/ui";

import Buttonpage from "../button";
import down from "@assets/icons/down.svg";

const ModalTest: any = (props: any) => {
  const { isModalOpen, handleModalOpen } = props;

  const [loading, setIsLoading] = useState(false);

  const handleClick = () => {
    alert("clicked");
  };

  const setTimeoutButton = () => {
    console.log("working");
    setIsLoading(true);

    setTimeout(() => {
      console.log("received response");
      setIsLoading(false);
    }, 3000);
  };
  return (
    <>
      <CustomModal open={isModalOpen}>
        <CustomModalTitle onClose={handleModalOpen}>Title</CustomModalTitle>
        <CustomModalBody>
          {/* <div>
            <div className="text-slate-400">wgowghlkwjgl</div>
            <div className="text-slate-400">wgowghlkwjgl</div>
            <div className="text-slate-400">wgowghlkwjgl</div>
            <div className="text-slate-400">wgowghlkwjgl</div>
            <div className="text-slate-400">wgowghlkwjgl</div>
          </div> */}

          <div>
            <div className="flex flex-col items-center">
              <span> Main Buttons</span>
              <div className="flex justify-center gap-3">
                <div className="flex flex-col">
                  <Button variant="primary" onClick={handleClick}>
                    Primary Button
                  </Button>
                  <span className="text-center"> Primary button</span>
                </div>
                <div className="flex flex-col">
                  <Button variant="primary-outline">
                    Primary Button Outlined
                  </Button>
                  <span className="text-center"> Primary button</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <div className="flex flex-col">
                  <Button variant="warning">Warning Button</Button>
                  <span className="text-center"> Warning button</span>
                </div>

                <div className="flex flex-col">
                  <Button variant="warning-outline">
                    Warning Button Outlined
                  </Button>
                  <span className="text-center"> Warning button</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <div className="flex flex-col">
                  <Button variant="danger">Danger Button</Button>
                  <span className="text-center"> Danger button</span>
                </div>
                <div className="flex flex-col">
                  <Button variant="danger-outline">
                    Danger Button Outlined
                  </Button>
                  <span className="text-center"> Danger button</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <div className="flex flex-col">
                  <Button variant="success">Success Button</Button>
                  <span className="text-center">Success Button</span>
                </div>
                <div className="flex flex-col">
                  <Button variant="success-outline">
                    Success Button Outlined
                  </Button>
                  <span className="text-center">Success Button Outlined</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <div className="flex flex-col">
                  <Button>Button without any style prop</Button>
                  <span className="text-center">
                    Button without any style prop
                  </span>
                </div>
                <div className="flex flex-col">
                  <Button>Button without any style prop</Button>
                  <span className="text-center">
                    Button without any style prop
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <span>Utility Buttons</span>
              <div className="flex justify-center gap-3">
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

              <div className="flex justify-center gap-3">
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
          </div>
        </CustomModalBody>
        <CustomModalFooter>
          <Button variant="primary-outline" onClick={handleModalOpen}>
            Close
          </Button>
          {/* <Button variant="primary">Submit</Button> */}
          <Button
            onClick={setTimeoutButton}
            loading={loading}
            loadingMessage=""
          >
            Submit
          </Button>
        </CustomModalFooter>
      </CustomModal>
    </>
  );
};

export default ModalTest;
