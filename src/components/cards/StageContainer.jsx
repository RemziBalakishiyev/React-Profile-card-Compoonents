import React, { useState } from "react";
import "./Card.css";
function StageContainer() {
  const [value, setValue] = useState("ramzi");
  const [step, setStep] = useState(3);

  const handleChange = () => {
    setValue("ahmed");
  };

  let index = 0;

  const increasStep = function () {
    //* BAD PRACTICE ❌
    // setStep(step + 1);
    // GOOD PRACTICE 👍
    index++;
    setStep((prevStep) => prevStep + 1);
  };
  const decreaseStep = function () {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className='counter-container'>
      <span onClick={increasStep}>
        <i className='fa fa-plus'></i>
      </span>
      <p>{step}</p>
      <span onClick={decreaseStep}>
        <i className='fa fa-minus'></i>
      </span>
    </div>
  );
}

export default StageContainer;
