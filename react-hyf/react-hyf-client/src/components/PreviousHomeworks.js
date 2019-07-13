/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
export class PreviousHomeworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: { description: '', deadline: '', done: false },
      items: [
        {
          description: 'Get out of bed',
          deadline: '2017-09-11',
          done: true,
        },
        {
          description: 'Brush teeth',
          deadline: '2017-09-10',
          done: false,
        },
        {
          description: 'Eat breakfast',
          deadline: '2017-09-09',
          done: false,
        },
      ],
    };
  }
  handleDelete(index) {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  }
  handleSubmit(event) {
    event.preventDefault();
    let text = { ...this.state.text };
    const items = [...this.state.items];
    items.push(text);
    this.setState({ items });
  }
  handleChange(event) {
    const text = { ...this.state.text };
    const { name, value } = event.target;
    text[name] = value;
    this.setState({ text });
  }

  render() {
    return (
      <div>
        <p id="todo">Todo</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label id="title">Description:</label>
          <input
            id="input"
            type="text"
            onChange={this.handleChange.bind(this)}
            name="description"
          />
          <label id="title">Deadline:</label>
          <input id="input" type="date" onChange={this.handleChange.bind(this)} name="deadline" />
          <button id="add">Add</button>
        </form>

        {this.state.items.map((item, index) => (
          <ul id="unordered-list" key={index}>
            <li className={item.done ? 'done' : 'not-done'}>
              {item.description},{item.deadline}
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  this.handleDelete.call(this, index);
                }}
              >
                [X]
              </a>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
