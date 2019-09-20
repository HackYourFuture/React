import React from 'react';
import './App.css';

function Header({ text = 'Press Spacebar', className = '' }) {
  return <h1 className={`header ${className}`}>{text}</h1>;
}

function Image({ url, alt }) {
  return <img src={url} className="avatar" alt={alt} />;
}

function ListItem({ text }) {
  return <li className="list-item">{text}</li>;
}

function List({ person }) {
  const icons = ['👤', '🌐', '📞', '🎂', '✉️', '🔑'];
  const personArr = Object.keys(person).length
    ? [
        person.gender,
        person.region,
        person.phone,
        person.birthday.dmy,
        person.email,
        person.password,
      ]
    : [];

  return (
    <section className="list-container">
      <ul className="list">
        {personArr.map((info, index) => (
          <ListItem key={index} text={`${icons[index] || ' '} ${info}`} />
        ))}
      </ul>
    </section>
  );
}

class HomeworkWeek3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      index: 0,
      people: [],
      person: {},
    };

    this.handleKeydown = this.handleKeydown.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://uinames.com/api/?ext&amount=10');
      const people = await response.json();

      this.setState({ people });

      document.body.addEventListener('keydown', this.handleKeydown);
    } catch (error) {
      this.setState({ error: true });
    }
  }

  async handleKeydown(event) {
    event.preventDefault();

    const { people } = this.state;
    if (this.state.index > people.length - 1) {
      await this.setState({ index: 0 });
    }
    const person = people[this.state.index];

    this.setState({
      person,
      index: this.state.index + 1,
    });
  }

  render() {
    const { person, error } = this.state;

    if (error) {
      return <Header className={`error`} text="An error occurred. Try refresh." />;
    }

    return (
      <div className="App">
        {Object.keys(person).length === 0 ? (
          <Header />
        ) : (
          <main className="main">
            <Image url={person.photo} alt={person.name} />
            <Header className="name" text={`${person.name} ${person.surname}`} />
            <List person={this.state.person} />
          </main>
        )}
      </div>
    );
  }
}

export default HomeworkWeek3;
