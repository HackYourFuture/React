import { useWindowSize } from "./hooks/useWindowSize";
import DisplaySize from "./components/DisplaySize";
import AvatarByScreenSize from "./components/AvatarByScreenSize";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="box">
      <DisplaySize width={width} height={height} />
      <AvatarByScreenSize />
      <h3>
        Resizing your window changes the clothes and accessories of the avatar.
        A specific avatar is shown depending whether your window is big, medium,
        or small.
      </h3>
    </div>
  );
}

export default App;
