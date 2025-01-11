import "../assets/styles/card.css";

type CardProps = {
  img: string;
  title: string;
  text: string;
};

const Card = ({ img, title, text }: CardProps) => {
  return (
    <div className="card">
      <img src={img} alt="" className="card__image" />
      <h3 className="card__title">{title}</h3>
      <p className="card__text" dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export default Card;
