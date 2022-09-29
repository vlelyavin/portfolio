import mtb from "../../../images/mtbIcon.png";
import mtbDark from "../../../images/mtbIconDark.png";
import travelling from "../../../images/travelling.png";
import travellingDark from "../../../images/travellingDark.png";
import technology from "../../../images/technology.png";
import technologyDark from "../../../images/technologyDark.png";
import "./Passion.scss";

export const Passion = ({ theme }) => {
  return (
    <section className="passion">
      <div className="passion__row">
        <div className="passion__column">
          <img className="passion__icon" src={theme === "dark" ? mtb : mtbDark} alt="mtb" />
          <div className="passion__name">Biking</div>
        </div>
        <div className="passion__column">
          <img className="passion__icon" src={theme === "dark" ? travelling : travellingDark} alt="travelling" />
          <div className="passion__name">Travelling</div>
        </div>
        <div className="passion__column">
          <img className="passion__icon" src={theme === "dark" ? technology : technologyDark} alt="technology" />
          <div className="passion__name">Techology</div>
        </div>
      </div>
    </section>
  );
};
