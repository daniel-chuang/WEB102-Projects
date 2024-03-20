import { useState } from "react";
// import "./Filters.css";

function Filters(props) {
  return (
    <div className="w-[20%] h-[80%] bg-[#A63C06] rounded-[30px] flex flex-col justify-center gap-[10px]">
      {props.filters &&
        props.filters.map((filter) => (
          <button onClick={() => props.buttonFunction(filter)}>
            <div className="h-[40px] w-auto bg-[#EEBA0B] rounded-sm p-2 overflow-visible">
              <p className="m-auto">{filter}</p>
            </div>
          </button>
        ))}
    </div>
  );
}

export default Filters;
