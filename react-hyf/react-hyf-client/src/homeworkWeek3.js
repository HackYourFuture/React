import React from 'react';
import './App.css';

function Header({ text = 'Press Spacebar', className }) {
  return <h1 className={className}>{text}</h1>;
}

function Image({ url, className, alt }) {
  return <img src={url} className={`${className} avatar`} alt={alt} />;
}

function ListItem({ text }) {
  return <li className="list-item">{text}</li>;
}

function List({ person, className }) {
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
    <section className={`${className} list-container`}>
      <ul className={`${className} list`}>
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
      hidden: 'hidden',
      willHide: '',
      index: 0,
      people: [],
      person: {},
      personName: '',
      photo: '',
    };

    this.spacePressed = this.spacePressed.bind(this);
    this.selectPerson = this.selectPerson.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://uinames.com/api/?ext&amount=10');
      const people = await response.json();

      this.setState({ people });

      document.body.addEventListener('keydown', this.spacePressed);
    } catch (error) {
      this.setState({ error: true });
    }
  }

  spacePressed(event) {
    if (event.code === 'Space') {
      this.setState({ hidden: '', willHide: 'hidden' });

      this.selectPerson();
    }
  }

  async selectPerson() {
    const { people } = this.state;
    if (this.state.index > people.length - 1) {
      await this.setState({ index: 0 });
    }
    const person = people[this.state.index];

    this.setState({
      person,
      personName: `${person.name} ${person.surname}`,
      photo: person.photo,
      index: this.state.index + 1,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.error ? (
          <Header className={`error`} text="An error occurred. Try refresh." />
        ) : (
          <main className="main">
            <Header className={`${this.state.willHide}`} />
            <Image
              className={`${this.state.hidden}`}
              url={this.state.photo}
              alt={this.state.personName}
            />
            <Header className={`${this.state.hidden} name`} text={this.state.personName} />
            <List className={`${this.state.hidden}`} person={this.state.person} />
          </main>
        )}
      </div>
    );
  }
}

export default HomeworkWeek3;
