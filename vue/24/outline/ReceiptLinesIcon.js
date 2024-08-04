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
      d: "M7.8 7.8h8.4m-8.4 4.8h8.4M5.76 3h12.48c.862 0 1.56.806 1.56 1.8V21l-2.6-1.8-2.6 1.8-2.6-1.8L9.4 21l-2.6-1.8L4.2 21V4.8c0-.994.698-1.8 1.56-1.8"
    })
  ]))
}