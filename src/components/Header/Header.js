import DivContainer from "../globals/DivContainer";
import { RiFileTextFill, RiFeedbackFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import FillButton from "../globals/Buttons/FillButton";
import TextButton from "../globals/Buttons/TextButton";
const Header = () => {
  return (
    <DivContainer>
      <div className="flex justify-between items-center py-3 px-4 border-b border-neutral-600">
        <div className="flex items-center space-x-3">
          <RiFileTextFill className="text-xl text-blue-400 " />
          <h2>English (India)</h2>
        </div>
        <div className="flex items-center space-x-2">
          <RiFeedbackFill className="text-2xl my-0 mt-1 text-neutral-400" />
          <TextButton>save draft</TextButton>
          <FillButton>publish</FillButton>
          <MdClose className="text-2xl text-neutral-400  " />
        </div>
      </div>
    </DivContainer>
  );
};

export default Header;
