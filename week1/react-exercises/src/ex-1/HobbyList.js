import Hobby from "./Hobby";

export default function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return hobbies.map((hobby, index) => {
    return <Hobby hobby={hobby} key={"hobby" + index} />;
  });
}
