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
      d: "M8.8 2.4H4.533A2.133 2.133 0 0 0 2.4 4.533V8.8m6.4 12.8H4.533A2.133 2.133 0 0 1 2.4 19.467V15.2M15.2 2.4h4.267c1.178 0 2.133.955 2.133 2.133V8.8m0 6.4v4.267a2.133 2.133 0 0 1-2.133 2.133H15.2"
    })
  ]))
}