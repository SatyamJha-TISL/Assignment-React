import data from "./data";
import Slider from "./slider";
const Strength = () => {
  return (
    <div className="strength-container">
      <div className="top-portion">
        <div className="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.493"
            height="10.489"
            viewBox="0 0 10.493 10.489"
          >
            <path
              id="Icon_ionic-ios-close"
              data-name="Icon ionic-ios-close"
              d="M17.775,16.534l3.748-3.748a.878.878,0,0,0-1.242-1.242l-3.748,3.748-3.748-3.748a.878.878,0,1,0-1.242,1.242l3.748,3.748-3.748,3.748a.878.878,0,1,0,1.242,1.242l3.748-3.748,3.748,3.748a.878.878,0,0,0,1.242-1.242Z"
              transform="translate(-11.285 -11.289)"
              fill="#fff"
              opacity="0.8"
            />
          </svg>
        </div>
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
