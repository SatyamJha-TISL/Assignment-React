import { useRef } from "react";

const Slider = ({ color, marks, name }) => {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  const changeHandler = (e) => {
    const value = e.target.value;
    console.log(value);

    if (value <= 33.33) {
      firstRef.current.style.background = `linear-gradient(90deg, #fd755e ${
        3 * value
      }%, #fff ${value}%)`;
      secondRef.current.style.background = "#fff";
      thirdRef.current.style.background = "#fff";
    } else if (value > 33.33 && value <= 66.64) {
      firstRef.current.style.background = "#ff993f";
      secondRef.current.style.background = `linear-gradient(90deg, #ff993f ${
        3 * (value - 33.33)
      }%, #fff ${value}%)`;
      thirdRef.current.style.background = "#fff";
    }
    // 66.64 - 100
    else {
      let color = name == "Average" ? "#ffd504" : "#569efe";
      firstRef.current.style.background = `${color}`;
      secondRef.current.style.background = `${color}`;
      thirdRef.current.style.background = `linear-gradient(90deg, ${color} ${
        3 * (value - 66.66)
      }%, #fff ${value}%)`;
    }
  };

  /* useEffect(() => {
    changeHandler();
  },[]);*/

  return (
    <div className="progress-bar">
      <input
        type="range"
        min="1"
        max="33.33"
        className="bar bar-one"
        onInput={changeHandler}
        ref={firstRef}
      />
      <input
        type="range"
        min="33.34"
        max="66.66"
        className="bar"
        onInput={changeHandler}
        ref={secondRef}
      />
      <input
        type="range"
        min="66.67"
        max="100"
        className="bar"
        onInput={changeHandler}
        ref={thirdRef}
      />
    </div>
  );
};

export default Slider;
