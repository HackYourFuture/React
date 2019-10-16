import React from 'react';
import stepsData from '../static_data/stepsData';
const steps = stepsData.steps;

const StaticSteps = () => {
  return (
    <div>
      <h3>Steps, static build in.</h3>
      <ol>
        {steps.map(step => (
          <li key={step.number}>{step.description}</li>
        ))}
      </ol>
    </div>
  );
};

export default StaticSteps;
