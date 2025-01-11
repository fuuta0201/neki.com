import ChevronDown from "../assets/images/icons/chevron-down.svg";
import "../assets/styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__links">
        <a href="#what" className="--what">
          <span>what is Neki</span>
          <img src={ChevronDown} alt="" />
        </a>
        <a href="#hobbies" className="--hobbies">
          <span>Neki's hobbies</span>
          <img src={ChevronDown} alt="" />
        </a>
      </div>
      <h1 className="hero__title">
        Neki
        <br />
        is
        <br />
        My soul.
      </h1>
    </div>
  );
};

export default Hero;
