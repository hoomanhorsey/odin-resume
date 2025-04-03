import { useState } from "react";
import "./App.css";

import { GlobalCV } from "./components/details";

function App() {
  return (
    <>
      <h1>Resume</h1>
      <div>
        <GlobalCV />
      </div>
    </>
  );
}

export default App;
