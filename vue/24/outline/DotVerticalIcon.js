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
    _createElementVNode("g", { "stroke-width": "2" }, [
      _createElementVNode("path", { d: "M12 7.2a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8ZM12 14.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8ZM12 21.6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Z" })
    ])
  ]))
}