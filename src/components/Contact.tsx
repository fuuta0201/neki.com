import "../assets/styles/contact.css";
import Glasses from "../assets/images/icons/glasses.svg";
import ArrowTop from "../assets/images/icons/arrow-top.svg";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact to Neki</h2>
      <div className="contact__box">
        <a
          href="https://en.wiktionary.org/wiki/%E3%83%8D%E3%82%AD"
          target="_brank"
        >
          <img src={Glasses} alt="" className="contact__glasses" />
        </a>
        <img src={ArrowTop} alt="" className="contact__icon" />
        <p className="contact__text">Click to this glasses</p>
      </div>
    </div>
  );
};

export default Contact;
