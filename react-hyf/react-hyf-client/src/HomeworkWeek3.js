import React, { Component, Fragment } from 'react';
import FilterContainer from './components/filter/FilterContainer';
import ProfileContainer from './components/profile/ProfileContainer';

export default class HomeworkWeek3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      people: [],
      randomPerson: {},
      amount: 101,
      gender: 'random',
      region: 'random',
      shouldFetch: false
    };

    this.url = () =>
      `https://uinames.com/api/?ext&amount=${this.state.amount}&region=${this.state.region}&gender=${this.state.gender}`;
  }

  componentDidMount() {
    // Start listening key events when component is mounted.
    window.addEventListener('keyup', this.handleKeyUp.bind(this));

    // isLoaded: After component is mounted, let react renders all the components.
    // shouldFetch: This controls fetching data only when the user press spacebar after click any filter.
    // Before you show any profile in the page data must be fetched first. So it shouldFetch:true
    this.setState({ isLoaded: true, shouldFetch: true });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp.bind(this));
  }

  // React will run the render function automatically when any state is updated.
  // You can prevent some unnecessary renders for performans.
  // I don't want react renders when I click gender buttons. (Render needed after pressing spacebar.)
  // (But it should update region button image when the user select any region.)
  // It's not so big thing but I just tested preventing unnecessary rendering by logging.
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.gender !== nextState.gender) {
      return false;
    }
    return true;
  }

  // Fetch the data only user press spacebar.
  // If you click any filter, it will render random person after fetching
  // otherwise it will render profileComponent by using fetched people array.
  handleKeyUp(e) {
    if (e.which === 32 || e.code === 'Space') {
      if (this.state.shouldFetch) {
        this.setState({ shouldFetch: false }, async () => {
          await this.fetchNewPeople();
          this.getRandomPerson();
        });
      } else {
        this.getRandomPerson();
      }
    }

    // Accessibility: User can filter with 1,2,3,4 numbers of keyboard.
    // I couldn't make it using React.createRef();
    const randomButton = document.querySelector('#random');
    const maleButton = document.querySelector('#male');
    const femaleButton = document.querySelector('#female');
    const regionButton = document.querySelector('#region');
    e.which === 49 && randomButton.click();
    e.which === 50 && maleButton.click();
    e.which === 51 && femaleButton.click();
    e.which === 52 && regionButton.click();
  }

  // If you set randomPerson (or any) state, React automatically will run the render.
  getRandomPerson() {
    const index = Math.round(Math.random() * (this.state.people.length - 1));
    this.setState({ randomPerson: this.state.people[index] });
  }

  async fetchNewPeople() {
    try {
      const people = await fetch(this.url()).then(result => result.json());
      this.setState({
        people,
        isLoaded: true
      });
    } catch (error) {
      // Catch errors and set state in order to show errors on the page.
      // (User can fetch max 7 times per minute!)
      this.setState({
        error,
        isLoaded: true
      });
    }
  }

  // If user click any filter, by pressing on next first space button it will fetch new array.
  // See handeKeyUp function!
  handleRegion(region) {
    this.setState({ region, shouldFetch: true });
  }

  handleGender(gender) {
    this.setState({ gender, shouldFetch: true });
  }

  render() {
    const { randomPerson, error, isLoaded, region } = this.state;

    return (
      <div className="wrapper">
        <FilterContainer
          // Pass data from parent component to child components
          // Pass current region to child in order to show current flag inside the region button
          region={region}
          // Lift data from child components to parent component
          // Get region and gender values from child components in order to update the state.
          onRegionSelect={this.handleRegion.bind(this)}
          onGenderSelect={this.handleGender.bind(this)}
        />

        {error ? (
          <p className="warn">
            An error occured. <br />
            Please try again after one minute!
          </p>
        ) : (
          isLoaded && (
            <Fragment>
              {/* Wait user to press spacebar. Then fetch data and render the page*/}
              {Object.keys(randomPerson).length === 0 ? (
                <h1 className="intro">Press Spacebar</h1>
              ) : (
                <ProfileContainer person={randomPerson} />
              )}
            </Fragment>
          )
        )}
      </div>
    );
  }
}
