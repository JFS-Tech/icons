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
      d: "M3 8.388 6.388 5m0 0 3.388 3.388M6.388 5v15.812M3 17.423l3.388 3.389m0 0 3.388-3.389M14.294 6.13H22.2m-7.906 9.036H22.2m-7.906 4.517H22.2m-7.906-9.035H22.2"
    })
  ]))
}