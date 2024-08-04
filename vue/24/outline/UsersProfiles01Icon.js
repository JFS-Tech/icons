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
      d: "M16.025 20.57v-3.213a3.214 3.214 0 0 0-3.213-3.214H5.614A3.214 3.214 0 0 0 2.4 17.356v3.215m19.2 0v-3.214a3.214 3.214 0 0 0-3.214-3.214M15.406 4.06a3.21 3.21 0 0 1 1.301 2.583 3.21 3.21 0 0 1-1.3 2.583m-2.913-2.583a3.214 3.214 0 1 1-6.428 0 3.214 3.214 0 0 1 6.428 0"
    })
  ]))
}