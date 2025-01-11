import AnchorLink from "react-anchor-link-smooth-scroll";
import ChevronDown from "../assets/images/icons/chevron-down.svg";
import "../assets/styles/hero.css";
import ScrollDown from "./ScrollDown";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__links">
        <motion.div
          className="hero__links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5 }}
        >
          <AnchorLink href="#what" className="--what">
            <span>what is Neki</span>
            <img src={ChevronDown} alt="" />
          </AnchorLink>
          <AnchorLink href="#hobbies" className="--hobbies">
            <span>Neki's hobbies</span>
            <img src={ChevronDown} alt="" />
          </AnchorLink>
        </motion.div>
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
