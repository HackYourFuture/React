import React from "react";
import { BigHead } from "@bigheads/core";
import { avatars } from "./data";

export const Avatar = ({ name, avatarFeatures }) => {
  return (
    <BigHead
      body={avatars[name].body}
      facialHair={avatars[name].facialHair}
      skinTone={avatars[name].skinTone}
      accessory={avatarFeatures.accessory}
      clothing={avatarFeatures.clothing}
      clothingColor={avatarFeatures.clothingColor}
      eyebrows={avatarFeatures.eyebrows}
      eyes={avatarFeatures.eyes}
      graphic={avatarFeatures.graphic}
      hair={avatarFeatures.hair}
      hairColor={avatarFeatures.hairColor}
      hat={avatarFeatures.hat}
      hatColor={avatarFeatures.hatColor}
      lipColor={avatarFeatures.lipColor}
      mouth={avatarFeatures.mouth}
    />
  );
};
