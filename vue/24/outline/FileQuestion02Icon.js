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
      d: "M12 21.555H6a2.4 2.4 0 0 1-2.4-2.4v-14.4a2.4 2.4 0 0 1 2.4-2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v4.2m-3.6 7.058c0-1.297 1.075-2.348 2.4-2.348 1.326 0 2.4 1.05 2.4 2.348 0 1.296-1.074 2.347-2.4 2.347m0 3.285v-.09M7.8 7.155H15m-7.2 3.6H15m-7.2 3.6h3.6"
    })
  ]))
}