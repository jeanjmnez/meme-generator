import React from "react";
import { useState } from "react";

const AddItem = () => {
  const [thingsArray, setThingsArray] = useState(["Things 1", "Things 2"]);

  function addItem() {
    setThingsArray((prevState) => {
      return [...prevState, `Things ${prevState.length + 1}`];
    });
  }

  const thingsElements = thingsArray.map((thing) => (
    <p key={thing}> {thing}</p>
  ));

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
};

export default AddItem;
