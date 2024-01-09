import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { IconType } from "./iconType";

const BookmarkFill = ({
  width = 24,
  height = 24,
  fill,
  stroke,
  ...props
}: IconType) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <G fill="#80D676" clipPath="url(#a)">
      <Path d="M11.991 18.622 5.5 21.864a1.02 1.02 0 0 1-1.376-.4A1.09 1.09 0 0 1 4 20.967v-7.258c0 .72.406 1.164 1.473 1.661l6.518 3.252Z" />
      <Path
        fillRule="evenodd"
        d="M8.895 2h6.175c2.707 0 4.904 1.066 4.93 3.793v15.174c-.001.17-.044.338-.123.488a1.008 1.008 0 0 1-1.402.409l-6.484-3.242-6.518-3.252C4.406 14.873 4 14.428 4 13.71V5.793C4 3.066 6.196 2 8.895 2Zm-.67 7.622h7.524a.788.788 0 0 0 .785-.79.788.788 0 0 0-.785-.791H8.225a.788.788 0 0 0-.785.79c0 .437.351.791.785.791Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BookmarkFill;
