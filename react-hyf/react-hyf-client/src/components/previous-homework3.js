import React from 'react';
import ProfileImage from './sub-components/profile-image';
import ProfileFullname from './sub-components/profile-fullname';
import ProfileDetails from './sub-components/profile-details';
import GenderFilter from './gender-filter';
import './styles/previous-homework3.css';

const endpoint = 'https://uinames.com/api/';
const amount = 30;

class PreviousHomework3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loaded: false,
      profiles: {
        female: [],
        male: [],
        random: [],
      },
      currentProfile: 0,
      filter: '',
    };
  }

  fetchPeople = filter => {
    if (filter !== this.state.filter) {
      // Filter on the UI
      // this.setState({
      //   profiles: {
      //     ...this.state.profiles,
      //     [filter]: filter === 'random' ? sample : sample.filter(p => p.gender === filter),
      //   },
      //   loaded: true,
      // });

      fetch(`${endpoint}?gender=${filter}&ext&amount=${amount}`)
        .then(results => results.json())
        .then(
          data => {
            this.setState({
              profiles: {
                ...this.state.profiles,
                ...{ [filter]: data },
              },
              loaded: true,
            });
          },
          error => {
            this.setState({
              loaded: true,
              error,
            });
          },
        );
    }
    this.setState({ filter });
  };

  selectRandomProfile = () => {
    const newIndex = Math.floor(Math.random() * 10);
    this.setState({ currentProfile: newIndex });
  };

  handleKeyUp = e => {
    if (e.which === 32 || e.code === 'Space') {
      this.selectRandomProfile();
    }
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
    this.fetchPeople('random');
  }
  render() {
    const { error, loaded, profiles, currentProfile } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!loaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="week3-homework">
          {loaded && profiles[this.state.filter].length > 0 && (
            <>
              <GenderFilter onPress={this.fetchPeople} />
              <ProfileImage url={profiles[this.state.filter][currentProfile].photo} />
              <ProfileFullname
                name={`${profiles[this.state.filter][currentProfile].name} ${profiles[this.state.filter][currentProfile].surname}`}
              />
              <ProfileDetails profile={profiles[this.state.filter][currentProfile]} />
              {/* <button onClick={() => this.fetchPeople('female')}>Fetch females</button>
              <button onClick={() => this.fetchPeople('male')}>Fetch males</button>
              <button onClick={() => this.fetchPeople('random')}>Fetch random</button> */}
            </>
          )}
        </div>
      );
    }
  }
}
export default PreviousHomework3;
