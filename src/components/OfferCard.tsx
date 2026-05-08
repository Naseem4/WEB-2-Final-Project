import type { Offer } from "../types/offer";
import "./OfferCard.css";

type Props = {
  offer: Offer;
  selected: boolean;
  onSelect: (id: number) => void;
};

function OfferCard({ offer, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      className={`offer-card ${selected ? "active" : ""} ${
        offer.badge ? "popular" : ""
      }`}
      onClick={() => onSelect(offer.id)}
    >
      {offer.badge && <div className="popular-badge">{offer.badge}</div>}

      <div className="card-check">✓</div>

      <div className="card-top">
        <div>
          <div className="card-tag">{offer.tag}</div>
          <h3>{offer.title}</h3>
          <p>{offer.subtitle}</p>
        </div>

        <div className="price-box">
          <strong>${offer.price}</strong>
          <span>/mo</span>
        </div>
      </div>

      {offer.save && <div className="save-badge">{offer.save}</div>}

      <ul>
        {offer.features.map((feature, index) => (
          <li
            key={index}
            className={feature.included ? "included" : "excluded"}
          >
            <span className="feat-dot" />
            {feature.text}
          </li>
        ))}
      </ul>
    </button>
  );
}

export default OfferCard;