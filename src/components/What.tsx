import Logo from "../assets/images/logo.png";
import "../assets/styles/what.css";

const What = () => {
  return (
    <div className="what">
      <h2 className="what__title">What is Neki?</h2>
      <img src={Logo} alt="" className="what__image" />
      <p className="what__text">
        ネキとは、人生の在るべき形。
        <br />
        ネキを魂に生活することで、より良い暮らしを実現できる。
        <br />
        本サイトでは、ネキの頂点であるotamunekiから <br />
        ネキの本質、ネキとして生きる事の大切さを追求する。
      </p>
    </div>
  );
};

export default What;
