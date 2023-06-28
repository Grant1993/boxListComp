import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewBoxForm(props) {
  const [state, setState] = useState({ height: "", width: "", color: "" });
  function handleChange(evt) {
    setState((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...state, id: uuidv4() };
    props.createBox(newBox);
    setState({
      height: "",
      width: "",
      color: "",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='height'>Height</label>
        <input
          type='text'
          name='height'
          value={state.height}
          onChange={handleChange}
          id='height'
        />
      </div>
      <div>
        <label htmlFor='width'>Width</label>
        <input
          type='text'
          name='width'
          value={state.width}
          onChange={handleChange}
          id='width'
        />
      </div>
      <div>
        <label htmlFor='color'>Colour</label>
        <input
          type='text'
          name='color'
          value={state.color}
          onChange={handleChange}
          id='color'
        />
      </div>
      <button>Add New Box</button>
    </form>
  );
}
export default NewBoxForm;
