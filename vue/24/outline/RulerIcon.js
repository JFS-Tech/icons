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
      d: "m9.955 17.986-1.842-1.842m4.606-.92-1.842-1.843m4.605-.92-1.842-1.843m4.605-.92-1.842-1.843M8.324 21.218 21.218 8.324a1.3 1.3 0 0 0 0-1.842l-3.7-3.7a1.3 1.3 0 0 0-1.842 0L2.78 15.675a1.3 1.3 0 0 0 0 1.842l3.701 3.7a1.3 1.3 0 0 0 1.842 0"
    })
  ]))
}