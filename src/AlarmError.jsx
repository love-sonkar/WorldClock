import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const AlarmError = ({ setShowHide }) => {
  const styleClose = {
    position: "absolute",
    top: "5px",
    right: "5px",
    color: "white",
    fontSize: "1.5rem",
    cursor: "pointer",
    zIndex: 999,
  };
  return (
    <div className=" top-0 left-0 px-1 fixed backdrop-blur-sm h-screen grid place-items-center w-full">
      <div className="bg-custume-main rounded-md py-8 text-white shadow-md text-center break-words relative ">
        <span>
          <CloseIcon onClick={() => setShowHide(false)} style={styleClose} />
        </span>
        <p className="px-2">
          This Feature Will Be Updeted Soon Thanks for Using Us..!
        </p>
      </div>
    </div>
  );
};

export default AlarmError;
