import Link from "next/link";

import { Button } from "../ui";

const MainHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full text-center border-grey p-2 bg-black flex items-center">
      <Link href="/" className="mr-auto text-lg font-bold text-indigo-400">
        Next Boiler Plate
      </Link>{" "}
      &nbsp;
      <Button link="/button" variant="link">
        {"Buttons page"}
      </Button>
      &nbsp;
      <Link href="/modal">Modal</Link> &nbsp;
    </header>
  );
};
export default MainHeader;
