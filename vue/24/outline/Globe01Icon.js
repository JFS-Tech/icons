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
      d: "m3.522 17.4 1.166-1.247c1.673 1.694 3.996 2.354 6.564 2.354a9.226 9.226 0 0 0 6.564-15.71l1.166-.997M11.75 18.507V22.2m0 0H6.265m5.486 0h5.236M16.722 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
    })
  ]))
}