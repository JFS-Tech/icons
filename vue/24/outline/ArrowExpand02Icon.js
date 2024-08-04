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
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.206 4H20m0 0v5.793M20 4l-5.794 5.793M9.794 20H4m0 0v-5.793M4 20l6-6m9.999.206V20m0 0h-5.793M20 20l-5.793-5.794M4 9.794V4m0 0h5.793M4 4l6 6"
    })
  ]))
}