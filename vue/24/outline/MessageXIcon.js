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
      d: "M14.4 14.4 12 12m0 0L9.6 9.6M12 12l-2.4 2.4M12 12l2.4-2.4m7.2 2.4s-.292 2.692-.816 3.878l.817 5.721-4.903-1.226A9.56 9.56 0 0 1 12 21.6a9.6 9.6 0 1 1 9.6-9.6"
    })
  ]))
}