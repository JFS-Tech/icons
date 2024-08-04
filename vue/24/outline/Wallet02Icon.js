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
      d: "M17.76 3.04H3.893c-.825 0-1.491.887-1.492 1.8-.001 1.2.667 2.387 1.492 2.387h15.574c1.178 0 2.133-.245 2.133.933V18.4a2.56 2.56 0 0 1-2.56 2.56H4.96A2.56 2.56 0 0 1 2.4 18.4V5.44m14.097 7.823-.017.017"
    })
  ]))
}