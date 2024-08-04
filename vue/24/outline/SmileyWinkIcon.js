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
      d: "M8.672 14.8c.7 1.13 1.929 1.88 3.328 1.88s2.628-.75 3.328-1.88M9.798 9H7.8m13.8 3a9.6 9.6 0 0 1-9.6 9.6 9.6 9.6 0 1 1 9.6-9.6m-6.72-3h.085v.077h-.085z"
    })
  ]))
}