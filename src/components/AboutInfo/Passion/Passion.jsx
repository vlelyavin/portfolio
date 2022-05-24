import { BsBicycle } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import { BsCpu } from "react-icons/bs";
import "./Passion.scss";

export const Passion = () => {
  const styles = { width: "120px", height: "120px", color: "var(--primary)" };
  return (
    <section className="passion">
      <div className="passion__row">
        <div className="passion__column">
          <BsBicycle className="passion__icon" style={styles} />
          <div className="passion__name">Biking</div>
        </div>
        <div className="passion__column">
          <GiEarthAmerica className="passion__icon" style={styles} />
          <div className="passion__name">Travelling</div>
        </div>
        <div className="passion__column">
          <BsCpu className="passion__icon" style={styles} />
          <div className="passion__name">Techology</div>
        </div>
      </div>
    </section>
  );
};
