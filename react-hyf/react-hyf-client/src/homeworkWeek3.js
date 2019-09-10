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

function List({ elementsArr = [], className }) {
  const icons = ['👤', '🌐', '📞', '🎂', '✉️', '🔑'];
  return (
    <section className={`${className} list-container`}>
      <ul className={`${className} list`}>
        {elementsArr.map((element, index) => (
          <ListItem key={index} text={`${icons[index] || ' '} ${element}`} />
        ))}
      </ul>
    </section>
  );
}

class HomeworkWeek3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      index: 0,
      error: false,
    };

    this.spacePressed = this.spacePressed.bind(this);
    this.selectPerson = this.selectPerson.bind(this);
  }

  async componentDidMount() {
    try {
      const people = await fetch('https://uinames.com/api/?ext&amount=10').then(response => {
        return response.json();
      });

      this.setState({ people });

      document.body.addEventListener('keydown', this.spacePressed);
    } catch (error) {
      this.setState({ error: true });
    }
  }

  spacePressed(event) {
    if (event.code === 'Space') {
      if (!this.state.hidden) {
        this.setState({ hidden: true });
      }
      this.selectPerson();
    }
  }

  async selectPerson() {
    const { people } = this.state;
    if (this.state.index > people.length - 1) {
      await this.setState({ index: 0 });
    }
    const person = people[this.state.index];
    const personArr = [
      person.gender,
      person.region,
      person.phone,
      person.birthday.dmy,
      person.email,
      person.password,
    ];
    this.setState({
      personName: `${person.name} ${person.surname}`,
      personInfo: [...personArr],
      photo: person.photo,
      index: this.state.index + 1,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.error ? (
          <Header className={`${this.state.hidden} error`} text="An error occurred. Try refresh." />
        ) : (
          <main className="main">
            <Header className={`${this.state.hidden}`} />
            <Image
              className={`${!this.state.hidden}`}
              url={this.state.photo}
              alt={this.state.personName}
            />
            <Header className={`${!this.state.hidden} name`} text={this.state.personName} />
            <List className={`${!this.state.hidden}`} elementsArr={this.state.personInfo} />
          </main>
        )}
      </div>
    );
  }
}

export default HomeworkWeek3;
