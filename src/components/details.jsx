import { useState } from "react";

function GlobalCV() {
  const defaultCV = [
    {
      id: 1,
      category: "Details",
      label: "Name",
      value: "Jimmy",
      editStatus: false,
    },
    {
      id: 2,
      category: "Details",
      label: "Email",
      value: "jimmy@jimmy.com",
      editStatus: true,
    },
    {
      id: 3,
      category: "Details",
      label: "Phone",
      value: "123456789",
      editStatus: false,
    },
    {
      id: 4,
      category: "Education",
      label: "School",
      value: "University of Sydney",
      editStatus: false,
    },
    {
      id: 5,
      category: "Education",
      label: "Course Details",
      value: "Bachelor of Law",
      editStatus: false,
    },
    {
      id: 6,
      category: "Education",
      label: "Dates",
      value: "1997 - 1999",
      editStatus: false,
    },
    {
      id: 7,
      category: "Work",
      label: "Company Name",
      value: "Big Law Firm",
      editStatus: false,
    },
    {
      id: 8,
      category: "Work",
      label: "Position Title",
      value: "Chief Legal Person",
      editStatus: false,
    },
    {
      id: 9,
      category: "Work",
      label: "Dates",
      value: "2000-2017",
      editStatus: false,
    },
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
      {CVDetails.filter((item) => item.category === category).map((item) =>
        item.editStatus === false ? (
          <div class="itemContainer" key={item.id}>
            <div class="itemLabel">{item.label}</div>
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
      )}

      {/* {CVDetails.filter((item) => item.category === category).map((item) => (
        <div key={item.id} item={item} />
      ))} */}

      {/* {CVDetails.map((item) =>
        item.editStatus === false ? <div> Poo</div> : <div>NonPoo</div>
      )} */}

      {/* {CVDetails.map((item) =>
        item.editStatus === false ? (
          <div class="itemContainer" key={item.id}>
            <div class="itemLabel">{item.label}</div>
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
      )} */}
    </div>
  ));

  CVDetails.map((item) =>
    item.editStatus === false ? (
      <div class="itemContainer" key={item.id}>
        <div class="itemLabel">{item.label}</div>
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

  // return CVDetails.map((item) =>
  //   item.editStatus === false ? (
  //     <div class="itemContainer" key={item.id}>
  //       <div class="itemLabel">{item.label}</div>
  //       <input
  //         class="itemInput"
  //         type="text"
  //         value={item.value}
  //         onChange={(e) => updateValue(item.id, e.target.value)}
  //       ></input>

  //       <div>
  //         <button class="itemButton" onClick={() => submitInfo(item.id)}>
  //           Submit
  //         </button>
  //       </div>
  //     </div>
  //   ) : (
  //     <div class="itemContainer" key={item.id}>
  //       <div class="itemLabel">{item.label}:</div>
  //       <div class="itemValue">{item.value}</div>{" "}
  //       <button class="itemButton" onClick={() => editStatus(item.id)}>
  //         Edit
  //       </button>
  //     </div>
  //   )
  // );
}

export { GlobalCV };
