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
      d: "M6 13.2V18m0 0h4.477M6 18l5.333-5.333M21.6 10.8h-6a2.4 2.4 0 0 1-2.4-2.4v-6M4.533 21.6h14.934a2.133 2.133 0 0 0 2.133-2.133V4.533A2.133 2.133 0 0 0 19.467 2.4H4.533A2.133 2.133 0 0 0 2.4 4.533v14.934c0 1.178.955 2.133 2.133 2.133"
    })
  ]))
}