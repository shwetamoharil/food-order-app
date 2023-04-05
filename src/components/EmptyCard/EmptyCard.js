import "./EmptyCard.scss";

const EmptyCard = () => {
  return (
    <div className="empty-card">
      <div className="empty-card__img"></div>
      <div className="empty-card__name"></div>
      <div className="empty-card__stars"></div>
    </div>
  );
};

export default EmptyCard;
