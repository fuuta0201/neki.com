import { motion, useScroll, useTransform } from 'framer-motion';
import '../assets/styles/hobbies.css';
import Card from './Card';
import Pc from '../assets/images/icons/pc.svg';
import People from '../assets/images/icons/people.svg';
import Bed from '../assets/images/icons/bed.svg';
import FadeInUpWrapper from './animation/FadeInUpWrapper';
import Pattern1 from '../assets/images/icons/pattern-1.svg';
import Pattern2 from '../assets/images/icons/pattern-2.svg';

const Hobbies = () => {
  const { scrollYProgress } = useScroll();

  const pattern1Y = useTransform(scrollYProgress, [0, 1], [100, -250]);
  const pattern2Y = useTransform(scrollYProgress, [0, 1], [200, -250]);
  return (
    <div className="hobbies" id="hobbies">
      <div className="hobbies__inner">
        <FadeInUpWrapper>
          <h2 className="hobbies__title">Neki’s hobbies</h2>
        </FadeInUpWrapper>
        <div className="hobbies__cards">
          <FadeInUpWrapper>
            <Card
              img={Pc}
              title="アニメ"
              text="日々アニメを探し、<br />
                アニメを研究し、<br />
                アニメとは何なのか。<br />
                それを考え鑑賞し続けます。<br />
                アニメから得られる事こそが<br />
                人生を生き抜く術となり、<br />
                ネキとしての道標なのです。"
            />
          </FadeInUpWrapper>
          <FadeInUpWrapper>
            <Card
              img={People}
              title="同族探し"
              text="ネキは常々ネキ及びニキを<br />
                探索しています。<br />
                ネキは特殊な力を使い<br />
                同族のレベルを測定することが可能です。<br />
                誰が一番のネキなのか、<br />
                日々競い合っているのです。"
            />
          </FadeInUpWrapper>
          <FadeInUpWrapper>
            <Card
              img={Bed}
              title="睡眠"
              text="ネキにとって最も重要な物<br />
                それは睡眠です。<br />
                日中はアニメに全勢力を使用するため、そのエネルギーを<br />
                睡眠によって補充します。<br />
                睡眠こそがネキとして<br />
                生きる為の第一歩なのです。"
            />
          </FadeInUpWrapper>
        </div>
      </div>
      <motion.img
        src={Pattern1}
        alt="Pattern 1"
        style={{
          position: 'absolute',
          bottom: 10,
          left: 50,
          translateY: pattern1Y,
          width: 226,
          height: 492,
          opacity: 0.8,
        }}
      />
      <motion.img
        src={Pattern2}
        alt="Pattern 2"
        style={{
          position: 'absolute',
          bottom: 10,
          right: 11,
          translateY: pattern2Y,
          width: 189,
          height: 424,
          opacity: 0.8,
        }}
      />
    </div>
  );
};

export default Hobbies;
