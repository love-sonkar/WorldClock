import React, { useState } from "react";
import AlarmError from "./AlarmError";

const Alarm = ({ getTimeZoneValue }) => {
  const [showhide, setShowHide] = useState(false);
  const [alarm, setAlarm] = useState("00:00:00");
  if (getTimeZoneValue === alarm) {
    console.log("alarm ringin");
  }
  const alarmSet = (getalarm) => {
    if (alarm !== "") {
      setAlarm(getalarm);
      setShowHide(true);
    }
  };

  return (
    <div className=" px-2 py-4">
      <p className="text-base py-2">Select Time To Set Alarm</p>
      <input
        type="time"
        placeholer="hrs:mins"
        className="px-2 py-3 outline-none w-full bg-transparent border border-custume-main text-black rounded-sm "
        value={alarm}
        onChange={(e) => setAlarm(e.target.value)}
      />
      <button
        onClick={() => alarmSet(alarm)}
        className="w-full bg-custume-main py-2 px-1 rounded text-base mt-1 text-white hover:bg-transparent hover:text-custume-main border border-custume-main"
      >
        SetAlarm
      </button>
      {showhide && <AlarmError setShowHide={setShowHide} />}
    </div>
  );
};

export default Alarm;
