import { useState } from "react";
import OfferCard from "../components/OfferCard";
import { offers } from "../data/offers";
import "./OffersPage.css";

function OffersPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    if (!selected) {
      alert("Please select an option");
      return;
    }
    setStep(2);
  };

  return (
    <div className="page">
      <div className="content">
        {step === 1 && (
          <>
            <h1>Choose Your Offer</h1>

            <div className="cards">
              {offers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  selected={selected === offer.id}
                  onSelect={setSelected}
                />
              ))}
            </div>

            <button className="main-button" onClick={handleContinue}>
              Continue
            </button>
          </>
        )}

        {step === 2 && selected === 1 && (
          <div className="step-box">
            <h2>Training Options</h2>

            <label>Goal</label>
            <select>
              <option>Lose Weight</option>
              <option>Gain Muscle</option>
              <option>Stay Fit</option>
            </select>

            <label>Training Days</label>
            <select>
              <option>3 Days</option>
              <option>4 Days</option>
              <option>5 Days</option>
            </select>

            <div className="button-row">
              <button className="secondary-button" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="main-button">Save</button>
            </div>
          </div>
        )}

        {step === 2 && selected === 2 && (
          <div className="step-box">
            <h2>Diet Plan Options</h2>

            <label>Goal</label>
            <select>
              <option>Lose Weight</option>
              <option>Maintain Weight</option>
              <option>Gain Weight</option>
            </select>

            <label>Calories</label>
            <select>
              <option>1500 Calories</option>
              <option>2000 Calories</option>
              <option>2500 Calories</option>
            </select>

            <div className="button-row">
              <button className="secondary-button" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="main-button">Save</button>
            </div>
          </div>
        )}

        {step === 2 && selected === 3 && (
          <div className="step-box">
            <h2>Complete Plan</h2>

            <label>Fitness Goal</label>
            <select>
              <option>Lose Weight</option>
              <option>Gain Muscle</option>
              <option>Body Recomposition</option>
            </select>

            <label>Training Days</label>
            <select>
              <option>3 Days</option>
              <option>4 Days</option>
              <option>5 Days</option>
            </select>

            <label>Calories</label>
            <select>
              <option>1500 Calories</option>
              <option>2000 Calories</option>
              <option>2500 Calories</option>
            </select>

            <div className="button-row">
              <button className="secondary-button" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="main-button">Save</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OffersPage;