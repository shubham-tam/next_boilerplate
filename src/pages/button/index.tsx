import MainButtons from "./MainButtons";
import UtilityButtons from "./UtilityButtons";
import ButtonsSize from "./ButtonsSize";

const Buttonpage = () => {
  return (
    <>
      <div className="my-20 text-3xl text-center">Buttons</div>
      <div className="flex justify-around">
        <MainButtons />
        <UtilityButtons />
        <ButtonsSize />
      </div>
    </>
  );
};

export default Buttonpage;
