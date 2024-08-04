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
      d: "M20.44 7.75H3.56M14.5 11.5h-5m11-3.248v10.123a2.125 2.125 0 0 1-2.125 2.125H5.625A2.125 2.125 0 0 1 3.5 18.375V8.252c0-.33.077-.656.224-.95l1.46-2.921c.27-.54.822-.881 1.426-.881h10.78c.604 0 1.156.341 1.425.881l1.46 2.92c.148.295.225.62.225.95"
    })
  ]))
}