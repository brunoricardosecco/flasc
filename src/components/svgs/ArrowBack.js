import React, { memo } from "react";
import { SvgCss } from "react-native-svg";

const xml = `
<svg width="15.518" height="25" viewBox="0 0 15.518 28.589">
   <defs>
      <style>.a{fill:#fff;}</style>
   </defs>
   <g transform="translate(21.433 0) rotate(90)">
      <path class="a" d="M27.907,9.42,14.294,21.433.682,9.421a1.887,1.887,0,0,1,0-2.9,2.55,2.55,0,0,1,3.29,0L14.3,15.627,24.62,6.516a2.55,2.55,0,0,1,3.289,0A1.888,1.888,0,0,1,27.907,9.42Z" transform="translate(0 0)" />
   </g>
</svg>
`;
function ArrowBack() {
  return <SvgCss xml={xml} />;
}
export default memo(ArrowBack);
