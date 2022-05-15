import data from "./data";
import Slider from "./slider";
const Strength = () => {
  return (
    <div className="strength-container">
      <div className="top-portion">
        <div className="title"> Strength Bar </div>
        <p> Introducing strength bar to help you know your weak subjects.</p>
      </div>

      <div className="middle-portion">
        {data.map((element) => {
          const { name } = element;
          return (
            <div>
              <p>{name}</p>
              <Slider {...element} />
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div className="finish-btn">Finish </div>
      </div>
    </div>
  );
};
export default Strength;
