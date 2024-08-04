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
      d: "M14.207 3a1 1 0 1 0 0 2zM20 4h1a1 1 0 0 0-1-1zm-1 5.793a1 1 0 1 0 2 0zm-5.76.966-.706-.707zM9.794 21a1 1 0 1 0 0-2zM4 20H3a1 1 0 0 0 1 1zm1-5.793a1 1 0 1 0-2 0zM14.207 5H20V3h-5.793zM19 4v5.793h2V4zm.293-.707-6.76 6.759 1.415 1.414 6.76-6.759zM9.793 19H4v2h5.793zM5 20v-5.793H3V20zm-.293.707 9.241-9.241-1.414-1.414-9.241 9.24z"
    })
  ]))
}