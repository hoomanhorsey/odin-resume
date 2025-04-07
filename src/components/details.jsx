import { useState } from "react";
import { defaultCV } from "../data/defaultCV";

function BenderValues({ CVDetails, category }) {
  const selectedCategory = CVDetails.find((item) => item.category === category);

  return selectedCategory.entries.map((entry) =>
    entry.editStatus === false ? (
      <div className="entryContainer">
        {Object.entries(entry.values).map(([key, value]) => {
          return (
            <>
              <div className="itemContainer" key={entry.id}>
                <div className="itemLabel">{key}</div>
                <input lassName="itemInput" type="text" value={value}></input>
              </div>
            </>
          );
        })}
        <div></div>
        <div>
          <button className="itemButton" onClick={() => submitInfo(entry.id)}>
            Submit
          </button>
        </div>
      </div>
    ) : (
      <div className="entryContainer">
        {Object.entries(entry.values).map(([key, value]) => {
          return (
            <div className="itemContainer" key={entry.id}>
              <div className="itemLabel">{key}</div>
              <div className="itemValue">{value}</div>
            </div>
          );
        })}
        <button className="itemButton" onClick={() => editStatus(entry.id)}>
          Edit
        </button>
      </div>
    )
  );
}

function RenderValues({ CVDetails, category }) {
  return CVDetails.filter((item) => item.category === category).map((item) =>
    item.editStatus === false ? (
      <div className="itemContainer" key={item.id}>
        <div className="itemLabel">{item.label}:</div>
        <input
          className="itemInput"
          type="text"
          value={item.value}
          onChange={(e) => updateValue(item.id, e.target.value)}
        ></input>
        <div>
          <button className="itemButton" onClick={() => submitInfo(item.id)}>
            Submit
          </button>
        </div>
      </div>
    ) : (
      <div className="itemContainer" key={item.id}>
        <div className="itemLabel">{item.label}:</div>
        <div className="itemValue">{item.value}</div>{" "}
        <button className="itemButton" onClick={() => editStatus(item.id)}>
          Edit
        </button>
      </div>
    )
  );
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

  const updateValue = (id, newValue) => {
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

      <RenderValues CVDetails={CVDetails} category={category} />

      {console.log("calling BenderValues with" + { category })}

      <BenderValues CVDetails={CVDetails} category={category} />
    </div>
  ));

  // return categories.map((category) => (
  //   <div key={category}>
  //     <h2>{category}</h2>
  //     {CVDetails.filter((item) => item.category === category).map((item) =>
  //       item.editStatus === false ? (
  //         <div className="itemContainer" key={item.id}>
  //           <div className="itemLabel">{item.label}:</div>
  //           <input
  //             className="itemInput"
  //             type="text"
  //             value={item.value}
  //             onChange={(e) => updateValue(item.id, e.target.value)}
  //           ></input>
  //           <div>
  //             <button className="itemButton" onClick={() => submitInfo(item.id)}>
  //               Submit
  //             </button>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="itemContainer" key={item.id}>
  //           <div className="itemLabel">{item.label}:</div>
  //           <div className="itemValue">{item.value}</div>{" "}
  //           <button className="itemButton" onClick={() => editStatus(item.id)}>
  //             Edit
  //           </button>
  //         </div>
  //       )
  //     )}
  //   </div>
  // ));

  // return categories.map((category) => (
  //   <div key={category}>
  //     <h2>{category}</h2>
  //     {CVDetails.filter((item) => item.category === category).map((item) =>
  //       item.editStatus === false ? (
  //         <div className="itemContainer" key={item.id}>
  //           <div className="itemLabel">{item.label}:</div>
  //           <input
  //             className="itemInput"
  //             type="text"
  //             value={item.value}
  //             onChange={(e) => updateValue(item.id, e.target.value)}
  //           ></input>
  //           <div>
  //             <button className="itemButton" onClick={() => submitInfo(item.id)}>
  //               Submit
  //             </button>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="itemContainer" key={item.id}>
  //           <div className="itemLabel">{item.label}:</div>
  //           <div className="itemValue">{item.value}</div>{" "}
  //           <button className="itemButton" onClick={() => editStatus(item.id)}>
  //             Edit
  //           </button>
  //         </div>
  //       )
  //     )}
  //   </div>
  // ));
}

export { GlobalCV };
