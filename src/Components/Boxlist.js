import { useState } from "react";
import boxes from "../boxes.js";
import Box from "./Box.js";

const Boxlist = (props) => {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return <main>{squareElements}</main>;
};

export default Boxlist;
