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
      fill: "#000",
      d: "M12 12v-1a1 1 0 0 0-1 1zm.08 0h1a1 1 0 0 0-1-1zm0 .072v1a1 1 0 0 0 1-1zm-.08 0h-1a1 1 0 0 0 1 1zM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm3.5 8a3.5 3.5 0 0 1-3.5 3.5v2a5.5 5.5 0 0 0 5.5-5.5zM12 15.5A3.5 3.5 0 0 1 8.5 12h-2a5.5 5.5 0 0 0 5.5 5.5zM8.5 12A3.5 3.5 0 0 1 12 8.5v-2A5.5 5.5 0 0 0 6.5 12zM12 8.5a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 12 6.5zm0 4.5h.08v-2H12zm-.92-1v.072h2V12zm1-.928H12v2h.08zm.92 1V12h-2v.072z"
    })
  ]))
}