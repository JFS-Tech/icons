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
      d: "m10.95 2.4.513.513M3.6 13.039h16.996M11.463 2.913l.744.744s-7.755 7.61-7.913 7.768a2.37 2.37 0 0 0 0 3.352l6.129 6.129a2.37 2.37 0 0 0 3.352 0l6.129-6.129a2.37 2.37 0 0 0 .115-3.228.9.9 0 0 0-.181-.26z"
    })
  ]))
}