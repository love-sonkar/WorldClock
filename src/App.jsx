import React from "react";
import Clock from "./Clock";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto">
        <Clock />
      </div>
    </div>
  );
};

export default App;
