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
      d: "M20 20 4 4.065m4.82 13.398a2.38 2.38 0 0 1-2.386 2.376 2.38 2.38 0 0 1-2.386-2.376 2.38 2.38 0 0 1 2.386-2.376 2.38 2.38 0 0 1 2.385 2.376ZM19.951 6.376a2.38 2.38 0 0 1-2.386 2.376 2.38 2.38 0 0 1-2.385-2.376A2.38 2.38 0 0 1 17.566 4a2.38 2.38 0 0 1 2.386 2.376Z"
    })
  ]))
}