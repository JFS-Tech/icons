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
      d: "M20 13.125V6a3 3 0 0 0-3-3H9.875M14 21H7.25A2.25 2.25 0 0 1 5 18.75V9a2.25 2.25 0 0 1 2.25-2.25H14A2.25 2.25 0 0 1 16.25 9v9.75A2.25 2.25 0 0 1 14 21Z"
    })
  ]))
}