import { useState } from "react";

function FullName() {
  const [fullName, setFullName] = useState("default");
  const [editStatus, setEditStatus] = useState(true);

  const fullNameSubmit = (e) => {
    setFullName(fullName);
    setEditStatus(false);
  };

  const fullNameEdit = (e) => {
    setFullName(fullName);
    setEditStatus(true);
  };

  if (editStatus) {
    return (
      <div>
        <h2>Name</h2>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        ></input>
        <button onClick={fullNameSubmit}>Submit</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Name</h2>
        <div>
          {fullName} <button onClick={fullNameEdit}>Edit</button>
        </div>
      </div>
    );
  }
}

function GlobalCV() {
  // const defaultCV = {
  //   name: "Jimmy",
  //   email: "jimmy@jimmyjimjimjimmy.com",
  //   phone: 123456789,
  // };

  // const defaultCV = {
  //   name: { value: "Jimmy", editStatus: false },
  //   email: { value: "jimmy@jimmyjimjimjimmy.com", editStatus: false },
  //   phone: { value: 123456789, editStatus: false },
  //   achievements: [
  //     { text: "Graduated with honors", editStatus: false },
  //     { text: "Won coding competition", editStatus: false },
  //   ],
  // };
  const defaultCV = [
    { id: 1, label: "Name", value: "Jimmy", editStatus: false },
    { id: 2, label: "Email", value: "jimmy@jimmy.com", editStatus: true },
    { id: 3, label: "Phone", value: "123456789", editStatus: false },
  ];

  const [CVDetails, setCVDetails] = useState(defaultCV);

  const generic = () => {};

  const updateValue = (id, newValue) => {
    setCVDetails((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      )
    );
  };

  const editStatusRender = CVDetails.map((item) =>
    item.editStatus === false ? (
      <div key={item.id}>
        {item.label}
        <input
          type="text"
          value={item.value}
          onChange={(e) => updateValue(item.id, e.target.value)}
        ></input>
        <button onClick={generic}>Submit</button>
      </div>
    ) : (
      <div key={item.id}>
        {item.label}: {item.value} <button onClick={generic}>Edit</button>
      </div>
    )
  );
  return editStatusRender;

  // return (
  //   <>
  //     <h1>CV Submit</h1>
  //     <div>
  //       {CVDetails[0].value}
  //       <input
  //         type="text"
  //         value={CVDetails[0].value}
  //         onChange={(e) => generic(e.target.value)}
  //       ></input>
  //       <button onClick={generic}>Submit</button>
  //     </div>

  //     <h1>CV</h1>
  //     <div>
  //       Name: {CVDetails[0].value} <button onClick={generic}>Edit</button>
  //     </div>
  //     <div>
  //       Email: {CVDetails[1].value} <button onClick={generic}>Edit</button>
  //     </div>
  //     <div>
  //       Phone: {CVDetails[2].value}
  //       <button onClick={generic}>Edit</button>
  //     </div>
  //   </>
  // );
}

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
      <div>
        First Name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <button onClick={doEdit}>edit</button>
        <button onClick={submit}>submit</button>
      </div>
    </>
  );
}

function LastName() {
  const [lastName, setlastName] = useState("");

  return (
    <>
      <br></br>
      <br></br>
      <div>
        Last Name
        <input
          type="text"
          value={lastName}
          // onChange={(e) => setLastName(e.target.value)}
        ></input>
        {/* <button onClick={doEdit}>edit</button> */}
        {/* <button onClick={submit}>submit</button> */}
      </div>
    </>
  );
}

function Resume(firstName) {
  return (
    <>
      <h1>Final Resume</h1>
      <div> {firstName}</div>
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

export { FullName, Details, LastName, Resume, GlobalCV };
