import "./App.css";
import useDimensions from "./components/hooks/useDimensions";
import useAvatar from "./components/hooks/useAvatar";
import { Avatar } from "./components/Avatar";

function App() {
  const { avatar, avatarFeatures } = useAvatar();
  const { windowDimensions } = useDimensions();
  return (
    <div className="App">
      <span>
        {windowDimensions.width}px / {windowDimensions.height}px
      </span>
      {Object.keys(avatar).length !== 0 &&
        Object.keys(avatarFeatures).length !== 0 && (
          <div className="container">
            <div className="avatar">
              <Avatar name={avatar.name} avatarFeatures={avatarFeatures} />
            </div>
            <div className="description">
              <p>{`You are seeing ${avatar.name}, because your screen size is ${avatar.screenType}`}</p>
            </div>
          </div>
        )}
    </div>
  );
}

export default App;
