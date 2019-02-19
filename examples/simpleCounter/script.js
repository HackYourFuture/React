const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const InitCount = ({ formHandler }) => {
  return (
    <form onSubmit={formHandler}>
      <input type="number" name="initCount" />
      <button type="submit">Start count</button>
    </form>
  );
};

const Counter = ({ counterName, count, clickHandlers }) => {
  const { increase, decrease } = clickHandlers;
  return (
    <div className="counterContainer">
      <h1>
        {counterName} |<span className="header-count">{count}</span>
      </h1>
      <Button clickHandler={increase} text="Increase" />
      <Button clickHandler={decrease} text="Decrease" />
    </div>
  );
};

class App extends React.Component {
  state = {
    count: 0
  };

  handleSubmit = formValues => {
    formValues.preventDefault();
    this.setState({
      count: formValues.target.initCount.value
    });
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    const clickHandlers = {
      increase: this.increaseCount,
      decrease: this.decreaseCount
    };

    return (
      <div className="panel">
        <InitCount formHandler={this.handleSubmit} />
        <Counter
          counterName="Counter"
          count={this.state.count}
          clickHandlers={clickHandlers}
        />
      </div>
    );
  }
}

const root = document.getElementById("simpleCounter");

ReactDOM.render(<App />, root);
