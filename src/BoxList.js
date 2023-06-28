import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [state, setState] = useState({
    boxes: [],
  });
  function create(newBox) {
    setState({
      boxes: [...state.boxes, newBox],
    });
  }
  function remove(id) {
    setState({
      boxes: state.boxes.filter((box) => box.id !== id),
    });
  }
  const boxes = state.boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      color={box.color}
      removeBox={() => remove(box.id)}
    />
  ));
  return (
    <div>
      <h1>Colour Box Maker</h1>
      <NewBoxForm createBox={create} />
      {boxes}
    </div>
  );
}
export default BoxList;
