import type { Offer } from "../types/offer";
import "./OfferCard.css";

type Props = {
  offer: Offer;
  selected: boolean;
  onSelect: (id: number) => void;
};

function OfferCard({ offer, selected, onSelect }: Props) {
  return (
    <div
      className={`offer-card ${selected ? "active" : ""}`}
      onClick={() => onSelect(offer.id)}
    >
      <h3>{offer.title}</h3>
      <p>{offer.subtitle}</p>

      <ul>
        {offer.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default OfferCard;