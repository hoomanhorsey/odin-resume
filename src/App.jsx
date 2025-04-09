import { useState } from "react";
import "./App.css";

import { GlobalCV } from "./components/details";

function App() {
  return (
    <>
      <div className="mainHeading">
        <h1>Resume</h1>
      </div>

      <div>
        <GlobalCV />
      </div>
    </>
  );
}

export default App;
