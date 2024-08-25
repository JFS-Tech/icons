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
      d: "m2.4 20.206 1.32-1.412c1.894 1.918 4.525 2.665 7.433 2.665 5.77 0 10.447-4.677 10.447-10.447 0-2.862-1.15-5.455-3.014-7.341l1.32-1.13m-2.56 8.153a6.794 6.794 0 1 1-13.587 0 6.794 6.794 0 0 1 13.588 0"
    })
  ]))
}