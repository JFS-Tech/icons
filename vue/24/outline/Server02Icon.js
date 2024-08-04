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
    _createElementVNode("path", { d: "M21.6 6.6c0 1.988-4.298 3.6-9.6 3.6S2.4 8.588 2.4 6.6m19.2 0C21.6 4.612 17.302 3 12 3S2.4 4.612 2.4 6.6m19.2 0v10.8c0 1.988-4.298 3.6-9.6 3.6s-9.6-1.612-9.6-3.6V6.6M21.6 12c0 1.988-4.298 3.6-9.6 3.6S2.4 13.988 2.4 12" })
  ]))
}