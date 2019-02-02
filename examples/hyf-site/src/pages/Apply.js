import React, { Component } from 'react';

class Apply extends Component {
  render() {
    return (
      <main className="page">
        <h1 className="page__title">Who can apply?</h1>
        <div className="page__body">
          <p>We teach motivated refugees who want to start their career in web development. The course is open to anyone staying in Belgium. Women are strongly recommended to apply.</p>
          <ul>
            <li>You have to be very motivated to start a career in programming.</li>
            <li>You have to speak English at an intermediate level.</li>
            <li>You have to study around 25 hours per week to keep up with our program.</li>
            <li>We accept students from all over Belgium and we cover transportation costs.</li>
            <li>We provide laptops for students that don't have their own during the training.</li>
          </ul>
        </div>
      </main>
    );
  }
}

export default Apply;
