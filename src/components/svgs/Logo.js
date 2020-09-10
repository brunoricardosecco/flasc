import React, { memo } from "react";
import { SvgCss } from "react-native-svg";

const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="293" height="79.653" viewBox="0 0 293 79.653">
   <defs>
      <style>.a{fill:#FFFFFF;}</style>
   </defs>
   <g transform="translate(0 0)">
      <path class="a" d="M159.87,667.348V641.137h11.073a41.423,41.423,0,0,1,6.284.361,11.963,11.963,0,0,1,3.591,1.148,10.506,10.506,0,0,1,4.454,4.5,15.436,15.436,0,0,1,1.491,7.135,14.133,14.133,0,0,1-1.848,7.482,11.109,11.109,0,0,1-5.45,4.512,13.155,13.155,0,0,1-3.5.837,63.927,63.927,0,0,1-6.728.249Zm9.157-6.637h2.462q3.425,0,4.75-1.408t1.328-5.053q0-3.541-1.357-5.017t-4.605-1.476h-2.577Z" transform="translate(-159.87 -588.698)" />
      <path class="a" d="M235,667.361V641.15h13.65q6.41,0,9.146,1.761t2.739,5.775a6.716,6.716,0,0,1-1.122,3.988,7.446,7.446,0,0,1-3.465,2.508,5.6,5.6,0,0,1,3.465,1.823,6.646,6.646,0,0,1,1.162,4l.155,3.645a.333.333,0,0,0,.018.09q.061,1.566.816,1.635v.982h-9.24c-.166-.632-.292-1.18-.379-1.649a6.609,6.609,0,0,1-.123-1.083v-2.613a3.839,3.839,0,0,0-.873-2.859,4.372,4.372,0,0,0-3.021-.826h-3.876v9.023Zm9.023-14.946h4.165a5.9,5.9,0,0,0,3.017-.545,2.1,2.1,0,0,0,.834-1.895,2.131,2.131,0,0,0-.834-1.931,6.59,6.59,0,0,0-3.248-.541h-3.905Z" transform="translate(-207.884 -588.711)" />
      <path class="a" d="M304.51,653.085q0-6.4,3.97-10.106t10.853-3.7q6.858,0,10.828,3.7t3.97,10.106q0,6.388-3.97,10.106t-10.828,3.71q-6.876,0-10.853-3.71T304.51,653.085Zm9.232,0q0,3.721,1.357,5.464a5.039,5.039,0,0,0,4.241,1.743,4.971,4.971,0,0,0,4.2-1.736q1.339-1.736,1.335-5.472t-1.335-5.49a4.943,4.943,0,0,0-4.2-1.732,5.033,5.033,0,0,0-4.241,1.743Q313.746,649.35,313.742,653.085Z" transform="translate(-252.306 -587.516)" />
      <path class="a" d="M387.18,667.361V641.15h8.691l8,12.188a8.744,8.744,0,0,1,.783,1.444c.278.628.57,1.39.881,2.277a14.6,14.6,0,0,1-.173-1.53c-.04-.556-.061-1.234-.061-2.028V641.15h8.734v26.211H405.3l-7.995-12.1a9.443,9.443,0,0,1-.8-1.512q-.44-.974-.881-2.241a13.68,13.68,0,0,1,.191,1.444q.058.758.058,2.126v12.272Z" transform="translate(-305.138 -588.711)" />
      <path class="a" d="M465.61,667.361V641.15H488.4v6.28H474.774v3.49h10.167v6.013H474.774v4.057h14.184v6.37Z" transform="translate(-355.26 -588.711)" />
      <path class="a" d="M519.8,656.922a5.421,5.421,0,0,0,1.083,2.776q1.5,1.668,5.136,1.667,6.11,0,6.11-3.577,0-1.538-1.917-2.4a17.433,17.433,0,0,0-3.378-.938l-3.115-.65a20.81,20.81,0,0,1-6.352-2.072,6.424,6.424,0,0,1-2.974-5.858,7.311,7.311,0,0,1,3.476-6.5,14.173,14.173,0,0,1,7.85-1.964,13.156,13.156,0,0,1,7.868,2.2,8.109,8.109,0,0,1,3.519,6.645h-5.9q-.274-4.147-5.89-4.147a7.646,7.646,0,0,0-3.476.7,2.829,2.829,0,0,0-1.74,2.646,2.336,2.336,0,0,0,1.4,2.166,18.846,18.846,0,0,0,3.837,1.119l5.075,1.119a13.62,13.62,0,0,1,5.053,1.967,6.385,6.385,0,0,1,2.635,5.526,7.338,7.338,0,0,1-3.714,6.591,14.928,14.928,0,0,1-8.092,2.018,15.833,15.833,0,0,1-8.529-2.057,7.728,7.728,0,0,1-3.815-6.995Z" transform="translate(-386.153 -586.321)" />
      <path class="a" d="M595.165,646.343q4.277,0,6.374,2.609a5.862,5.862,0,0,1,1.2,2.952,31.874,31.874,0,0,1,.1,3.216v11.748h-5.815V654.7q0-4.006-3.555-4-4.6,0-4.595,5.342v10.828H583.2V639.9h5.674v9.565A7.269,7.269,0,0,1,595.165,646.343Z" transform="translate(-430.409 -587.912)" />
      <path class="a" d="M661.861,668.083a10.31,10.31,0,0,1-2.916,7.709,11.174,11.174,0,0,1-8.211,2.956q-5.219,0-8.208-2.956a11.648,11.648,0,0,1,0-15.419,12.817,12.817,0,0,1,16.419,0A10.365,10.365,0,0,1,661.861,668.083ZM650.7,674.36q5.187,0,5.183-6.277t-5.183-6.262q-5.2,0-5.2,6.262T650.7,674.36Z" transform="translate(-466.459 -599.096)" />
      <path class="a" d="M709.543,659.18h5.775l3.317,14.408,3.393-14.408h5.948l-6.313,20.01H715.8l-3.411-14.556-3.465,14.556H703.01l-6.11-20.01h6.11l3.4,14.372Z" transform="translate(-503.072 -600.234)" />
      <path class="a" d="M648.594,538.865a10.246,10.246,0,0,1-.076,1.408,3.78,3.78,0,0,1-.206.913,1.112,1.112,0,0,1-.361.505.722.722,0,0,1-.458.162h-18.18a2.253,2.253,0,0,1-1.559-.57,2.367,2.367,0,0,1-.624-1.837v-32.7a2.4,2.4,0,0,1,.624-1.837,2.267,2.267,0,0,1,1.559-.567h18.068a.748.748,0,0,1,.451.144,1.084,1.084,0,0,1,.336.509,3.923,3.923,0,0,1,.216.924,13.062,13.062,0,0,1,.065,1.444,12.339,12.339,0,0,1-.065,1.379,3.781,3.781,0,0,1-.216.913,1.116,1.116,0,0,1-.336.505.675.675,0,0,1-.451.155H634.457v9.171H645.4a.791.791,0,0,1,.473.155,1.234,1.234,0,0,1,.361.494,3.343,3.343,0,0,1,.206.9,11.18,11.18,0,0,1,.079,1.375,10.979,10.979,0,0,1-.079,1.39,3.356,3.356,0,0,1-.206.888,1.177,1.177,0,0,1-.361.48.826.826,0,0,1-.473.141h-10.94v10.579H647.5a.7.7,0,0,1,.458.159,1.152,1.152,0,0,1,.361.505,3.742,3.742,0,0,1,.206.913,10.2,10.2,0,0,1,.076,1.4" transform="translate(-458.484 -501.278)" />
      <path class="a" d="M714.55,523.075a28.175,28.175,0,0,0-.448-5.19,11.249,11.249,0,0,0-1.527-4,7.28,7.28,0,0,0-2.887-2.57,9.8,9.8,0,0,0-4.483-.909,9.164,9.164,0,0,0-4.515,1.032,8.4,8.4,0,0,0-2.942,2.729,11.367,11.367,0,0,0-1.574,3.988,24.087,24.087,0,0,0-.469,4.826,28.758,28.758,0,0,0,.458,5.335,11.549,11.549,0,0,0,1.505,4.039,6.978,6.978,0,0,0,2.859,2.563,10.191,10.191,0,0,0,4.508.881,9.277,9.277,0,0,0,4.533-1.007,8.085,8.085,0,0,0,2.934-2.747A11.376,11.376,0,0,0,714.081,528a24.586,24.586,0,0,0,.469-4.912m7.731-.4a26.617,26.617,0,0,1-1.115,8.056,16.242,16.242,0,0,1-3.335,6.031,14.261,14.261,0,0,1-5.465,3.775,20.236,20.236,0,0,1-7.543,1.307,22.379,22.379,0,0,1-7.374-1.1,12.832,12.832,0,0,1-5.251-3.375,14.4,14.4,0,0,1-3.14-5.775,28.823,28.823,0,0,1-1.065-8.254,25.935,25.935,0,0,1,1.123-7.9,16.1,16.1,0,0,1,3.335-5.973,14.506,14.506,0,0,1,5.457-3.808,20.148,20.148,0,0,1,7.579-1.317,22.118,22.118,0,0,1,7.262,1.083A12.768,12.768,0,0,1,718,508.779a14.737,14.737,0,0,1,3.194,5.75,27.633,27.633,0,0,1,1.083,8.157" transform="translate(-497.377 -501.279)" />
      <path class="a" d="M547.874,513.975a10.282,10.282,0,0,1,3.656-2.573,11.969,11.969,0,0,1,4.757-.91,16.52,16.52,0,0,1,4.331.505,23.664,23.664,0,0,1,3.2,1.083,17.135,17.135,0,0,1,2.166,1.083,2.8,2.8,0,0,0,1.137.531.685.685,0,0,0,.44-.141,1,1,0,0,0,.3-.487,4.12,4.12,0,0,0,.2-.938,11.266,11.266,0,0,0,.072-1.4,9.608,9.608,0,0,0-.17-2.111,2.3,2.3,0,0,0-.541-1.108,6.316,6.316,0,0,0-1.328-.92,13.572,13.572,0,0,0-2.4-1,23.622,23.622,0,0,0-3.375-.78,25.83,25.83,0,0,0-4.273-.325,21.858,21.858,0,0,0-7.767,1.307,16.506,16.506,0,0,0-5.948,3.79,16.722,16.722,0,0,0-3.494,5.259,10.983,10.983,0,0,1,.151,17.758,15.368,15.368,0,0,0,3.09,4.465,15.917,15.917,0,0,0,5.811,3.609,22.627,22.627,0,0,0,7.767,1.245q1.483,0,2.952-.141c.975-.09,1.938-.235,2.887-.419a27.752,27.752,0,0,0,2.783-.675c.9-.26,1.649-.509,2.256-.754a2.057,2.057,0,0,0,1.2-.992,3.4,3.4,0,0,0,.3-1.469V523.056a3.326,3.326,0,0,0-.141-.992,2.09,2.09,0,0,0-.4-.74,1.8,1.8,0,0,0-.617-.462,1.933,1.933,0,0,0-.794-.151H553.844a.667.667,0,0,0-.44.151,1.2,1.2,0,0,0-.361.476,3.25,3.25,0,0,0-.206.852,10.986,10.986,0,0,0-.068,1.314,5.875,5.875,0,0,0,.274,2.144c.188.419.448.624.783.624h6.858v8.4a8.832,8.832,0,0,1-2.234.837,10.923,10.923,0,0,1-2.433.282,12.468,12.468,0,0,1-4.573-.8,9.427,9.427,0,0,1-3.57-2.4,11.07,11.07,0,0,1-2.31-3.97,16.627,16.627,0,0,1-.823-5.468,15.353,15.353,0,0,1,.812-5.165,11.463,11.463,0,0,1,2.321-4" transform="translate(-402.06 -501.371)" />
      <path class="a" d="M36.771,0V36.872H28.307V12.586L21.518,36.872H15.4L8.514,12.586V36.872H0V0H12.535L18.49,22.244,24.132,0Z" transform="translate(0 0)" />
      <path class="a" d="M290.405,523.93v26.734h-8.244l-.209-3.032c-1.465,1.779-2.887,3.5-7.471,3.5a13.087,13.087,0,0,1-5.277-1.083c-3.552-1.779-3.656-5.226-3.764-7.58V523.93h8.623v15.2a6.168,6.168,0,0,0,.837,3.757,3.609,3.609,0,0,0,2.768,1.2,5.835,5.835,0,0,0,1.563-.26c2.563-.992,2.563-3.4,2.563-6.11V523.93Z" transform="translate(-227.337 -513.799)" />
      <path class="a" d="M346.731,526.283a9.505,9.505,0,0,1,7.789-3.653,8.8,8.8,0,0,1,6.677,2.718c1.877,2.09,1.942,4.591,1.989,7.157v17.325h-8.619V536.259c-.047-2.086-.1-3.248-.574-4.176a3.346,3.346,0,0,0-3.082-1.83,4.952,4.952,0,0,0-2.4.679c-1.617,1.151-1.617,3.14-1.671,4.912v13.99H338.22V523.1h8.511Z" transform="translate(-273.849 -512.968)" />
      <path class="a" d="M423.937,511.842a4.071,4.071,0,0,0-3.248,1.617c-1.31,1.675-1.469,4.024-1.469,5.8a10.5,10.5,0,0,0,1.411,5.9,4.028,4.028,0,0,0,3.248,1.617,4.266,4.266,0,0,0,3.389-1.722c.787-.992,1.415-2.887,1.357-6.269-.155-5.847-2.887-6.944-4.692-6.944m13.112-15.982v36.865h-7.579l-.628-1.88a10.6,10.6,0,0,1-7,2.526c-7.518,0-11.337-6.374-11.337-14.206,0-8.828,4.963-13.787,11.131-13.787a11.188,11.188,0,0,1,6.785,2.35V495.86Z" transform="translate(-320.041 -495.86)" />
      <path class="a" d="M501.022,529.23c-3.136,0-4.75,2.5-4.75,6.634,0,1.444,0,7.219,4.8,7.219,3.447,0,4.692-3.032,4.75-6.63,0-1.523.054-7.218-4.8-7.218m.051,20.934c-6.948,0-13.423-4.692-13.423-13.791,0-8.926,5.793-14.206,13.112-14.206,7.579,0,13.636,5.486,13.675,14.206.061,8.774-6.215,13.791-13.354,13.791" transform="translate(-369.346 -512.674)" />
      <rect class="a" width="3.443" height="79.375" transform="translate(232.224 0)" />
      <path class="a" d="M825.78,541.959V537.8l4.411-3.938c8.738-7.879,12.853-12.21,12.907-16.964,0-3.216-1.769-6.045-6.623-6.045a13.757,13.757,0,0,0-7.94,3l-2.054-4.829A18.713,18.713,0,0,1,837.9,505.3c8.225,0,12.225,5.053,12.225,10.932,0,6.323-4.692,11.431-11.138,17.256l-3.248,2.718v.112h15.249v5.659Z" transform="translate(-585.436 -501.893)" />
      <path class="a" d="M924.34,523.652c0,11.6-4.692,18.869-13.538,18.869-8.565,0-13.134-7.547-13.192-18.534,0-11.21,4.912-18.768,13.592-18.768C920.171,505.231,924.34,513,924.34,523.652Zm-19.649.336c-.058,8.767,2.458,13.315,6.342,13.315,4.111,0,6.28-4.883,6.28-13.538,0-8.377-2.054-13.318-6.28-13.318C907.261,510.446,904.634,514.943,904.691,523.988Z" transform="translate(-631.34 -501.842)" />
      <path class="a" d="M825.78,641.786v-4.162l4.411-3.941c8.738-7.879,12.853-12.207,12.907-16.964,0-3.219-1.769-6.049-6.623-6.049a13.782,13.782,0,0,0-7.94,3l-2.054-4.826a18.692,18.692,0,0,1,11.42-3.721c8.225,0,12.225,5.053,12.225,10.932,0,6.327-4.692,11.431-11.138,17.259l-3.248,2.718v.087h15.249v5.659Z" transform="translate(-585.436 -565.685)" />
      <path class="a" d="M924.34,623.486c0,11.6-4.692,18.866-13.538,18.866-8.565,0-13.134-7.547-13.192-18.534,0-11.21,4.912-18.768,13.592-18.768C920.171,605.061,924.34,612.832,924.34,623.486Zm-19.649.332c-.058,8.767,2.443,13.336,6.342,13.336,4.111,0,6.28-4.883,6.28-13.542,0-8.377-2.054-13.315-6.28-13.315C907.261,610.28,904.634,614.777,904.691,623.818Z" transform="translate(-631.34 -565.641)" />
   </g>
</svg>
`;
function Logo() {
  return <SvgCss xml={xml} />;
}
export default memo(Logo);