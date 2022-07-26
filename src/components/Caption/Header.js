import TextButton from "../globals/Buttons/TextButton";
import { HiOutlinePlus, HiOutlineDotsVertical } from "react-icons/hi";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { createAtEnd } from "../../reducers/Caption/captionSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { totalDuration } = useSelector((state) => state.video.value);
  //create a empty caption with id
  const createCaption = () => {
    dispatch(createAtEnd({ totalDuration }));
  };

  return (
    <header className="flex justify-between items-center p-4 ">
      <TextButton onClick={createCaption}>
        <HiOutlinePlus className="mr-2 text-lg" />
        caption
      </TextButton>
      <div className="flex items-center">
        <TextButton>edit as text</TextButton>

        <HiOutlineDotsVertical className="text-white text-large mr-2" />
      </div>
    </header>
  );
};

export default Header;
