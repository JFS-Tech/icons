const React = require("react");
function CoinHandIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    d: "M7.73 19.512a1 1 0 0 0 .627 1.899zm6.132 1.334-.09-.996zm3.492-.77.435.901zm3.336-3.008-.775-.633zm-2.282-1.883.704.71zm-1.537 1.524.705.71zm-4.173-.324a1 1 0 1 0 0 2zm7.637-1.389-.551.835zm-11.111-.505.444.896zm4.176-.378.261-.965zm1.63.44-.26.966zm.518 1.93-.704-.71zm-1.614.191a1 1 0 0 0 1.408 1.42zm-5.577 4.737c.098-.032.323-.06.743-.03.4.029.868.098 1.408.182 1.02.16 2.324.38 3.444.28l-.18-1.993c-.82.074-1.844-.09-2.956-.263a20 20 0 0 0-1.575-.2c-.477-.034-1.027-.035-1.512.125zm5.595.431c1.502-.136 2.256-.1 3.837-.865l-.87-1.8c-1.197.578-1.571.53-3.147.673zm3.837-.865c1.43-.692 2.84-2.253 3.675-3.276l-1.549-1.266c-.845 1.035-2.01 2.264-2.997 2.742zm-.085-6.502L16.167 16l1.409 1.42 1.536-1.524zm-2.478 1.91h-2.528v2h2.528zm.941-.386a1.34 1.34 0 0 1-.941.386v2c.88 0 1.725-.347 2.35-.966zm4.72-1.837c-1-.66-2.331-.531-3.183.313l1.408 1.42a.54.54 0 0 1 .672-.064zm.577 3.539c.941-1.152.582-2.773-.578-3.539l-1.102 1.668c.255.17.26.447.131.605zM3.776 14.539h3.103v-2H3.776zm2.88-.231v6.923h2v-6.923zM6.878 21H3.776v2h3.103zM4 21.23v-6.922H2v6.923zM3.776 21c.116 0 .224.095.224.23H2c0 .986.803 1.77 1.776 1.77zm2.88.23c0-.135.108-.23.223-.23v2c.973 0 1.776-.784 1.776-1.77zm.223-6.691a.23.23 0 0 1-.224-.231h2c0-.985-.803-1.77-1.776-1.77zm-3.103-2c-.973 0-1.776.784-1.776 1.769h2c0 .135-.108.23-.224.23zm4.711 3.434 1.181-.586-.888-1.791-1.181.585zm3.166-1.05h.318v-2h-.318zm1.486.155 1.63.441.523-1.93-1.63-.441zm1.705.695-.91.901 1.408 1.42.91-.901zm-.074-.254a.15.15 0 0 1 .074.254l1.408 1.42c1.185-1.175.638-3.173-.96-3.605zm-2.799-.596c.395 0 .787.052 1.168.155l.522-1.93a6.5 6.5 0 0 0-1.69-.225zm-2.303.464a4.5 4.5 0 0 1 1.985-.464v-2c-.997 0-1.98.23-2.873.673zm7.073-7.233a2.09 2.09 0 0 1-2.103 2.077v2c2.258 0 4.103-1.817 4.103-4.077zm-2.103 2.077a2.09 2.09 0 0 1-2.103-2.077h-2c0 2.26 1.845 4.077 4.103 4.077zm-2.103-2.077a2.09 2.09 0 0 1 2.103-2.077v-2c-2.258 0-4.103 1.817-4.103 4.077zm2.103-2.077a2.09 2.09 0 0 1 2.103 2.077h2c0-2.26-1.845-4.077-4.103-4.077zm-3.103 1.077A2.09 2.09 0 0 1 9.43 5.077h-2c0 2.26 1.845 4.077 4.104 4.077zM9.43 5.077A2.09 2.09 0 0 1 11.535 3V1C9.276 1 7.43 2.817 7.43 5.077zM11.535 3a2.09 2.09 0 0 1 2.103 2.077h2c0-2.26-1.845-4.077-4.103-4.077z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CoinHandIcon);
module.exports = ForwardRef;