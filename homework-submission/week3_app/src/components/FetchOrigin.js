import React, { useState, useEffect } from 'react';

const Steps = () => {
  const [Loding, setLoding] = useState(true);
  const [steps, setSteps] = useState([]);

  async function getSteps() {
    try {
      const dataPromis = await fetch('/steps');
      const dataJson = await dataPromis.json();
      const dataSteps = dataJson.steps;
      setSteps(dataSteps);
      setLoding(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSteps();
  }, []);
  return Loding ? (
    <p>'Loding'</p>
  ) : (
    <ul>
      {steps.map(step => (
        <li key={step.number}>{step.description}</li>
      ))}
    </ul>
  );
};

export default Steps;
