import "./styles.scss";
import Slider from "./components/slider";
import Strength from "./components/strength-card";

export default function App() {
  return (
    <div className="App">
      <div className="part-one">
        <div className="subject-buttons">History </div>
        <Slider />
      </div>
      <div className="connector"></div>
      <Strength />
    </div>
  );
}
