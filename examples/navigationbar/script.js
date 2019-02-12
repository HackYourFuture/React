const NavigationItem = ({text}) => {
  return <li>{text}</li>
}

const NavigationBar = () => {
  return (
    <ul>
      <NavigationItem text="Home" />
      <NavigationItem text="About" />
      <NavigationItem text="Contact" />
    </ul>
  )
}

class App extends React.Component {
  render() {
    return (
      <nav>
        <NavigationBar />
      </nav>
    )
  }
}

const root = document.getElementById("navigationBar");

ReactDOM.render(<App />, root);
