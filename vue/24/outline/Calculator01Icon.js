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
      d: "M2.4 12.26h9.34m.52 9.34V2.4M7.33 9.146V5.773M5.643 7.459h3.373m-3.373 9.99h3.373m6.357-3.373h3.373m-3.373-3.114h3.373M4.995 21.6h14.01a2.595 2.595 0 0 0 2.595-2.595V4.995A2.595 2.595 0 0 0 19.005 2.4H4.995A2.595 2.595 0 0 0 2.4 4.995v14.01A2.595 2.595 0 0 0 4.995 21.6"
    })
  ]))
}