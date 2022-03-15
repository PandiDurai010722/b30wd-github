import { useState } from "react";
import { ColorBox } from "./ColorBox";

// function colorBox
export function Addcolor() {
  const [colors, setColors] = useState("red");
  const color = {
    background: colors,
  };
  const [colorList, setColorList] = useState(["red", "blue", "yellow", "green"]);
  // Todo - Capture -Typing event
  // event.target.value -typed word
  // setColor -inform react color has changed
  return (
    <div>
      <input value={colors} placeholder="Enter a color" style={color} onChange={(event) => setColors(event.target.value)}></input>
      {/* copy the colorList */}
      <button onClick={() => setColorList([...colorList, colors])}>Add Color</button>
      {colorList.map((clr) => (<ColorBox colors={clr} />))}
    </div>


  );
}
