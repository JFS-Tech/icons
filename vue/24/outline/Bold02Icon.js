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
      d: "M8.4 16.8h-1v1h1zm0-9.6v-1h-1v1zm4.86 8.6H8.4v2h4.86zm-3.86 1V12h-2v4.8zm7.2-2.4c0-1.854-1.472-3.4-3.34-3.4v2c.716 0 1.34.603 1.34 1.4zm-3.34 3.4c1.868 0 3.34-1.546 3.34-3.4h-2c0 .797-.624 1.4-1.34 1.4zm-.72-6.8H8.4v2h4.14zM9.4 12V7.2h-2V12zm3.14-5.8H8.4v2h4.14zm3.34 3.4c0-1.854-1.472-3.4-3.34-3.4v2c.716 0 1.34.603 1.34 1.4zM12.54 13c1.868 0 3.34-1.546 3.34-3.4h-2c0 .797-.624 1.4-1.34 1.4zm.72-2H8.4v2h4.86zM4.8 3.4h14.4v-2H4.8zm15.8 1.4v14.4h2V4.8zm-1.4 15.8H4.8v2h14.4zM3.4 19.2V4.8h-2v14.4zm1.4 1.4a1.4 1.4 0 0 1-1.4-1.4h-2a3.4 3.4 0 0 0 3.4 3.4zm15.8-1.4a1.4 1.4 0 0 1-1.4 1.4v2a3.4 3.4 0 0 0 3.4-3.4zM19.2 3.4a1.4 1.4 0 0 1 1.4 1.4h2a3.4 3.4 0 0 0-3.4-3.4zm-14.4-2a3.4 3.4 0 0 0-3.4 3.4h2a1.4 1.4 0 0 1 1.4-1.4z"
    })
  ]))
}