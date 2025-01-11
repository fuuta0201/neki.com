import "../assets/styles/hobbies.css";
import Card from "./Card";
import Pc from "../assets/images/icons/pc.svg";
import People from "../assets/images/icons/people.svg";
import Bed from "../assets/images/icons/bed.svg";

const Hobbies = () => {
  return (
    <div className="hobbies" id="hobbies">
      <div className="hobbies__inner">
        <h2 className="hobbies__title">Neki’s hobbies</h2>
        <div className="hobbies__cards">
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
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
