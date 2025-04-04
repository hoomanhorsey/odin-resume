import { useState } from "react";
import { defaultCV } from "../data/defaultCV";

function BenderValues({ CVDetails, category }) {
  CVDetails.map((item) => console.log(item));

  CVDetails.filter((item) => item.category === category).map((item) =>
    console.log("filtered", item)
  );

  return CVDetails.filter((item) => item.category === category).map(
    (item) =>
      item.items.map((subItem) =>
        subItem.values.editStatus === false ? (
          <>
            <div> editStatus false</div>
            <div class="itemContainer">
              <div> {subItem.values.name}</div>
              <div></div>
              <div></div>
            </div>
          </>
        ) : (
          <div>boo </div>
        )
      )

    // item.values.editStatus === false ? (
    //   <div class="itemContainer" key={items.label}>
    //     <div class="itemLabel">{items.label}:</div>
    //     <input
    //       class="itemInput"
    //       type="text"
    //       value={items.values.name}
    //       onChange={(e) => updateValue(item.id, e.target.value)}
    //     ></input>
    //     <div>
    //       <button
    //         class="itemButton"
    //         onClick={() => submitInfo(items.values.name)}
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </div>
    // ) : (
    //   <div class="itemContainer" key={item.id}>
    //     <div class="itemLabel">{item.label}:</div>
    //     <div class="itemValue">{item.value}</div>{" "}
    //     <button class="itemButton" onClick={() => editStatus(item.id)}>
    //       Edit
    //     </button>
    //   </div>
    // )
  );
}

function RenderValues({ CVDetails, category }) {
  return CVDetails.filter((item) => item.category === category).map((item) =>
    item.editStatus === false ? (
      <div class="itemContainer" key={item.id}>
        <div class="itemLabel">{item.label}:</div>
        <input
          class="itemInput"
          type="text"
          value={item.value}
          onChange={(e) => updateValue(item.id, e.target.value)}
        ></input>
        <div>
          <button class="itemButton" onClick={() => submitInfo(item.id)}>
            Submit
          </button>
        </div>
      </div>
    ) : (
      <div class="itemContainer" key={item.id}>
        <div class="itemLabel">{item.label}:</div>
        <div class="itemValue">{item.value}</div>{" "}
        <button class="itemButton" onClick={() => editStatus(item.id)}>
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

      {console.log("hi")}
      <RenderValues CVDetails={CVDetails} category={category} />
      <BenderValues CVDetails={CVDetails} category={category} />
    </div>
  ));

  // return categories.map((category) => (
  //   <div key={category}>
  //     <h2>{category}</h2>
  //     {CVDetails.filter((item) => item.category === category).map((item) =>
  //       item.editStatus === false ? (
  //         <div class="itemContainer" key={item.id}>
  //           <div class="itemLabel">{item.label}:</div>
  //           <input
  //             class="itemInput"
  //             type="text"
  //             value={item.value}
  //             onChange={(e) => updateValue(item.id, e.target.value)}
  //           ></input>
  //           <div>
  //             <button class="itemButton" onClick={() => submitInfo(item.id)}>
  //               Submit
  //             </button>
  //           </div>
  //         </div>
  //       ) : (
  //         <div class="itemContainer" key={item.id}>
  //           <div class="itemLabel">{item.label}:</div>
  //           <div class="itemValue">{item.value}</div>{" "}
  //           <button class="itemButton" onClick={() => editStatus(item.id)}>
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
  //         <div class="itemContainer" key={item.id}>
  //           <div class="itemLabel">{item.label}:</div>
  //           <input
  //             class="itemInput"
  //             type="text"
  //             value={item.value}
  //             onChange={(e) => updateValue(item.id, e.target.value)}
  //           ></input>
  //           <div>
  //             <button class="itemButton" onClick={() => submitInfo(item.id)}>
  //               Submit
  //             </button>
  //           </div>
  //         </div>
  //       ) : (
  //         <div class="itemContainer" key={item.id}>
  //           <div class="itemLabel">{item.label}:</div>
  //           <div class="itemValue">{item.value}</div>{" "}
  //           <button class="itemButton" onClick={() => editStatus(item.id)}>
  //             Edit
  //           </button>
  //         </div>
  //       )
  //     )}
  //   </div>
  // ));
}

export { GlobalCV };
