import { useParams } from "react-router-dom";
import steps from "../../assets/steps";

import "./StepIntroModal.css";
import { useRef } from "react";

function StepIntroModal() {
  const introModalRef = useRef();

  const { stepNumber } = useParams();
  const step = steps.find((s) => s.stepNumber === parseInt(stepNumber));

  const closeModal = () => {
    introModalRef.current.classList.add("modal_closed");
  };

  return (
    <div ref={introModalRef} className="modal">
      <div className="modal__content">
        <p className="modal__intro">{step.stepIntro}</p>
        <button onClick={closeModal} className="modal__close-btn">
          {`Begin step ${step.stepNumber}`}
        </button>
      </div>
    </div>
  );
}

export default StepIntroModal;
