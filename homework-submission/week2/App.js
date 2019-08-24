const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
}


const Counter = ({ counter, increaseCounter, decreaseCounter }) => {
  return (
  <div>
    <h1>Counter | {counter}</h1>
          <button onClick={increaseCounter}>Increase</button>
          <button onClick={decreaseCounter}>Decrease</button>
  </div>
  )
}

const initCounter = ({ initializeCounter }) => {
    return (
      <form onSubmit={initializeCounter}>
        <input type="text" name="Nadin"/>
        <button type="submit">submit</button>
      </form>
    )
}
  
class App extends React.Component {
  constructor(props) {
    supper(props);
    this.state = {
    []
    }
  }
  increaseCounter(event) {
    this.setState({ counter: ++this.state.counter });
  }
  decreaseCounter(event) {
    this.setState({ counter: --this.state.counter });
  }
  initializeCounter(event) {
    event.preventDefault();
    const value = event.target.Nadin.value;
    this.setState({counter: value})
  }

  render() {
    return (
      <div className="panel">
        <InitCounter initializeCounter={this.initializeCounter.bind(this)} />
        <Counter
          counter={this.state.counter}
          increaseCounter={this.increaseCounter.bind(this)}
          decreaseCounter={this.decreaseCounter.bind(this)}
        />
      </div>
    );
  }

const root = document.getElementById('thisIsWhereReactIsInjected');

ReactDOM.render(<App />, root);
