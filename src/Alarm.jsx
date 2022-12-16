import React, { useState } from "react";

const Alarm = ({ getTimeZoneValue }) => {
  const [alarm, setAlarm] = useState("00:00:00");
  if (getTimeZoneValue === alarm) {
    console.log("alarm ringin");
  }
  const alarmSet = (getalarm) => {
    if (alarm !== "") {
      setAlarm(getalarm);
      console.log("clicked button", alarm, getTimeZoneValue);
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
      <button onClick={() => alarmSet(alarm)}>SetAlarm</button>
    </div>
  );
};

export default Alarm;
