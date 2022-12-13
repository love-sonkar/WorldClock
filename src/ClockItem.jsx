import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ClockItem = ({ timeshow, dateshow, changeTimeZone }) => {
  const styleIcon = {
    fontSize: "6rem",
    backgroundColor: "#ebebeb",
    borderRadius: "50%",
    padding: ".315rem",
    color: "#EB6440",
  };

  const ClockApi = [
    {
      id: 1,
      clock: <AccessTimeIcon style={styleIcon} />,
      heading: "Welcome !",
      para: "to my new app world clock, this app helps you to get time all over the world just type any contury in serch field and get the exact time.",
    },
  ];

  return (
    <>
      {ClockApi.map((item) => {
        return (
          <div
            className="border-custume-main border rounded-b px-2 py-2 w-full"
            key={item.id}
          >
            <div className="flex items-center gap-6 border-b-2 border-custume-main py-3">
              <span>{item.clock}</span>
              <div>
                <h1 className="text-3xl ">{timeshow}</h1>
                <p className="text-base">{dateshow}</p>
              </div>
            </div>
            <h1 className="text-3xl py-2 text-center">{changeTimeZone}</h1>

            <div className=" py-2">
              <h1 className="text-xl text-custume-main">{item.heading}</h1>
              <p className="text-base capitalize   text-black">{item.para}</p>
            </div>
            <button className="w-full py-2 px-4 border border-custume-main  bg-custume-main hover:bg-transparent text-white hover:text-custume-main text-base rounded">
              My Portfolio
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ClockItem;
