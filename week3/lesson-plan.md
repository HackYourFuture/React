# Lesson Plan - Advanced react

## Forms
Forms works out of the box exactly like plain html.

but if we need to handle form submission in javascript and keep track of what data the user enters in the form, then we use [controlled inputs](#controlled-inputs)

- Controlled Inputs
  - Docs [here](https://reactjs.org/docs/forms.html#controlled-components)
  - Uncontrolled inputs are almost never useful to us
  - For controlled inputs, we must provide _both_:
    - The value
    - The onChange event handler
  - React controls the state of the input, not the browser
- Using data fetching
  - Setting up fetching in `componentDidMount`
  - Talk about loading states
- Prop types
- Children
  - Make a simple example of using `props.children`. Fx the fancyborder component used in [this example](https://reactjs.org/docs/composition-vs-inheritance.html#containment)

[Code inspiration](#random-cats)

## Code inspiration

### Random cats

https://codesandbox.io/s/amazing-swanson-ml92u

```js
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./styles.css";

function FancyBorder(props) {
  return <div className="fancy-border">{props.children}</div>;
}

class RandomCats extends React.Component {
  state = { randomCats: [], inputValue: this.props.defaultNumberOfCats };

  componentDidMount() {
    this.getCat().then(randomCats => {
      const newRandomCats = this.state.randomCats.concat(randomCats);
      this.setState({ randomCats: newRandomCats });
    });
  }

  getCat = () => {
    return fetch(this.props.fetchUrl).then(response =>
      response.json()
    );
  };

  addCat = () => {
    this.getCat().then(randomCats => {
      const newRandomCats = this.state.randomCats.concat(randomCats);
      this.setState({ randomCats: newRandomCats });
    });
  };

  handleInputChange = event => {
    const numberOfCats = event.target.value;
    // Why is this not the best way of doing things??
    this.setState({
      inputValue: numberOfCats,
      randomCats: this.state.randomCats.splice(0, numberOfCats)
    });
  };

  render() {
    return (
      <div className="App">
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeholder="Number of cats"
        />
        <h1>Random cats!!!!</h1>
        <button onClick={this.addCat}>Add cat</button>
        {this.state.randomCats.map(randomCat => {
          return (
            <li>
              <FancyBorder>
                <img src={randomCat.file} />
              </FancyBorder>
            </li>
          );
        })}
      </div>
    );
  }
}

RandomCats.propTypes = {
  fetchUrl: PropTypes.string,
  defaultNumberOfCats: PropTypes.number
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <RandomCats defaultNumberOfCats={2} fetchUrl="https://aws.random.cat/meow" />,
  rootElement
);

```

