import { useState } from "react";
import "./App.css";

import { GlobalCV } from "./components/details";

function App() {
  // const [count, setCount] = useState(0);

  const firstName = "blah";
  return (
    <>
      <h1>Resume</h1>
      {/* <FullName /> */}
      <GlobalCV />
      <div>
        {/* <Details /> */}
        {/* <LastName /> */}
        {/* <Resume firstName={firstName} /> */}
      </div>
    </>
  );
}

export default App;
