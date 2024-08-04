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
      d: "M12.296 16.417a1 1 0 1 0 1.536-1.28zM9.749 11.8l-.768-.64a1 1 0 0 0 0 1.28zm4.083-3.338a1 1 0 0 0-1.536-1.28zm0 6.675-3.314-3.978-1.537 1.28 3.315 3.978zm-3.314-2.697 3.314-3.978-1.536-1.28-3.315 3.977zM12 4a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm8 8a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12z"
    })
  ]))
}