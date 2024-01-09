import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconType } from "./iconType";

const ArrowLeft = ({
  width = 24,
  height = 24,
  fill,
  stroke,
  ...props
}: IconType) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill="#282837"
      d="M20 12.485a.75.75 0 0 1-.648.743l-.102.007H6.066l4.763 4.743a.75.75 0 0 1-.974 1.135l-.084-.072-6.05-6.024a.753.753 0 0 1-.101-.125l-.024-.04a.455.455 0 0 1-.044-.093.548.548 0 0 1-.032-.1.569.569 0 0 1-.016-.1.621.621 0 0 1-.004-.045V12.456a.76.76 0 0 1 .003-.044l-.003.073a.754.754 0 0 1 .148-.447l.006-.009a.758.758 0 0 1 .066-.075l6.05-6.025a.75.75 0 0 1 1.132.979l-.073.084-4.761 4.742H19.25a.75.75 0 0 1 .75.75Z"
    />
  </Svg>
);
export default ArrowLeft;
