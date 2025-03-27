import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function Details() {
  let finalName = "";
  const [firstName, setFirstName] = useState("");
  const [finalFirstName, setFinalFirstName] = useState("");

  const doEdit = (e) => {
    console.log(firstName);
    setFirstName(e.target.value);
  };

  const submit = (finalName) => {
    setFinalFirstName(firstName);
    console.log(firstName);
    console.log(finalName);
  };

  return (
    <>
      'Hola. What are your details' <br></br>
      <div>First Name</div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <button onClick={doEdit}>edit</button>
      <button onClick={submit}>submit</button>
      <div>First Name: {finalFirstName} </div>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Poocount is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export { Details };
