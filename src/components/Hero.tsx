import AnchorLink from "react-anchor-link-smooth-scroll";
import ChevronDown from "../assets/images/icons/chevron-down.svg";
import "../assets/styles/hero.css";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__links">
        <AnchorLink href="#what" className="--what">
          <span>what is Neki</span>
          <img src={ChevronDown} alt="" />
        </AnchorLink>
        <AnchorLink href="#hobbies" className="--hobbies">
          <span>Neki's hobbies</span>
          <img src={ChevronDown} alt="" />
        </AnchorLink>
      </div>
      <h1 className="hero__title">
        Neki
        <br />
        is
        <br />
        My soul.
      </h1>
      <ScrollDown />
    </div>
  );
};

export default Hero;
