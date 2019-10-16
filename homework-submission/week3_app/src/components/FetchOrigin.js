import React, { useState, useEffect } from 'react';

const Steps = () => {
  const [loding, setLoding] = useState(true);
  const [steps, setSteps] = useState([]);
  console.log(`1:${loding}`);

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
  return loding ? (
    <p>'Loding'</p>
  ) : (
    <div>
      <h3>Steps</h3>
      <ol>
        {steps.map(step => (
          <li key={step.number}>{step.description}</li>
        ))}
      </ol>
    </div>
  );
};

export default Steps;
