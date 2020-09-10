import React, { memo } from "react";
import { SvgCss } from "react-native-svg";

const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 312.746 312.746" style="enable-background:new 0 0 312.746 312.746;" xml:space="preserve">
<g>
	<g>
		<path style="fill:#010002;" d="M40.347,0v312.452l117.734-120.247l114.318,120.541V0H40.347z" />
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;
function FavoritesOn() {
  return <SvgCss xml={xml} width="100%" height="100%" />;
}
export default memo(FavoritesOn);