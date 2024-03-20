import { useState } from "react";
// import "./PrimaryPhoto.css";

function PrimaryPhoto(props) {
  return (
    <>
      <h1 className="mt-[40px]">It's raining cats!</h1>
      <p>😺😸😹😻😼😽🙀😿😾</p>
      <h2 className="mt-[40px] text-2xl">{props.name}</h2>
      <div className="flex justify-center gap-[10px] flex-wrap mb-[20px]">
        {props.temperament &&
          props.temperament.map((temp) => (
            <button onClick={() => props.buttonFunction(temp)}>
              <div className="h-[40px] w-auto bg-[#EEBA0B] rounded-sm p-2 overflow-visible">
                <p className="m-auto">{temp}</p>
              </div>
            </button>
          ))}
      </div>
      <img src={props.image} className="h-[40%] mx-auto object-fill"></img>
    </>
  );
}

export default PrimaryPhoto;
