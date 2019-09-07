import React, { Component } from 'react';
import FullName from './FullName';
import List from './List';
import Image from './Image';
import FilterBar from './FilterBar';

class HomeworkWeek3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [],
      filteredPeople: [],
      displayedIndex: 0,
    }
  }
  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10&ext')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const people = data;
        
        this.setState({people, filteredPeople: people})
  
      }).catch(err => {
        console.log(err, 'try again!')
      });
  }
  changeIndex = (e) => {
    const randomIndex = 0 + Math.floor(Math.random()* this.state.filteredPeople.length || this.state.people.length);
    console.log(randomIndex);
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
    const { filteredPeople, displayedIndex } = this.state;
    console.log(displayedIndex, filteredPeople);
    const displayedItems = filteredPeople.length ? [
      { text: filteredPeople[displayedIndex].gender, icon: '👤'},
      { text: filteredPeople[displayedIndex].region, icon: '🌐'},
      { text: filteredPeople[displayedIndex].phone, icon: '📞'},
      { text: filteredPeople[displayedIndex].birthday.dmy, icon: '🎂'},
      { text: filteredPeople[displayedIndex].email, icon: '✉️'},
      { text: filteredPeople[displayedIndex].password, icon: '🔑'},
    ] : [];

    const filterItems = [{icon: '♂', type: 'male'}, {icon: '♀', type: 'female'}];
    const person = (
      filteredPeople.length ?
        <div>
          <FilterBar items={filterItems} filter={this.filterPeople} reset={this.resetFilter} />
          <Image photo={filteredPeople[displayedIndex].photo} name={filteredPeople[displayedIndex].name} />
          <FullName name={filteredPeople[displayedIndex].name} surname={filteredPeople[displayedIndex].surname} />
          <List items={displayedItems} />
        </div>
        : null
    )

    return (
      <div className='info_container'>
        {person}
        <button onClick={this.changeIndex}>Click to change</button>
      </div>
    );
  }
}
export default HomeworkWeek3;