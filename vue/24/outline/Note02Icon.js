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
      d: "M9.586 16.818c-.294-.64-1.497-1.574-1.797-1.709a3.7 3.7 0 0 0-2.265-.436 3.64 3.64 0 0 0-2.072.989 3.44 3.44 0 0 0-1.021 2.005c-.104.76.055 1.53.45 2.193a3.56 3.56 0 0 0 1.736 1.475c.731.293 1.541.345 2.305.146a3.6 3.6 0 0 0 1.921-1.241 3.4 3.4 0 0 0 .743-2.118V5.91a1 1 0 0 1 .78-.975L21.6 2.4v13.24m0 0v1.305c0 .765-.261 1.51-.743 2.117a3.6 3.6 0 0 1-1.92 1.242 3.7 3.7 0 0 1-2.306-.147 3.56 3.56 0 0 1-1.736-1.474 3.4 3.4 0 0 1-.45-2.194 3.44 3.44 0 0 1 1.021-2.005 3.64 3.64 0 0 1 2.072-.989c.784-.1 1.58.054 2.265.436.3.135 1.503 1.07 1.797 1.709"
    })
  ]))
}