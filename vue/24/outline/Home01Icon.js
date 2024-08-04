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
      _createElementVNode("path", { d: "M3 9.416c0-.37.188-.716.505-.93l7.8-5.275a1.25 1.25 0 0 1 1.39 0l7.8 5.275c.317.214.505.56.505.93v9.872c0 .946-.806 1.712-1.8 1.712H4.8c-.994 0-1.8-.766-1.8-1.712z" }),
      _createElementVNode("path", { d: "M14.25 13.125a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" })
    ])
  ]))
}