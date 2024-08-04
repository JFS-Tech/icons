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
      d: "M9.747 7.723a1 1 0 0 0-.181 1.992zm5.066 1.464.995-.09a1 1 0 0 0-.905-.905zm-.528 5.247a1 1 0 1 0 1.992-.18zm-5.805-.329a1 1 0 1 0 1.415 1.415zm1.086-4.39 5.156.468.181-1.991-5.156-.47zm4.25-.437.47 5.156 1.991-.18-.469-5.157zm.29-.798L8.48 14.105l1.415 1.415 5.625-5.625zM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10z"
    })
  ]))
}