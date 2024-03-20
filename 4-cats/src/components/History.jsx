import { useState } from "react";
// import "./History.css";

function History(props) {
  return (
    <div
      id="history"
      className="w-[20%] h-[80%] bg-[#A63C06] gap-[10px] rounded-[30px] flex flex-col justify-center items-center overflow-y-scroll overflow-x-hidden"
    >
      {props.images &&
        props.images.map((image) => (
          <img src={image} className="h-[100px] w-auto"></img>
        ))}
    </div>
  );
}

export default History;
