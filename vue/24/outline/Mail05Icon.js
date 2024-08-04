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
      d: "M3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25m-18 0A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25m-18 0A2.25 2.25 0 0 0 5.25 7.5h13.5A2.25 2.25 0 0 0 21 5.25m-14.062 9h4.5m-4.5 3.375H9.75"
    })
  ]))
}