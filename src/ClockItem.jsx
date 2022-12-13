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
      heading: "Heading",
      para: "Some representative placeholder content for the three columns of text below the carousel. This is the first column",
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
            <div className="flex items-center gap-6 mb-4 border-b-2 border-custume-main py-3">
              <span>{item.clock}</span>
              <div>
                <h1 className="text-3xl ">{timeshow}</h1>
                <p className="text-base">{dateshow}</p>
              </div>
            </div>
            <h1 className="text-xl text-center">{changeTimeZone}</h1>

            <div className="bg-red-500 py-2 px-4 my-2">
              <h1 className="text-xl text-white">{item.heading}</h1>
              <p className="text-base text-gray-300">{item.para}</p>
            </div>
            <button className="w-full py-2 px-4 border border-custume-main  bg-custume-main hover:bg-transparent text-white hover:text-black text-base rounded">
              Read More
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ClockItem;
