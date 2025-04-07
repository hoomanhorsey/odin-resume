import { useState } from "react";
import { defaultCV } from "../data/defaultCV";

function FenderValues({
  CVDetails,
  category,
  editStatus,
  updateValue,
  submitInfo,
}) {
  const selectedCategory = CVDetails.find((item) => item.category === category);

  console.log(category, "+ ", selectedCategory);

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
        <div>
          {entry.editStatus === false ? (
            <button className="itemButton" onClick={() => submitInfo(entry.id)}>
              Submit
            </button>
          ) : (
            <button className="itemButton" onClick={() => editStatus(entry.id)}>
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

  const editStatus = (id) => {
    setCVDetails((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, editStatus: false } : item
      )
    );
  };

  const updateValue = (id, key, newValue, category) => {
    console.log("called update---", id, key, newValue, category);

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
  // setCVDetails((prevState) => {
  //   const updateCategory = prevState.find(
  //     (item) => item.category === category
  //   );
  //   const updateEntry = updateCategory.entries.find(
  //     (entry) => entry.id === id
  //   );

  //   console.log(updateEntry);

  //   console.log(updateEntry.values[key]);

  //   console.log(newValue);

  //   return { ...prevState.category.id.values[key], [key]: newValue };
  // .find((subItem) => subItem.id === id)
  // .values.map((entryItems) =>
  //   entryItems.key === key ? console.log("Enormous poo") : null
  // );

  // item.id === id ? { ...item, value: newValue } : item
  //   });
  // };
  const DRAFTupdateValue = (id, newValue) => {
    setCVDetails((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      )
    );
  };

  const submitInfo = (id) => {
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

  const categories = ["Details", "Education", "Work"];

  return categories.map((category) => (
    <div key={category}>
      <h2>{category}</h2>

      <FenderValues
        CVDetails={CVDetails}
        category={category}
        editStatus={editStatus}
        updateValue={updateValue}
        submitInfo={submitInfo}
      />

      {/* <BenderValues CVDetails={CVDetails} category={category} /> */}
    </div>
  ));
}

export { GlobalCV };
