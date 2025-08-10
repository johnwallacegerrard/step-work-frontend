import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import steps from "../../assets/steps";
import "./Steps.css";
import { Link } from "react-router-dom";

function Steps() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="steps">
      <h2 className="steps__title">Steps</h2>
      <div className="steps__container">
        {steps.map((step) => {
          return (
            <div key={step.stepNumber} className="steps__step-container">
              <p className="steps__step-number">{`Step ${step.stepNumber}`}</p>
              <Link to={`/${step.stepNumber}`} className="steps__step-btn">
                {currentUser.stepProgress.length >= step.stepNumber
                  ? "Review Step"
                  : "Work Step"}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Steps;
