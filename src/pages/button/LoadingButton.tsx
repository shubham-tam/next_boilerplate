import { Button } from "@/components/ui";
import React, { useState } from "react";

const LoadingButton = () => {
  const [loading, setIsLoading] = useState(false);

  const setTimeoutButton = () => {
    console.log("working");
    setIsLoading(true);

    setTimeout(() => {
      console.log("received response");
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col">
      <Button
        onClick={setTimeoutButton}
        loading={loading}
        loadingMessage="Something is loading"
      >
        Click me
      </Button>
      <span className="text-center">Loading button</span>
    </div>
  );
};

export default LoadingButton;
