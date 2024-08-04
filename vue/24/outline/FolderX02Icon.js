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
      d: "M12.6 19.712H4.8a2.4 2.4 0 0 1-2.4-2.4V5.028a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.954H20.4a1.2 1.2 0 0 1 1.2 1.2v3.188m0 9-2.4-2.4m0 0-2.4-2.4m2.4 2.4-2.4 2.4m2.4-2.4 2.4-2.4"
    })
  ]))
}