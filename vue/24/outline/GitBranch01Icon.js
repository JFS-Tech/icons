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
      d: "M13.968 18.22a2.361 2.361 0 1 0 4.722 0 2.361 2.361 0 0 0-4.722 0Zm0 0h-3.967a4 4 0 0 1-4-3.999L6 4m7.525 4.777H6m12.69 0a2.36 2.36 0 1 1-4.722 0 2.36 2.36 0 0 1 4.722 0Z"
    })
  ]))
}