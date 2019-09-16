import React, { Component } from 'react';
import FullName from './FullName';
import List from './List';
import Image from './Image';
import FilterBar from './FilterBar';
import './style.css';

class Week3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [],
      filteredPeople: [],
      displayedIndex: 0,
      isLoading: true,
      error: false
    }
  }

  //press space to start show the random people
  keyUpHandler = (event) => {
    if (event.keyCode === 32) {
      this.changeIndex(event);
    };
  }

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10&ext')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const people = data;
        this.setState({
          people,
          filteredPeople: people,
          isLoading: false
        });
      }).catch(err => {
        console.log(err, 'try again!')
        this.setState({ error: true, isLoading: false})
      });
    document.addEventListener('keyup', this.keyUpHandler);
  }

  // specify the index of people
  changeIndex = (e) => {
    const randomIndex =  Math.floor(Math.random()* this.state.filteredPeople.length || this.state.people.length);
    e.preventDefault();
    this.setState({displayedIndex: randomIndex})
  }

  filterPeople = (e) => {
    const filteredValue = e.target.name;
    const filteredPeople = this.state.people.filter(person => {
      return person.gender === filteredValue;
    }); 
    this.setState({ filteredPeople, displayedIndex: 0 });
  }

  resetFilter = () => {
    const filteredPeople = this.state.people;
    this.setState({ filteredPeople });
  }

  render() { 
    const { filteredPeople, displayedIndex, isLoading, error } = this.state;
    let displayedItems = [];
    let person = null;
    if (isLoading === false && error === false) {
      displayedItems = [
        { text: filteredPeople[displayedIndex].gender, icon: '👤'},
        { text: filteredPeople[displayedIndex].region, icon: '🌐'},
        { text: filteredPeople[displayedIndex].phone, icon: '📞'},
        { text: filteredPeople[displayedIndex].birthday.dmy, icon: '🎂'},
        { text: filteredPeople[displayedIndex].email, icon: '✉️'},
        { text: filteredPeople[displayedIndex].password, icon: '🔑'},
      ];
      const filterItems = [{icon: '♂', type: 'male'}, {icon: '♀', type: 'female'}];
      person = (
        <div>
          <FilterBar items={filterItems} filter={this.filterPeople} reset={this.resetFilter} />
          <Image photo={filteredPeople[displayedIndex].photo} name={filteredPeople[displayedIndex].name} />
          <FullName name={filteredPeople[displayedIndex].name} surname={filteredPeople[displayedIndex].surname} />
          <List items={displayedItems} />
        </div>
      );
    }


    return (
      <div className='info_container'>
        {person}
        {error ? <div>something went wrong </div>: null}
      </div>
    );
  }
}
export default Week3;