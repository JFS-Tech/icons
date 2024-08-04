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
      d: "M2.4 7.98v9.84a2.4 2.4 0 0 0 2.4 2.4h9.6M6 5.58h1.2L8.88 2.7h6.24l1.68 2.88h2.4a2.4 2.4 0 0 1 2.4 2.4v9.84c0 .888-.483 1.664-1.2 2.079M14.683 14.7A3.6 3.6 0 0 0 9.6 9.617m1.8 6.233a3.6 3.6 0 0 1-2.972-3.1M21 21.3 3 2.7"
    })
  ]))
}