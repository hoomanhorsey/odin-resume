import { useState } from "react";

function GlobalCV() {
  const defaultCV = [
    { id: 1, label: "Name", value: "Jimmy", editStatus: false },
    { id: 2, label: "Email", value: "jimmy@jimmy.com", editStatus: true },
    { id: 3, label: "Phone", value: "123456789", editStatus: false },
    { id: 4, label: "School", value: "#", editStatus: false },
    { id: 5, label: "Course Details", value: "#", editStatus: false },
    { id: 6, label: "Dates", value: "#", editStatus: false },
    { id: 7, label: "Company Name", value: "#", editStatus: false },
    { id: 8, label: "Position Title", value: "#", editStatus: false },
    { id: 9, label: "Dates", value: "#", editStatus: false },
  ];

  const [CVDetails, setCVDetails] = useState(defaultCV);

  const editStatus = (id) => {
    setCVDetails((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, editStatus: false } : item
      )
    );
  };

  const updateValue = (id, newValue) => {
    setCVDetails((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      )
    );
  };

  const submitInfo = (id) => {
    // console.log(id, "submitted info", CVDetails[id].value);
    setCVDetails((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              editStatus: true,
            }
          : item
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
        <button onClick={() => submitInfo(item.id)}>Submit</button>
      </div>
    ) : (
      <div key={item.id}>
        {item.label}: {item.value}{" "}
        <button onClick={() => editStatus(item.id)}>Edit</button>
      </div>
    )
  );
  return editStatusRender;
}

export { GlobalCV };
