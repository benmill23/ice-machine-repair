import { CheckIcon } from "./icons";

const points = [
  "60-day labor guarantee on all repairs",
  "90-day guarantee on new installations",
  "No charge for return visits on misdiagnosis",
];

/** Workmanship guarantee section. */
export default function GuaranteeSection() {
  return (
    <section className="guarantee" id="guarantee">
      <div className="container">
        <div className="guarantee-content">
          <div className="guarantee-visual">
            <div className="guarantee-badge">
              <div className="number">60</div>
              <div className="label">Day Guarantee</div>
            </div>
          </div>
          <div className="guarantee-text">
            <h2>Our Workmanship Guarantee</h2>
            <p>
              We pride ourselves on our workmanship and believe in our skills as
              refrigeration technicians. If our repair fails or was misdiagnosed
              within 60 days, you will not pay for return labor.
            </p>
            <p>
              We also guarantee our installations are free from refrigeration
              leaks or installation errors for 90 days.
            </p>
            <div className="guarantee-points">
              {points.map((p) => (
                <div className="guarantee-point" key={p}>
                  <CheckIcon />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
