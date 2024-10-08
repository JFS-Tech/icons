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
      "stroke-linejoin": "round",
      d: "M15.325 4.907a1 1 0 0 1 1.414 0l2.353 2.35a1 1 0 0 1 0 1.415l-9.957 9.963a1 1 0 0 1-.51.273L4.2 19.8l.893-4.42a1 1 0 0 1 .273-.509z",
      "clip-rule": "evenodd"
    })
  ]))
}