import { useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";
import {
  deleteCaption,
  readInput,
  setFocusedCaption,
} from "../../reducers/Caption/captionSlice";
import { useDispatch } from "react-redux";
const CaptionInput = ({ data }) => {
  const dispatch = useDispatch();
  const textareaRef = useRef(null);
  const inputStarttime = useRef(null);
  const inputEndtime = useRef(null);
  useEffect(() => {
    if (data?.isfocused) {
      switch (data?.focusName) {
        case "caption":
          textareaRef.current.focus();
          break;
        case "startTime":
          inputStarttime.current.focus();
          break;
        case "endTime":
          inputEndtime.current.focus();
          break;
      }
    }
  }, [data]);

  const handledelete = (id) => {
    dispatch(deleteCaption({ id: id }));
  };

  const InputData = (e, id) => {
    const name = e.target.getAttribute("name");
    const value = e.target.value;
    dispatch(readInput({ id, name, value }));
  };

  const focushandler = (e, id) => {
    const focusname = e.target.getAttribute("name");
    dispatch(setFocusedCaption({ id: id, focusname }));
  };
  return (
    <div className="group flex px-6 py-1 hover:bg-neutral-900 focus-within:bg-neutral-900">
      <div className="flex-grow ">
        <textarea
          name="caption"
          className="bg-transparent border border-neutral-500 rounded-sm px-4 py-1 min-h-[85px] h-min resize-none  w-full outline-none focus:border-blue-400"
          value={data?.caption}
          ref={textareaRef}
          onFocus={(e) => focushandler(e, data?.id)}
          onChange={(e) => InputData(e, data?.id)}
        ></textarea>
      </div>
      <div className="text-2xl mx-2 cursor-pointer ">
        <MdDelete
          onClick={() => {
            handledelete(data?.id);
          }}
          className="  h-full flex-col justify-center items-center invisible group-hover:visible hover:text-white text-neutral-400 group-focus-within:visible"
        />
      </div>
      <div className="w-[14%] ">
        <div className=" h-full flex flex-col justify-between">
          <input
            name="startTime"
            type="text"
            value={data?.startTime}
            onFocus={(e) => focushandler(e, data?.id)}
            onChange={(e) => InputData(e, data?.id)}
            ref={inputStarttime}
            className="bg-transparent border border-neutral-500 rounded-sm px-4 py-1.5    w-full outline-none focus:border-blue-400"
          />

          <input
            name="endTime"
            type="text"
            value={data?.endTime}
            ref={inputEndtime}
            onFocus={(e) => focushandler(e, data?.id)}
            onChange={(e) => InputData(e, data?.id)}
            className="bg-transparent border border-neutral-500 rounded-sm px-4 py-1.5    w-full outline-none focus:border-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default CaptionInput;
