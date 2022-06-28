import { useState } from "react";

const Box = (props) => {
  const [on, setOn] = useState(props.on);
  console.log(props.on);

  const styles = {
    backgroundColor: on === true ? "#222222" : "transparent",
  };

  function toggle() {
    console.log("test toggle");
    setOn((prevOn) => !prevOn);
  }

  return <div className="box" style={styles} onClick={toggle}></div>;
};

export default Box;
