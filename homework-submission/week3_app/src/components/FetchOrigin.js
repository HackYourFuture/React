import React, { useState, useEffect } from 'react';

const Steps = () => {
  const [loding, setLoding] = useState(true);
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState(false);

  async function getSteps() {
    try {
      const dataPromis = await fetch('/steps');
      const dataJson = await dataPromis.json();
      const dataSteps = dataJson.steps;
      setSteps(dataSteps);
      setLoding(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getSteps();
  }, []);
  return loding ? (
    <p>{error ? `Error: ${error.message}` : 'Loding'}</p>
  ) : (
    <div>
      <h3>Steps, Fetch Origin.</h3>
      <ol>
        {steps.map(step => (
          <li key={step.number}>{step.description}</li>
        ))}
      </ol>
    </div>
  );
};

export default Steps;
