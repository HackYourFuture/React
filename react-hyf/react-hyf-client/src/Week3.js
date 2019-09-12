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
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      index: 0,
      error: false,
      personName: '',
      personInfo: [],
      photo: '',
    };

    this.spacePressed = this.spacePressed.bind(this);
    this.selectPerson = this.selectPerson.bind(this);

    this.abortController = new AbortController();
  }

  componentDidMount() {
    this._isMounted = true;

    fetch('https://uinames.com/api/?ext&amount=10', { signal: this.abortController.signal })
      .then(response => response.json())
      .then(people => {
        if (this._isMounted) {
          this.setState({ people });
        }
      })
      .catch(error => this.setState({ error: true }));

    document.body.addEventListener('keydown', this.spacePressed);
  }

  componentWillUnmount() {
    this._isMounted = false;
    document.body.removeEventListener('keydown', this.spacePressed);
    this.abortController.abort();
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
      <main className="week3">
        {this.state.error ? (
          <Header className={`${this.state.hidden} error`} text="An error occurred. Try refresh." />
        ) : (
          <div className="container">
            <Header className={`${this.state.hidden}`} />
            <Image
              className={`${!this.state.hidden}`}
              url={this.state.photo}
              alt={this.state.personName}
            />
            <Header className={`${!this.state.hidden} name`} text={this.state.personName} />
            <List className={`${!this.state.hidden}`} elementsArr={this.state.personInfo} />
          </div>
        )}
      </main>
    );
  }
}

export { HomeworkWeek3 as Week3 };
