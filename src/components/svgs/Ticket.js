import React, { memo } from "react";
import { SvgCss } from "react-native-svg";

const xml = `
<svg width="32.42" height="32.42" viewBox="0 0 32.42 32.42">
   <defs>
      <style>.a{fill:#fff;}</style>
   </defs>
   <g transform="translate(0)">
      <g transform="translate(0)">
         <path class="a" d="M146.977,158.523a.421.421,0,0,0,.118.745l1.751.544.544,1.751a.419.419,0,0,0,.336.29.419.419,0,0,0,.409-.172l1.059-1.5,1.834.023a.421.421,0,0,0,.342-.672l-1.1-1.47.589-1.737a.42.42,0,0,0-.533-.533l-1.737.589-1.47-1.1a.42.42,0,0,0-.672.342l.023,1.834Z" transform="translate(-134.275 -141.963)" />
         <path class="a" d="M32.194,23.267a2.419,2.419,0,0,1,0-3.421.771.771,0,0,0,0-1.09L13.663.226a.77.77,0,0,0-1.089,0,2.4,2.4,0,0,1-1.71.709A2.4,2.4,0,0,1,9.153.226a.771.771,0,0,0-1.09,0L5.952,2.336a.771.771,0,0,0,0,1.09A1.786,1.786,0,0,1,3.426,5.952a.771.771,0,0,0-1.09,0L.226,8.063a.771.771,0,0,0,0,1.09,2.406,2.406,0,0,1,.708,1.711,2.4,2.4,0,0,1-.708,1.71.771.771,0,0,0,0,1.09L18.757,32.194a.771.771,0,0,0,1.09,0,2.419,2.419,0,0,1,3.421,0,.771.771,0,0,0,1.09,0l2.11-2.111a.771.771,0,0,0,0-1.09,1.786,1.786,0,0,1,2.526-2.526.771.771,0,0,0,1.09,0l2.11-2.11a.771.771,0,0,0,0-1.09ZM18.583,25.1,7.323,13.837l6.514-6.514L25.1,18.583Z" transform="translate(0 0)" />
      </g>
   </g>
</svg>
`;
function Ticket() {
  return <SvgCss xml={xml} height="100%" />;
}
export default memo(Ticket);
