import { useState } from "react";
import boxes from "../boxes.js";

const Box = () => {
  const [squares, setSquareElements] = useState(boxes);
  const squareElements = squares.map((square) => (
    <div className="box" key={square.id}></div>
  ));

  return <main>{squareElements}</main>;
};

export default Box;
