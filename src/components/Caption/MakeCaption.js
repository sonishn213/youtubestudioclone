import React, { useState } from "react";
import DivContainer from "../globals/DivContainer";
import Header from "./Header";
import CaptionInput from "./CaptionInput";
import { useSelector } from "react-redux";
const MakeCaption = () => {
  const captions = useSelector((state) => state.caption.value);
  return (
    <DivContainer>
      <div className="border-r border-neutral-600">
        <Header />
        {/* body the list of captions*/}
        <div className="max-h-72 h-72 overflow-y-auto">
          {captions?.map((item) => {
            return <CaptionInput data={item} key={item.id} />;
          })}
        </div>
        {/* bodyend */}
      </div>
    </DivContainer>
  );
};

export default MakeCaption;
