import React from "react";
import Alarm from "./Alarm";
import Clock from "./Clock";
import Header from "./Header";

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="max-w-6xl mx-auto">
        <Clock />
      </div>
    </div>
  );
};

export default App;
