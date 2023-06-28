import React from "react";

function Box(props) {
  return (
    <div>
      <div
        style={{
          height: `${props.height}em`,
          width: `${props.width}em`,
          backgroundColor: props.color,
        }}
      />
      <button onClick={props.removeBox}>X</button>
    </div>
  );
}
export default Box;
