import { motion } from 'framer-motion';
import '../../assets/styles/title-slide-in-wrapper.css';

type Props = {
  text: string;
};

const TitleSlideInWrapper = ({ text }: Props) => {
  const wordAnimation = {
    hidden: { opacity: 0, y: '1em' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="js-letter">
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="anime-show-up__word">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="anime-show-up__letter"
              variants={wordAnimation}
              initial="hidden"
              animate="visible"
              custom={wordIndex * 10 + charIndex}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </span>
      ))}
    </div>
  );
};

export default TitleSlideInWrapper;
