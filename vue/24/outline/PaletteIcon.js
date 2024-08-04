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
      d: "M12 6v.033M6.033 12H6m10.243-4.242-.024.023M7.781 16.22l-.023.024M7.78 7.78l-.023-.024M12 21.6a9.6 9.6 0 1 1 9.6-9.6c0 1.614-1.491 2.688-3.105 2.688h-.627a2.083 2.083 0 0 0-1.864 3.016c.145.29.22.608.22.932v.19c0 1.1-.618 2.142-1.68 2.433A9.6 9.6 0 0 1 12 21.6"
    })
  ]))
}