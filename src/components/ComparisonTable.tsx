import type { Offer } from "../types/offer";
import "./ComparisonTable.css";

type Props = {
  offers: Offer[];
};

function ComparisonTable({ offers }: Props) {
  const training = offers.find((offer) => offer.id === 1);
  const diet = offers.find((offer) => offer.id === 2);
  const full = offers.find((offer) => offer.id === 3);

  if (!training || !diet || !full) return null;

  const rows = [
    {
      label: "Workout plan",
      values: [training.showTraining, diet.showTraining, full.showTraining],
    },
    {
      label: "Diet plan",
      values: [training.showDiet, diet.showDiet, full.showDiet],
    },
    {
      label: "Progress tracking",
      values: [true, true, true],
    },
    {
      label: "Priority support",
      values: [false, false, true],
    },
  ];

  return (
    <section className="comparison">
      <div className="comparison-head">
        <h2>Compare Plans</h2>
        <p>See what is included before you continue.</p>
      </div>

      <div className="comparison-table">
        <div className="comparison-row comparison-header">
          <span>Feature</span>
          <span>Training</span>
          <span>Diet</span>
          <span>Full</span>
        </div>

        {rows.map((row) => (
          <div className="comparison-row" key={row.label}>
            <span>{row.label}</span>
            {row.values.map((value, index) => (
              <span key={index} className={value ? "yes" : "no"}>
                {value ? "✓" : "—"}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComparisonTable;