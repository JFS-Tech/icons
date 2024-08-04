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
      d: "m12.565 18.308 6.31 3.068c1.184.575 2.446-.628 1.928-1.837L13.827 3.261c-.485-1.132-2.083-1.152-2.597-.032L3.734 19.583c-.548 1.195.682 2.429 1.88 1.885z"
    })
  ]))
}