import React, { Component, createRef } from 'react';
import GenderContainer from '../components/week3/GenderContainer';
import RegionContainer from '../components/week3/RegionContainer';
import ProfileContainer from '../components/week3/ProfileContainer';
import { Grid, Typography, Container, Box } from '@material-ui/core';

export default class HomeworkWeek3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      people: [],
      index: 0,
      amount: 10,
      gender: 'random',
      region: 'random',
      shouldFetch: false
    };

    this.url = () =>
      `https://uinames.com/api/?ext&amount=${this.state.amount}&region=${this.state.region}&gender=${this.state.gender}`;

    this.randomButton = createRef();
    this.maleButton = createRef();
    this.femaleButton = createRef();
    this.regionButton = createRef();
  }

  componentDidMount() {
    // Start listening key events when component is mounted.
    window.addEventListener('keyup', this.handleKeyUp);

    // isLoaded: After component is mounted, let react renders all the components.
    // shouldFetch: This controls fetching data only when the user press spacebar after click any filter.
    // Before you show any profile in the page data must be fetched first. So it shouldFetch:true
    this.setState({ isLoaded: true, shouldFetch: true });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  // Fetch the data only user press spacebar.
  // If you click any filter, it will render random person after fetching
  // otherwise it will render profileComponent by using fetched people array.
  handleKeyUp = e => {
    if (e.which === 32 || e.code === 'Space') {
      if (this.state.shouldFetch) {
        this.setState({ shouldFetch: false }, async () => {
          await this.fetchNewPeople();
          this.randomizeIndex();
        });
      } else {
        this.randomizeIndex();
      }
    }

    // Accessibility: User can filter with 1,2,3,4 numbers of keyboard.
    e.which === 49 && this.randomButton.current.click();
    e.which === 50 && this.maleButton.current.click();
    e.which === 51 && this.femaleButton.current.click();
    e.which === 52 && this.regionButton.current.click();
  };

  // If you set randomPerson (or any) state, React automatically will run the render.
  randomizeIndex() {
    const index = Math.floor(Math.random() * this.state.people.length);
    this.setState({ index });
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

  render() {
    const { index, error, isLoaded, region, gender, people } = this.state;
    const randomPerson = people[index];
    return (
      <Container style={{ height: '100%' }}>
        <Grid
          style={{ height: '100%' }}
          justify="center"
          alignItems="center"
          container
          spacing={4}>
          <Box position="fixed" bottom="20px">
            <GenderContainer
              buttons={[this.randomButton, this.maleButton, this.femaleButton]}
              gender={gender}
              onGenderSelect={text =>
                this.setState({ gender: text, shouldFetch: true })
              }
            />
            <RegionContainer
              button={this.regionButton}
              region={region}
              onRegionSelect={text =>
                this.setState({ region: text, shouldFetch: true })
              }
            />
          </Box>

          {error ? (
            <p>
              An error occured. <br />
              Please try again after one minute!
            </p>
          ) : (
            isLoaded && (
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>
                  {/* Wait user to press spacebar. Then fetch data and render the page*/}
                  {people.length === 0 ? (
                    <Typography align="center" variant="h3">
                      Press Spacebar
                    </Typography>
                  ) : (
                    <ProfileContainer person={randomPerson} />
                  )}
                </Grid>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    );
  }
}
