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
      d: "M12 12v4.5m0-7.835v-.04m-9 9V6.375A3.375 3.375 0 0 1 6.375 3h11.25A3.375 3.375 0 0 1 21 6.375v11.25A3.375 3.375 0 0 1 17.625 21H6.375A3.375 3.375 0 0 1 3 17.625"
    })
  ]))
}