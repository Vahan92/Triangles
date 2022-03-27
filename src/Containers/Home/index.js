import React, { useState } from "react";

import { ReactComponent as Star } from "../../assets/images/star.svg";

import "./style.css";

function Home() {
  const [triangleArr, setTriangleArr] = useState([]);
  const [reverse, setReverse] = useState(false);

  function generatePyramid(numberOfRows) {
    if (numberOfRows < 1) {
      setTriangleArr([]);
      return;
    }
    if (numberOfRows > 11) {
      return;
    }
    let result = [];
    var output = "";
    let subArr = [];
    for (var i = 1; i <= numberOfRows; i++) {
      for (var j = 1; j <= i; j++) {
        subArr.push((output += j));
      }
      result.push(subArr);
      output = "";
      subArr = [];
    }
    setTriangleArr(result);
  }

  return (
    <div className="container">
      <input type="number" onChange={(event) => generatePyramid(event.target.value)} />
      <div className="wrapper">
        {triangleArr.length > 0 && (
          <div className={`rows ${reverse ? 'reverse' : ''}`}>
            {triangleArr.map((subArr, i) => {
              return (
                <div className="row" key={i}>
                  {subArr.map((image) => {
                    return <Star key={image} />;
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <button onClick={() => setReverse(!reverse)}>Reverse</button>
    </div>
  );
}

export default Home;
