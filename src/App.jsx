import React, { useState } from "react";
import "./App.css";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { TbArrowBigDownLineFilled } from "react-icons/tb";

const App = () => {
  let place = [
    "Mayapur ISKON, Nadia",
    "Santipur , Nadia",
    "Sikim,India",
    "Central park,Nadia",
  ];

  const [data, setData] = useState(place);

  function moveDown(id) {
    console.log(id);

    const copy = [...data];
    let temp = copy[id];
    copy[id] = copy[id + 1];
    copy[id + 1] = temp;

    setData(copy);
  }

  function moveUp(id) {
    console.log(id);

    const copy = [...data];
    let temp = copy[id];
    copy[id] = copy[id - 1];
    copy[id - 1] = temp;

    setData(copy);
  }

  return (
    <div className="container">
      <h1>Swipe places</h1>
        {data.map((pl, idx) => {
          return (
            <div className="filip">
              <p>{pl}</p>
              <div className="ic">
                {idx !=0 && <TbArrowBigUpLineFilled onClick={()=>moveUp(idx)}/>}
                {idx != 3 && <TbArrowBigDownLineFilled onClick={()=>moveDown(idx)}/>}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default App;
