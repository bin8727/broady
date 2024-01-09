import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconType } from "./iconType";

const PaperFill = ({
  width = 24,
  height = 24,
  fill,
  stroke,
  ...props
}: IconType) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill="#80D676"
      d="M18.809 9.021c-.452 0-1.05-.01-1.794-.01-1.816 0-3.31-1.503-3.31-3.336V2.459A.456.456 0 0 0 13.254 2h-5.29C5.496 2 3.5 4.026 3.5 6.509v10.775C3.5 19.889 5.59 22 8.17 22h7.876c2.46 0 4.454-2.013 4.454-4.498V9.471a.453.453 0 0 0-.453-.458c-.422.003-.93.008-1.238.008Z"
    />
    <Path
      fill="#80D676"
      d="M16.084 2.567a.477.477 0 0 0-.821.334v2.637c0 1.106.91 2.016 2.017 2.016.697.008 1.665.01 2.487.008a.477.477 0 0 0 .343-.808l-4.026-4.187Z"
    />
    <Path
      fill="#FEFEFE"
      fillRule="evenodd"
      d="M8.974 11.388h3.385a.745.745 0 1 0 0-1.49H8.974a.745.745 0 0 0 0 1.49Zm0 4.994h5.444a.745.745 0 1 0 0-1.49H8.974a.745.745 0 0 0 0 1.49Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default PaperFill;
