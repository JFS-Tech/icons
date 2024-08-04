import * as React from "react";
function Bell01Icon({
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
    d: "m4.106 16.562-.83-.557zm1.163-3.727-1-.01v.01zm.024-2.254 1 .011v-.01zm14.608 6 .84-.542zm-1.12-3.746-1-.011v.011zm.025-2.142 1 .011v-.01zM9.333 20a1 1 0 1 0 0 2zm5.334 2a1 1 0 1 0 0-2zm-9.731-4.88c.672-1 1.333-2.483 1.333-4.285h-2c0 1.308-.482 2.409-.993 3.17zm1.332-4.274.025-2.254-2-.021-.024 2.253zm14.473 3.193a5.96 5.96 0 0 1-.96-3.204h-2c0 1.802.634 3.286 1.28 4.287zm-.96-3.193.025-2.142-2-.022-.024 2.142zm.025-2.153C19.806 6.011 16.423 2 12 2v2c3.095 0 5.806 2.878 5.806 6.693zm-.313 7.932c.803 0 1.235-.622 1.388-1.027.161-.428.197-1.037-.14-1.56l-1.68 1.084a.35.35 0 0 1-.06-.167.14.14 0 0 1 .008-.062.3.3 0 0 1 .094-.126.6.6 0 0 1 .39-.142zm-13.2-8.044C6.293 6.828 8.96 4 12 4V2c-4.368 0-7.707 3.96-7.707 8.581zm-1.785 6.044c.183 0 .32.079.394.146a.3.3 0 0 1 .09.122.13.13 0 0 1 .008.057.35.35 0 0 1-.064.17l-1.66-1.115c-.353.524-.32 1.144-.162 1.574.148.406.578 1.046 1.394 1.046zm14.985 0H4.508v2h14.985zM9.333 22h5.334v-2H9.333z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bell01Icon);
export default ForwardRef;