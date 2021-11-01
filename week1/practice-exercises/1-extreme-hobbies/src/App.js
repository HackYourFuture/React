import "./App.css";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  const hobbyData = hobbies.map((item) => (
    <li key={item.toString()}>{item}</li>
  ));
  return (
    <div>
      <p>{hobbyData}</p>
    </div>
  );
};
const Hobby = () => {
  return (
    <div>
      <p>hobby</p>
    </div>
  );
};
function App() {
  return (
    <div>
      <HobbyList />
      <Hobby />
    </div>
  );
}

export default App;
