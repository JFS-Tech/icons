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
      d: "M9.021 4.796c.36-.91 1.222-1.551 2.228-1.551 1.33 0 2.408 1.12 2.408 2.501 0 1.382-1.078 2.502-2.408 2.502h-8.85m11.625 10.955c.36.911 1.222 1.552 2.228 1.552 1.33 0 2.408-1.12 2.408-2.501 0-1.382-1.078-2.502-2.408-2.502h-8.85m9.381-7.203a2.502 2.502 0 1 1 2.315 3.45H4.901"
    })
  ]))
}