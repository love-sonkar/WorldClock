import React from "react";

const Alarm = () => {
  return (
    <div className=" px-2 py-4">
      <p className="text-base py-2">Select Time To Set Alarm</p>
      <input
        type="time"
        className="px-2 py-3 outline-none w-full bg-transparent border border-custume-main text-black rounded-sm "
        name=""
        id=""
      />
    </div>
  );
};

export default Alarm;
