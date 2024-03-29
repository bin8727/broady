import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconType } from "./iconType";

const Paper = ({
  width = 24,
  height = 24,
  fill,
  stroke,
  ...props
}: IconType) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke="#9CA4AB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.738 2.762H8.085A3.82 3.82 0 0 0 4.25 6.49v10.713a3.828 3.828 0 0 0 3.742 3.91c.03 0 .06.002.092 0h7.989a3.887 3.887 0 0 0 3.729-3.91V8.038l-5.065-5.276Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#9CA4AB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.475 2.75v2.909a2.574 2.574 0 0 0 2.568 2.575h2.755M14.288 15.358h-5.4M12.243 11.606H8.887"
    />
  </Svg>
);
export default Paper;
