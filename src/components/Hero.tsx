import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ChevronDown from '../assets/images/icons/chevron-down.svg';
import '../assets/styles/hero.css';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion';
import TitleSlideInWrapper from './animation/TitleSlideInWrapper';

const Hero = () => {
  const [isShowTitle, setIsShowTitle] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(function () {
      setIsShowTitle(true);
    }, 5000);
  }, []);
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
      {isShowTitle && (
        <h1 className="hero__title">
          <TitleSlideInWrapper text="Neki" />
          <br />
          <TitleSlideInWrapper text="is" />
          <br />
          <TitleSlideInWrapper text="My soul." />
        </h1>
      )}
      <ScrollDown />
    </div>
  );
};

export default Hero;
