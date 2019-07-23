import React from 'react';
import { Link } from 'react-router-dom';

class Classes extends React.Component {
  render() {
    const { match, history } = this.props;
    console.log('history:', history);
    console.log('match:', match);

    return (
      <div>
        <h1>classes</h1>;
        <ul>
          <li>
            <Link to={`${match.url}/class-19`}>Class19</Link>
          </li>
          <li>
            <Link to={`${match.url}/class-20`}>Class20</Link>
          </li>
          <li>
            <Link to={`${match.url}/class-21`}>Class21</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Classes;
