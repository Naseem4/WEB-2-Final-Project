import type { Offer } from "../types/offer";
import "./StickyFooter.css";

type Props = {
  selectedOffer?: Offer;
  onContinue: () => void;
};

function StickyFooter({ selectedOffer, onContinue }: Props) {
  return (
    <div className="sticky-footer">
      <div className="selected-info">
        <span>Selected plan</span>
        <strong>
          {selectedOffer ? `${selectedOffer.title} · ${selectedOffer.price}/mo` : "Choose a plan"}
        </strong>
      </div>

      <button
        type="button"
        className="footer-button"
        disabled={!selectedOffer}
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
}

export default StickyFooter;