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
      d: "M12 2.8a9.6 9.6 0 0 1 9.6 9.6H2.4A9.6 9.6 0 0 1 12 2.8m0 0C8.4 7 8.533 10 8 12.4m4-9.6c3 4.2 3.467 7.2 4 9.6m-4.8.8v5.2a2.8 2.8 0 1 0 5.6 0V18"
    })
  ]))
}