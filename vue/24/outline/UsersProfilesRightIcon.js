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
      d: "M2.4 21.6V18A3.6 3.6 0 0 1 6 14.4h6m7.029-.9 2.57 2.4m0 0-2.57 2.4m2.57-2.4H15m2.4-13.5c1.457.816 2.4 2.125 2.4 3.6s-.943 2.784-2.4 3.6m-3-3.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0"
    })
  ]))
}