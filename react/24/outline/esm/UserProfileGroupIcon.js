import * as React from "react";
function UserProfileGroupIcon({
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
    d: "M18.088 16.864a1 1 0 0 0 .331 1.972zm-1.073-5.482a1 1 0 1 0 0 2zm-.923-1.1a2.673 2.673 0 0 0 2.673-2.672h-2a.67.67 0 0 1-.673.673zM13.42 7.61a2.67 2.67 0 0 0 2.672 2.673v-2a.67.67 0 0 1-.672-.673zm2.672-2.673A2.67 2.67 0 0 0 13.42 7.61h2c0-.372.301-.673.672-.673zm2.673 2.673a2.67 2.67 0 0 0-2.673-2.673v2c.371 0 .673.301.673.673zM20 15.164q-.002.617-.384 1.015c-.263.276-.731.551-1.528.685l.331 1.972c1.105-.185 2.01-.611 2.645-1.277.643-.675.936-1.522.936-2.395zm-2.985-1.782c.921 0 1.712.263 2.246.635.536.375.739.796.739 1.147h2c0-1.185-.69-2.155-1.595-2.787-.908-.634-2.11-.995-3.39-.995zM10.262 7.43c0 1.036-.678 1.602-1.37 1.602v2c1.926 0 3.37-1.596 3.37-3.602zm-1.37 1.602c-.692 0-1.37-.566-1.37-1.602h-2c0 2.006 1.443 3.602 3.37 3.602zm-1.37-1.602c0-.517.174-.857.39-1.068.224-.217.558-.361.98-.361V4c-.887 0-1.739.31-2.374.928-.64.623-.997 1.498-.997 2.501zM8.891 6c.422 0 .756.144.979.361.217.211.391.551.391 1.068h2c0-1.003-.356-1.878-.997-2.501C10.631 4.31 9.78 4 8.892 4zm5.178 10.168c0 .313-.154.726-.902 1.116-.781.407-2.107.716-4.133.716v2c2.181 0 3.873-.325 5.057-.943 1.218-.635 1.978-1.638 1.978-2.89zM9.035 18c-2.025 0-3.351-.309-4.132-.716-.749-.39-.903-.803-.903-1.116H2c0 1.251.76 2.254 1.978 2.89 1.185.617 2.876.942 5.057.942zM4 16.168c0-.166.181-.623 1.192-1.098.932-.437 2.29-.734 3.843-.734v-2c-1.78 0-3.44.336-4.692.924C3.17 13.81 2 14.77 2 16.168zm5.035-1.832c1.554 0 2.911.297 3.843.734 1.01.475 1.192.932 1.192 1.098h2c0-1.398-1.17-2.357-2.343-2.908-1.252-.588-2.912-.924-4.692-.924z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserProfileGroupIcon);
export default ForwardRef;