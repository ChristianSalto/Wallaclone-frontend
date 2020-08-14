import React from "react";

import "./sliderInp.css";

const SliderInp = (props) => {
  const { value, handleFilterPrice } = props;
  // const [valueMin, setValueMin] = useState(0);
  // const [valueMax, setValueMax] = useState(100);
  console.log("SliderInp")
  return (
    <div className="container-sld">
      <span className="n-range">{value} $</span>
      <input
        type="range"
        className="slider"
        min="1"
        max="10000"
        onChange={handleFilterPrice}
      />
      {/* <input
        type="range"
        className="slider"
        min="100"
        max="100000"
        onChange={(event) => setValueMax(event.target.value)}
      />
      <span>{valueMax}</span> */}
    </div>
  );
};

export default SliderInp;
