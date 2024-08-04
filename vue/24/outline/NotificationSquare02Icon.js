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
      d: "M11.437 3H5.25A2.25 2.25 0 0 0 3 5.25v9a2.25 2.25 0 0 0 2.25 2.25h5.307l2.38 4.5 1.876-4.5h3.937A2.25 2.25 0 0 0 21 14.25V12m0-6.187a2.812 2.812 0 1 1-5.625 0 2.812 2.812 0 0 1 5.625 0"
    })
  ]))
}