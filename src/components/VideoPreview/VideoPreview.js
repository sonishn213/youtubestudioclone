import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDuration } from "../../reducers/Video/videoSlice";
const VideoPreview = () => {
  const dispatch = useDispatch();
  //captions is array
  const captions = useSelector((state) => state.caption.value);
  const [index, setIndex] = useState(null);
  //
  const videoRef = useRef(null);
  //
  useEffect(() => {
    setIndex(captions?.findIndex((item) => item.isfocused === true));
  }, [captions]);

  useEffect(() => {
    if (videoRef) {
      window.onload = () => {
        dispatch(setDuration({ totalDuration: videoRef.current.duration }));
      };
    }
  }, [setDuration, dispatch, videoRef]);
  return (
    <div className="bg-neutral-900 w-full h-full py-2 px-6 flex flex-col justify-between">
      <div>
        <div className="relative bg-black">
          <video controls className="w-full h-64" ref={videoRef}>
            <source src="videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-14  z-10 left-1/2 -translate-x-1/2">
            <p className="bg-black text-white ">{captions[index]?.caption}</p>
          </div>
        </div>
        <div>
          <p className="text-white text-xs pt-3">
            Enter subtitle faster with
            <span className="text-blue-400"> keyboard shortcuts. </span>
          </p>
        </div>
      </div>

      <div className="text-white text-sm flex items-center ">
        <input
          type="checkbox"
          id="pausewhiletyping"
          className="bg-transparent  rounded-sm mr-2 border-2 border-neutral-300 w-4 h-4 focus:ring-0 focus:outline-none"
        />
        <label htmlFor="pausewhiletyping">Pause while typing</label>
      </div>
    </div>
  );
};

export default VideoPreview;
