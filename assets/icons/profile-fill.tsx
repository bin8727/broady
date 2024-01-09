import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconType } from "./iconType";

const ProfileFill = ({
  width = 24,
  height = 24,
  fill,
  stroke,
  ...props
}: IconType) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill="#80D676"
      d="M8 13.174c4.339 0 8 .705 8 3.425C16 19.32 12.315 20 8 20c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401ZM8 0a5.273 5.273 0 0 1 5.294 5.291A5.274 5.274 0 0 1 8 10.583a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 8 0Z"
    />
  </Svg>
);
export default ProfileFill;
