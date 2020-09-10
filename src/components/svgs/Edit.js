import React, { memo } from "react";
import { SvgCss } from "react-native-svg";

const xml = `
    <svg width="25" height="25" viewBox="0 0 25 25">
    <defs>
        <style>.a{fill:#fff;}</style>
    </defs>
    <g transform="translate(0 -0.013)">
        <g transform="translate(0 3.196)">
            <path class="a" d="M13.8,80.852,0,94.647v3.184H3.183l13.8-13.8Z" transform="translate(0 -80.852)" />
        </g>
        <g transform="translate(14.857 0.013)">
            <g transform="translate(0 0)">
                <rect class="a" width="3.001" height="4.502" transform="translate(0 2.122) rotate(-45)" />
            </g>
        </g>
    </g>
    </svg>
`;
function Edit() {
  return <SvgCss xml={xml} />;
}
export default memo(Edit);
