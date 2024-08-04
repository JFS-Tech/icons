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
      d: "m3.23 5.667 15.2 14.84M3.23 5.666A3.12 3.12 0 0 1 5.582 4.61h5.139M3.229 5.667A2.9 2.9 0 0 0 2.5 7.592V18.52c0 1.646 1.38 2.98 3.083 2.98h11.305c1.703 0 3.083-1.334 3.083-2.98v-4.471m-9.25 0-6.68 6.458m13.965-14.63v-.063m3.494-.01c0 2.203-3.494 5.14-3.494 5.14s-3.495-2.937-3.495-5.14c0-1.825 1.565-3.304 3.495-3.304S21.5 3.98 21.5 5.804"
    })
  ]))
}