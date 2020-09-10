import React, { memo } from "react";
import { SvgCss } from "react-native-svg";

const xml = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   version="1.1"
   id="Layer_1"
   x="0px"
   y="0px"
   viewBox="0 0 680 241"
   xml:space="preserve"
   sodipodi:docname="email enviado.svg"
   width="680"
   height="241"
   inkscape:version="1.0beta2 (2b71d25, 2019-12-03)"><metadata
   id="metadata63"><rdf:RDF><cc:Work
       rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
         rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
   id="defs61" /><sodipodi:namedview
   pagecolor="#ffffff"
   bordercolor="#666666"
   inkscape:document-rotation="0"
   borderopacity="1"
   objecttolerance="10"
   gridtolerance="10"
   guidetolerance="10"
   inkscape:pageopacity="0"
   inkscape:pageshadow="2"
   inkscape:window-width="1920"
   inkscape:window-height="1035"
   id="namedview59"
   showgrid="false"
   showguides="true"
   inkscape:guide-bbox="true"
   inkscape:zoom="0.80878077"
   inkscape:cx="262.77618"
   inkscape:cy="394.64321"
   inkscape:window-x="0"
   inkscape:window-y="23"
   inkscape:window-maximized="1"
   inkscape:current-layer="Layer_1"><sodipodi:guide
     position="-446.35087,286.96992"
     orientation="1,0"
     id="guide65" /><sodipodi:guide
     position="336.571,236.675"
     orientation="1,0"
     id="guide67" /></sodipodi:namedview>
<g
   style="fill:#ffffff"
   transform="translate(0,-136)"
   id="g14">
	<g
   style="fill:#ffffff"
   id="g12">
		<path
   style="fill:#ffffff"
   d="M 501.801,139.942 H 171.312 c -5.633,0 -10.199,4.566 -10.199,10.199 v 19.235 h -97.21 c -5.633,0 -10.199,4.566 -10.199,10.199 0,5.633 4.566,10.199 10.199,10.199 h 97.21 v 132.452 h -58.101 c -5.633,0 -10.199,4.566 -10.199,10.199 0,5.633 4.566,10.199 10.199,10.199 h 58.101 v 19.235 c 0,5.633 4.566,10.199 10.199,10.199 h 330.489 c 5.633,0 10.199,-4.566 10.199,-10.199 V 150.141 c 0,-5.633 -4.566,-10.199 -10.199,-10.199 z M 476.641,160.34 336.571,275.325 197.14,160.34 Z m 14.961,191.321 h -310.09 v -177.77 l 148.556,122.51 c 1.884,1.553 4.186,2.331 6.489,2.331 2.295,0 4.591,-0.772 6.471,-2.316 L 491.602,174.45 Z"
   id="path10"
   inkscape:connector-curvature="0" />
	</g>
</g>
<g
   style="fill:#ffffff"
   transform="translate(0,-136)"
   id="g20">
	<g
   style="fill:#ffffff"
   id="g18">
		<path
   style="fill:#ffffff"
   d="M 119.673,244.768 H 10.199 C 4.566,244.768 0,249.334 0,254.967 c 0,5.633 4.566,10.199 10.199,10.199 h 109.474 c 5.633,0 10.199,-4.566 10.199,-10.199 10e-4,-5.633 -4.566,-10.199 -10.199,-10.199 z"
   id="path16"
   inkscape:connector-curvature="0" />
	</g>
</g>
<g
   style="fill:#ffffff"
   transform="translate(0,-136)"
   id="g26">
	<g
   style="fill:#ffffff"
   id="g24">
		<path
   style="fill:#ffffff"
   d="m 69.355,322.227 h -5.451 c -5.633,0 -10.199,4.566 -10.199,10.199 0,5.633 4.566,10.199 10.199,10.199 h 5.451 c 5.633,0 10.199,-4.566 10.199,-10.199 0,-5.633 -4.566,-10.199 -10.199,-10.199 z"
   id="path22"
   inkscape:connector-curvature="0" />
	</g>
</g>
<g
   id="g28">
</g>
<g
   id="g30">
</g>
<g
   id="g32">
</g>
<g
   id="g34">
</g>
<g
   id="g36">
</g>
<g
   id="g38">
</g>
<g
   id="g40">
</g>
<g
   id="g42">
</g>
<g
   id="g44">
</g>
<g
   id="g46">
</g>
<g
   id="g48">
</g>
<g
   id="g50">
</g>
<g
   id="g52">
</g>
<g
   id="g54">
</g>
<g
   id="g56">
</g>
</svg>

`;
function Email() {
  return <SvgCss xml={xml} width="50%" height="50%" />;
}
export default memo(Email);
