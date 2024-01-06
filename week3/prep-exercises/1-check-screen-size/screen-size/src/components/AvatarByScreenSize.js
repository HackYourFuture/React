import { useSizeRange } from "../hooks/useWindowSize";
import { BigHead } from "@bigheads/core";

const avatarProps = {
  Mithi: {
    hat: "beanie",
    hatColor: "blue",
    accessory: "roundGlasses",
    clothing: "shirt",
    clothingColor: "red",
    graphic: "mug1",
  },
  Diana: {
    hat: "winterHat3",
    hatColor: "pink",
    accessory: "roundGlasses",
    clothing: "hoodie",
    clothingColor: "green",
    graphic: "mug2",
  },
  Mikong: {
    hat: "cap",
    hatColor: "black",
    accessory: "none",
    clothing: "shirtCrewNeck",
    clothingColor: "blue",
    graphic: "none",
  },
};
const AvatarByScreenSize = () => {
  const isBigScreen = useSizeRange(1000, Infinity);
  const isMidScreen = useSizeRange(700, 999);

  let avatar = null;
  let info = null;

  if (isBigScreen) {
    avatar = <BigHead {...avatarProps["Mithi"]} />;
    info = { name: "Mithi", screenSize: "big" };
  } else if (isMidScreen) {
    avatar = <BigHead {...avatarProps["Diana"]} />;
    info = { name: "Diana", screenSize: "medium" };
  } else {
    avatar = <BigHead {...avatarProps["Mikong"]} />;
    info = { name: "Mikong", screenSize: "small" };
  }

  return (
    <div className="avatar-container">
      {avatar}
      <h3>
        You are seeing <strong>{info.name}</strong> because your screen size is{" "}
        <strong>{info.screenSize}</strong>!
      </h3>
    </div>
  );
};

export default AvatarByScreenSize;
