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
      d: "M4 15.204v3.688c0 .56.21 1.096.586 1.49A1.95 1.95 0 0 0 6 21h12c.53 0 1.04-.222 1.414-.617.375-.395.586-.932.586-1.49v-3.689m-8-.261V3m0 0L7.43 7.563M12 3l4.572 4.563"
    })
  ]))
}