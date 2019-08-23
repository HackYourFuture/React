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

https://codesandbox.io/s/random-cats-ml92u

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

## Exercise

### Time registration
Make a site that manages time registration for employees.

#### User stories

##### Submit shift
As a employee i would like to submit my shift. The shift should include
- Employee name
- Start time
- End time

##### Shift overview
As an employeer i would like to have an overview of the employee shifts. They should be displayed in a list, showing 
- Employee name
- Start time
- End time
- Total number of hours
- Price for shift

##### Total price
As an employeer i would like to have an overview of the total logged time and the total price for that time.

##### Filter submitted shifts
As an employeer i would like to filter the shifts based on name.

#### Technical details

All components should have prop types defined.

##### Submit shift
The submit shift form should come up as a modal. The simplest way to do this is setting the modal to fixed position. 

Use controlled inputs to get the shift information.

Pressing save will add the shift to the shifts overview.

What input type should `start` and `end` be?

##### Shift overview
To fetch the default shifts, use this api: https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw

When is it we should do fetching in a react component?

Remember loading state when fetching the default shifts.

The shift components should be wrapped in a border component that adds a border to the component being wrapped. Do this using `props.children`.

##### Filter submitted shifts
Do this again using controlled inputs.


#### Mockups

##### Submit shift
![Submit shift](assets/submit-shift.jpg)


##### Shifts overview
![Submit shift](assets/shifts-overview.jpg)
