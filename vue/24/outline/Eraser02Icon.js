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
      d: "M3.6 21.6h17.6m-9.865-3.43H7.91l-4.018-4.018a1.005 1.005 0 0 1 0-1.416L13.937 2.692a1.005 1.005 0 0 1 1.416 0l5.022 5.022a1.004 1.004 0 0 1 0 1.416z"
    })
  ]))
}