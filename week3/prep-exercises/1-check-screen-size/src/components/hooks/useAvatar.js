import { useEffect, useState } from "react";
import useDimensions from "./useDimensions";
import { features } from "../data";

const useAvatar = () => {
  const { windowDimensions } = useDimensions();
  const [avatar, setAvatar] = useState({});
  const [avatarFeatures, setAvatarFeatures] = useState({});

  const randomFeatures = () => {
    const list = {};

    for (let key in features) {
      const randomIndex = Math.floor(Math.random() * features[key].length);
      list[key] = features[key][randomIndex];
    }

    setAvatarFeatures(list);
  };

  const screenSize = () => {
    let type = {};
    if (windowDimensions.width < 768) {
      type = {
        name: "Michael",
        screenType: "small",
      };
    } else if (windowDimensions.width < 1440) {
      type = {
        name: "Jenny",
        screenType: "medium",
      };
    } else {
      type = { name: "Bob", screenType: "big" };
    }
    setAvatar(type);
  };

  useEffect(() => {
    screenSize();
    randomFeatures();
  }, [windowDimensions]);
  return { avatar, avatarFeatures };
};

export default useAvatar;
