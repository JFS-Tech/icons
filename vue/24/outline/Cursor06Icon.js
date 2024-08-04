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
      d: "M9.6 19.633H4.57a2.16 2.16 0 0 1-2.17-2.154V4.554c0-1.19.971-2.154 2.17-2.154h13.02c1.199 0 2.17.964 2.17 2.154V8.4m-2.41 7.577 3.714-1.257a.773.773 0 0 0 .036-1.458l-9.207-3.604c-.641-.251-1.282.36-1.042.993l3.508 9.242c.256.675 1.232.676 1.49.002z"
    })
  ]))
}