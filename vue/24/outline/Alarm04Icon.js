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
      d: "M12 9.6v3m0 0v3m0-3h3m-3 0H9m-3.144 6.312L3.168 21.6m17.664 0-2.688-2.688M4.8 2.4l-3 3m20.4 0-3-3m1.248 10.368a8.448 8.448 0 1 1-16.896 0 8.448 8.448 0 0 1 16.896 0Z"
    })
  ]))
}