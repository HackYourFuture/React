import React from 'react';
import './style.css';

class HomeworkWeek3 extends React.Component {
  render() {
    const data = this.props.data;
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    const date = new Date(+new Date(1989, 1, 1) - Math.floor(Math.random() * 10000000000));
    return (
      <div>
        {
          data.map(item => {
            return (
              <div key={item.surname}>
                <h1 className="text">
                  {item.name} {item.surname}
                </h1>
                <div>
                  <ul>
                    <li>
                      <span role="img" aria-label="person-emoji">
                        👤
                      </span>
                      <span className="text">{item.gender}</span>
                    </li>
                    <li>
                      <span role="img" aria-label="world-emoji">
                        🌐
                      </span>
                      <span className="text">{item.region}</span>
                    </li>
                    <li>
                      <span role="img" aria-label="phone-emoji">
                        📞
                      </span>
                      <span className="text">{randomNumber}</span>
                    </li>
                    <li>
                      <span role="img" aria-label="birthday cake-emoji">
                        🎂
                      </span>
                      <span className="text">{date.toISOString().slice(0, 10)}</span>
                    </li>
                    <li>
                      <span role="img" aria-label="mail-emoji">
                        ✉️
                      </span>
                      <span className="text">
                        {item.name}-{item.surname}@example.com
                      </span>
                    </li>
                    <li>
                      <span role="img" aria-label="key-emoji">
                        🔑
                      </span>
                      <span className="text">
                        {item.name}-{date.toISOString().slice(2, 4)}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })[Math.floor(Math.random() * 10)]
        }
      </div>
    );
  }
}

export default HomeworkWeek3;
