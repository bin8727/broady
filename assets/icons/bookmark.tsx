import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconType } from "./iconType";

const Bookmark = ({
  width = 24,
  height = 24,
  fill,
  stroke,
  ...props
}: IconType) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill="#9CA4AB"
      fillRule="evenodd"
      d="M14.7 2c3.393 0 5.339 1.679 5.339 4.604V21.14a1.68 1.68 0 0 1-.842 1.466 1.684 1.684 0 0 1-1.692.014l-5.96-3.367-6.015 3.374c-.26.146-.545.22-.831.22-.295 0-.59-.079-.858-.237A1.68 1.68 0 0 1 3 21.145V6.421C3 3.611 4.947 2 8.342 2H14.7Zm0 1.5H8.343c-2.55 0-3.842.982-3.842 2.921v14.724c0 .094.054.145.099.171a.187.187 0 0 0 .198.002l6.382-3.58a.753.753 0 0 1 .736.001l6.327 3.574a.187.187 0 0 0 .199-.001.191.191 0 0 0 .098-.172V6.49c-.008-.86-.175-2.99-3.838-2.99Zm.44 5.229a.75.75 0 0 1 0 1.5H7.822a.75.75 0 0 1 0-1.5h7.318Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Bookmark;
