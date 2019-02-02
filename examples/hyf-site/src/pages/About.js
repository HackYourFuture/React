import React, { Component } from 'react';
import Block from '../components/Block';

class About extends Component {
  render() {
    return (
      <main className="page">
        <h1 className="page__title">What is Hack Your Future?</h1>
        <div className="page__body">
          <p>Refugees often experience challenges in finding a suitable job to apply and further develop their skills. Yet, the number of unfilled vacancies in the IT sector is increasing at a fast pace.</p>
          <p>HackYourFuture was founded in 2015 in Amsterdam, with the aim to enable refugees to build digital skills for a career in web development, facilitate the integration of newcomers, and address the shortage of qualified workforce in the IT sector. Since 2015, HackYourFuture coding schools have also opened in Copenhagen and Malmö.</p>
          <p>On 20 May 2018, HackYourFuture Belgium launched its first class in Belgium with 13 highly motivated students at BeCentral, the digital campus in Brussels. Apply now for class #4, which starts on 17 March 2019.</p>
        </div>
        <div className="page__blocks">
          <Block title="Our Mission" body="Empower refugees by teaching them the necessary skills for a career in software development." />
          <Block title="Our programme" body="Our 6 months course is divided into 8 modules of 3 weeks each, with the exception of the final project which takes 6 weeks." />
          <Block title="Our training" body="Every Sunday volunteer-coaches and students meet at BeCentral in Brussels for in-person classes. Students are supported online with their homework during the week." />
        </div>
      </main>
    );
  }
}

export default About;
