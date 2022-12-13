import React from "react";

const TimeZoneSlector = ({
  SearchValue,
  handleSearch,
  sethandleSearch,
  api,
}) => {
  const GetValue = (inputVal) => {
    sethandleSearch(inputVal.target.value);
  };

  return (
    <div className="border h-auto">
      <div className="flex items-center justify-center">
        <input
          type="text"
          value={handleSearch}
          onChange={GetValue}
          autoComplete="off"
          className="py-2 px-2 text-base outline-none border border-r-0 border-custume-main bg-transparent flex-1 text-custume-main"
        />
        <button
          className="px-1 py-2 text-base border border-custume-main rounded-r-md bg-custume-main hover:bg-transparent text-white hover:text-custume-main border-l-none w-24"
          onClick={() => SearchValue(handleSearch)}
        >
          Get Time
        </button>
      </div>
      {api
        .filter((item) => {
          let inputSearch = handleSearch.toLowerCase();
          const apiVal = item.toLowerCase();
          return (
            inputSearch &&
            apiVal.includes(inputSearch) &&
            apiVal !== inputSearch
          );
        })
        .slice(0, 10)
        .map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => SearchValue(item)}
              className="cursor-pointer px-2 py-3 border-b-2 hover:bg-gray-400 hover:text-white text-custume-main "
            >
              {item}
            </p>
          );
        })}
    </div>
  );
};

export default TimeZoneSlector;
