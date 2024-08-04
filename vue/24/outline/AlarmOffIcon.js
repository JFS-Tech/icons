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
      d: "M2.4 7.008V6.24c0-.865.286-1.663.768-2.304M16.992 2.4h.768a3.84 3.84 0 0 1 3.84 3.84v.768M5.856 18.912 3.168 21.6m17.664 0L3.552 3.498M9.6 4.666a8.448 8.448 0 0 1 9.984 11.827m-1.824 2.455A8.448 8.448 0 0 1 5.82 7.008"
    })
  ]))
}