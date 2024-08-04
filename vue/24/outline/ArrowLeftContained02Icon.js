const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      fill: "#000",
      d: "M10.569 16.618a1 1 0 0 0 1.536-1.28zM8.022 12l-.768-.64a1 1 0 0 0 0 1.28zm4.083-3.337a1 1 0 0 0-1.536-1.28zM15.977 13a1 1 0 1 0 0-2zm-3.872 2.337L8.791 11.36l-1.537 1.28 3.315 3.978zM8.791 12.64l3.314-3.977-1.536-1.28-3.315 3.977zm-.769.36h7.955v-2H8.022zM6.343 6.343a8 8 0 0 1 11.314 0L19.07 4.93c-3.905-3.905-10.237-3.905-14.142 0zm11.314 0a8 8 0 0 1 0 11.314l1.414 1.414c3.905-3.905 3.905-10.237 0-14.142zm0 11.314a8 8 0 0 1-11.314 0L4.93 19.07c3.905 3.905 10.237 3.905 14.142 0zm-11.314 0a8 8 0 0 1 0-11.314L4.93 4.93c-3.905 3.905-3.905 10.237 0 14.142z"
    })
  ]))
}