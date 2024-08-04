const React = require("react");
function FolderShieldIcon({
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
    d: "M21.6 9.2h1zm0 9.6h-1zm-19.2 0h-1zm16.8-12v-1zM9.974 3.824l.82-.574zM9 11.255l-.447-.894a1 1 0 0 0-.553.894zm3 6.5-.534.846a1 1 0 0 0 1.068 0zm3-6.5h1a1 1 0 0 0-.553-.894zm-4.61-.695.447.895zm3.22 0-.447.895zM3.77 3.8h4.237v-2H3.772zm-.37 3V4.2h-2v2.6zm.37-5c-1.328 0-2.37 1.094-2.37 2.4h2c0-.24.185-.4.37-.4zM20.6 9.2v9.6h2V9.2zm-1.4 11H4.8v2h14.4zM3.4 18.8v-12h-2v12zm15.8-13h-7.143v2H19.2zM9.155 4.397l2.083 2.977 1.639-1.147-2.084-2.977zM20.6 18.8a1.4 1.4 0 0 1-1.4 1.4v2a3.4 3.4 0 0 0 3.4-3.4zM4.8 20.2a1.4 1.4 0 0 1-1.4-1.4h-2a3.4 3.4 0 0 0 3.4 3.4zm17.8-11a3.4 3.4 0 0 0-3.4-3.4v2a1.4 1.4 0 0 1 1.4 1.4zM8.008 3.8a1.4 1.4 0 0 1 1.147.597l1.638-1.147A3.4 3.4 0 0 0 8.008 1.8zm1.936 5.866-1.39.695.894 1.789 1.39-.695zM8 11.256V14.6h2v-3.345zM8 14.6c0 .846.49 1.571 1.058 2.156.59.607 1.416 1.219 2.408 1.845l1.068-1.691c-.941-.594-1.614-1.108-2.042-1.547-.448-.461-.492-.704-.492-.763zm4.534 4c.952-.6 1.791-1.153 2.386-1.728.622-.602 1.08-1.328 1.08-2.272h-2c0 .212-.076.453-.47.835-.423.408-1.084.856-2.064 1.475zm3.466-4v-3.344h-2V14.6zm-.553-4.24-1.39-.694-.894 1.789 1.39.695zm-4.61 1.095a2.6 2.6 0 0 1 2.326 0l.894-1.79a4.6 4.6 0 0 0-4.114 0zm1.22-5.655H2.4v2h9.657z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderShieldIcon);
module.exports = ForwardRef;