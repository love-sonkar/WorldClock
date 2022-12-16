import React, { useState, useLayoutEffect } from "react";
import Alarm from "./Alarm";
import ClockItem from "./ClockItem";
import TimeZoneSlector from "./TimeZoneSlector";
import api from "./ApiData";

const Clock = () => {
  const [handleSearch, sethandleSearch] = useState("");
  const [changeTimeZone, setchangeTimeZone] = useState(
    "Asia/Kolkata" || handleSearch
  );
  const [showTime, setshowTime] = useState("");
  useLayoutEffect(() => {
    const updatetime = () => {
      setshowTime(() => {
        return new Date().toLocaleTimeString("en-US", {
          timeZone: `${changeTimeZone}`,
        });
      });
    };
    setInterval(updatetime, 1000);
    return updatetime;
  }, [changeTimeZone, showTime]);

  let datePrint = new Date().toGMTString().slice(0, 16);

  const SearchValue = (SearchTerm) => {
    if (SearchTerm !== "" && SearchTerm !== handleSearch) {
      sethandleSearch(SearchTerm);
      setchangeTimeZone(SearchTerm);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 py-4 px-2">
      <TimeZoneSlector
        SearchValue={SearchValue}
        handleSearch={handleSearch}
        sethandleSearch={sethandleSearch}
        api={api}
      />
      <ClockItem
        timeshow={showTime}
        dateshow={datePrint}
        changeTimeZone={changeTimeZone}
      />
      <Alarm getTimeZoneValue={showTime} />
    </div>
  );
};

export default Clock;
