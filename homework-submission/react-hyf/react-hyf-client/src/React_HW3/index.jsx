import React from 'react';

class HomeworkWeek3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // fetch('https://uinames.com/api/?amount=10') is not available always
    fetch('https://api.github.com/orgs/HackYourFuture/repos?per_page=100')
      .then(data => data.json())
      .then(repos => {
        console.log(repos);
        this.setState({ repos });
      });
  }

  RenderReposData = () => {
    return (
      <div>
        <h1>Repository Information''s</h1>
        {this.state.repos ? (
          this.state.repos.map(repo => (
            <div key={repo.id}>
              <table class="w3-table">
                <tr>
                  <th>Repository ID</th>
                  <th>Repository Name</th>
                  <th>Number of Forks</th>
                  <th>Repository Created at</th>
                  <th>Repository Description</th>
                </tr>
                <tr>
                  <td>{repo.id}</td>
                  <td>{repo.name}</td>
                  <td>{repo.forks_count}</td>
                  <td>{repo.created_at}</td>
                  <td>{repo.description}</td>
                </tr>
              </table>
            </div>
          ))
        ) : (
          <h1>Data is loading...</h1>
        )}
      </div>
    );
  };

  render() {
    return <this.RenderReposData />;
  }
}

export default HomeworkWeek3;
