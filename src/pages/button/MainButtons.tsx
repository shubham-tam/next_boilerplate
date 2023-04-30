import { Button } from "@/components/ui";

const MainButtons = () => {
  const handleClick = () => {
    alert("clicked");
  };

  return (
    <div className="flex flex-col items-center">
      <span> Main Buttons</span>
      <div className="flex justify-center gap-3 p-8">
        <div className="flex flex-col">
          <Button variant="primary" onClick={handleClick}>
            Primary Button
          </Button>
          <span className="text-center"> Primary button</span>
        </div>
        <div className="flex flex-col">
          <Button variant="primary-outline">Primary Button Outlined</Button>
          <span className="text-center"> Primary button</span>
        </div>
      </div>

      <div className="flex justify-center gap-3 p-8">
        <div className="flex flex-col">
          <Button variant="warning">Warning Button</Button>
          <span className="text-center"> Warning button</span>
        </div>

        <div className="flex flex-col">
          <Button variant="warning-outline">Warning Button Outlined</Button>
          <span className="text-center"> Warning button</span>
        </div>
      </div>

      <div className="flex justify-center gap-3 p-8">
        <div className="flex flex-col">
          <Button variant="danger">Danger Button</Button>
          <span className="text-center"> Danger button</span>
        </div>
        <div className="flex flex-col">
          <Button variant="danger-outline">Danger Button Outlined</Button>
          <span className="text-center"> Danger button</span>
        </div>
      </div>

      <div className="flex justify-center gap-3 p-8">
        <div className="flex flex-col">
          <Button variant="success">Success Button</Button>
          <span className="text-center">Success Button</span>
        </div>
        <div className="flex flex-col">
          <Button variant="success-outline">Success Button Outlined</Button>
          <span className="text-center">Success Button Outlined</span>
        </div>
      </div>

      <div className="flex justify-center gap-3 p-8">
        <div className="flex flex-col">
          <Button>Button without any style prop</Button>
          <span className="text-center">Button without any style prop</span>
        </div>
        <div className="flex flex-col">
          <Button>Button without any style prop</Button>
          <span className="text-center">Button without any style prop</span>
        </div>
      </div>
    </div>
  );
};

export default MainButtons;
