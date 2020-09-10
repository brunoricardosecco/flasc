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
   inkscape:version="1.0beta2 (2b71d25, 2019-12-03)"
   sodipodi:docname="chat.svg"
   xml:space="preserve"
   style="enable-background:new 0 0 60 60;"
   viewBox="0 0 60 60"
   y="0px"
   x="0px"
   id="Capa_1"
   version="1.1"><metadata
   id="metadata47"><rdf:RDF><cc:Work
       rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
         rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
   id="defs45" /><sodipodi:namedview
   inkscape:current-layer="Capa_1"
   inkscape:window-maximized="1"
   inkscape:window-y="23"
   inkscape:window-x="0"
   inkscape:cy="29.734324"
   inkscape:cx="34.274792"
   inkscape:zoom="8.0761591"
   showgrid="false"
   id="namedview43"
   inkscape:window-height="965"
   inkscape:window-width="1680"
   inkscape:pageshadow="2"
   inkscape:pageopacity="0"
   guidetolerance="10"
   gridtolerance="10"
   objecttolerance="10"
   borderopacity="1"
   inkscape:document-rotation="0"
   bordercolor="#666666"
   pagecolor="#ffffff" />
<path
   style="fill:#929292"
   id="path10"
   d="M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h28.558l9.703,10.673C44.454,57.885,44.724,58,45,58  c0.121,0,0.243-0.022,0.361-0.067C45.746,57.784,46,57.413,46,57V47h8c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z" />
<g
   id="g12">
</g>
<g
   id="g14">
</g>
<g
   id="g16">
</g>
<g
   id="g18">
</g>
<g
   id="g20">
</g>
<g
   id="g22">
</g>
<g
   id="g24">
</g>
<g
   id="g26">
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
</svg>

`;
function Chat() {
  return <SvgCss xml={xml} width="100%" height="100%" />;
}
export default memo(Chat);