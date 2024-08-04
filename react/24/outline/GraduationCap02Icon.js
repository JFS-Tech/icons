const React = require("react");
function GraduationCap02Icon({
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
    d: "m18.448 18.254-.509-.861zm.491-.861h-1zm-7.973 4.01-.537.845zm2.09.035.508.861zM1.904 8.137l-.512-.86zm0 .859-.512.859zm10.608 5.711.512.86zm-1.024 0 .512-.859zm10.608-6.57.512-.86zm0 .859-.512-.86zM6.018 18.258l.536-.844zm6.494-15.833-.512.86zm-1.024 0 .512.86zM23.2 8.55a1 1 0 1 0-2 0zm-2 5.4a1 1 0 1 0 2 0zM12 3.284l9.584 5.712 1.024-1.718-9.584-5.712zm9.584 4.853L12 13.848l1.024 1.718 9.584-5.711zm-19.168.859L12 3.284l-1.024-1.718-9.584 5.712zM12 13.848l-5.934-3.536-1.024 1.718 5.934 3.536zm-5.934-3.536-3.65-2.175-1.024 1.718 3.65 2.175zm-1.512.859v6.243h2v-6.243zm.927 7.931 4.948 3.145 1.073-1.687-4.948-3.146zm8.083 3.197 5.392-3.184-1.017-1.722-5.392 3.184zm6.375-4.906V11.17h-2v6.222zm-.983 1.722a2 2 0 0 0 .983-1.722h-2zm-8.527 3.133a3 3 0 0 0 3.135.051l-1.017-1.722a1 1 0 0 1-1.045-.017zM1.392 7.277a1.5 1.5 0 0 0 0 2.577l1.024-1.718a.5.5 0 0 1 0 .859zM12 13.848l-1.024 1.718a2 2 0 0 0 2.048 0zm9.584-4.852a.5.5 0 0 1 0-.86l1.024 1.719a1.5 1.5 0 0 0 0-2.577zm-17.03 8.418a2 2 0 0 0 .927 1.688l1.073-1.688zm8.47-15.848a2 2 0 0 0-2.048 0L12 3.284zM21.2 8.55v5.4h2v-5.4z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GraduationCap02Icon);
module.exports = ForwardRef;