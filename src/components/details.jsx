import { useState } from "react";
import { defaultCV } from "../data/defaultCV";

function RenderValues({ CVDetails, category, updateValue, toggleEditStatus }) {
  const selectedCategory = CVDetails.find((item) => item.category === category);

  return selectedCategory.entries.map((entry) => {
    const entryValues = Object.entries(entry.values).map(([key, value]) => (
      <div className="itemContainer" key={entry.id + key}>
        <div className="itemLabel">{key}: </div>
        {entry.editStatus === false ? (
          <div>
            <input
              className="itemInput"
              type="text"
              value={value}
              onChange={(e) =>
                updateValue(entry.id, key, e.target.value, category)
              }
            ></input>
          </div>
        ) : (
          <div className="itemValue">{value}</div>
        )}
      </div>
    ));
    return (
      <div className="entryContainer" key={entry.id}>
        {entryValues}
        <div className="buttonDiv">
          {entry.editStatus === false ? (
            <button
              className="itemButton"
              onClick={() => toggleEditStatus(entry.id, category)}
            >
              Submit
            </button>
          ) : (
            <button
              className="itemButton"
              onClick={() => toggleEditStatus(entry.id, category)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    );
  });
}

function GlobalCV() {
  const [CVDetails, setCVDetails] = useState(defaultCV);

  const updateValue = (id, key, newValue, category) => {
    setCVDetails((prevState) =>
      prevState.map((categoryObj) => {
        if (categoryObj.category !== category) return categoryObj;

        return {
          ...categoryObj,
          entries: categoryObj.entries.map((entry) => {
            if (entry.id !== id) return entry;

            return {
              ...entry,
              values: {
                ...entry.values,
                [key]: newValue, // 👈 key being updated
              },
            };
          }),
        };
      })
    );
  };

  const toggleEditStatus = (id, category) => {
    setCVDetails((prevState) =>
      prevState.map((categoryObj) => {
        if (categoryObj.category !== category) return categoryObj;

        return {
          ...categoryObj,
          entries: categoryObj.entries.map((entry) => {
            if (entry.id !== id) return entry;

            return {
              ...entry,
              editStatus: !entry.editStatus,
            };
          }),
        };
      })
    );
  };

  const categories = ["Details", "Education", "Work"];

  return categories.map((category) => (
    <div className="section" key={category}>
      <h2>{category}</h2>

      <RenderValues
        CVDetails={CVDetails}
        category={category}
        updateValue={updateValue}
        toggleEditStatus={toggleEditStatus}
      />
    </div>
  ));
}

export { GlobalCV };
