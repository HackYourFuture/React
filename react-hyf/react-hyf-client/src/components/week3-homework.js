import React from 'react';
import ProfileImage from './sub-components/profile-image';
import ProfileFullname from './sub-components/profile-fullname';
import ProfileDetails from './sub-components/profile-details';
import './styles/week3-homework.css';

class HomeworkWeek3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loaded: false,
      profiles: [],
      currentProfile: 0,
      urlToFetch: '?amount=10&ext',
    };
  }

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
    fetch(`https://uinames.com/api/${this.state.urlToFetch}`)
      .then(results => results.json())
      .then(
        data => {
          this.setState({ profiles: data, loaded: true });
        },
        error => {
          this.setState({
            loaded: true,
            error,
          });
        },
      );
  }
  render() {
    const { error, loaded, profiles, currentProfile } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!loaded) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.profiles);
      return (
        <div className="week3-homework">
          {loaded && <ProfileImage url={profiles[currentProfile].photo} />}
          {loaded && (
            <ProfileFullname
              name={`${profiles[currentProfile].name} ${profiles[currentProfile].surname}`}
            />
          )}
          {loaded && <ProfileDetails profile={profiles[currentProfile]} />}
        </div>
      );
    }
  }
}
export default HomeworkWeek3;
