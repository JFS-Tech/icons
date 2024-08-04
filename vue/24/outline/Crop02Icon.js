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
      d: "M2.4 6.608H6.87m0 0V2.4m0 4.208v8.943c0 .58.471 1.052 1.052 1.052h9.732M6.87 6.608l9.732-.061c.58 0 1.052.47 1.052 1.052v9.004m0 0H21.6m-3.945 0v5.26"
    })
  ]))
}