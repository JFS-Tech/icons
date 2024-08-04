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
      d: "M5.893 15.429c-1.598 0-2.893-1-2.893-2.466s1.295-2.654 2.893-2.654q.163 0 .321.016v-.016h.04a4 4 0 0 1-.04-.59C6.214 7.113 8.517 5 11.357 5c1.924 0 3.6.969 4.483 2.404q.323-.045.66-.045c2.485 0 4.5 1.85 4.5 4.13 0 1.877-1.365 3.308-3.234 3.78M11.858 19v-6.774m0 0L8.906 15.02m2.952-2.794 2.954 2.794"
    })
  ]))
}