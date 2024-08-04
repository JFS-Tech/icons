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
      d: "M9.12 9.12v-1a1 1 0 0 0-1 1zm.096 0h1a1 1 0 0 0-1-1zm5.664 0v-1a1 1 0 0 0-1 1zm.085 0h1a1 1 0 0 0-1-1zm-5.75.077v1a1 1 0 0 0 1-1zm-.095 0h-1a1 1 0 0 0 1 1zm5.845 0v1a1 1 0 0 0 1-1zm-.085 0h-1a1 1 0 0 0 1 1zm-6.208 4.722a1 1 0 1 0 0 2zm6.656 2a1 1 0 1 0 0-2zM20.6 12a8.6 8.6 0 0 1-8.6 8.6v2c5.854 0 10.6-4.746 10.6-10.6zM12 20.6A8.6 8.6 0 0 1 3.4 12h-2c0 5.854 4.746 10.6 10.6 10.6zM3.4 12A8.6 8.6 0 0 1 12 3.4v-2C6.146 1.4 1.4 6.146 1.4 12zM12 3.4a8.6 8.6 0 0 1 8.6 8.6h2c0-5.854-4.746-10.6-10.6-10.6zm-2.88 6.72h.096v-2H9.12zm5.76 0h.085v-2h-.085zm-6.664-1v.077h2V9.12zm1-.923H9.12v2h.096zm.904 1V9.12h-2v.077zm3.845-.077v.077h2V9.12zm1-.923h-.085v2h.085zm.915 1V9.12h-2v.077zm-.552 4.722H8.672v2h6.656z"
    })
  ]))
}