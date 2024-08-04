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
      d: "M12 7.8v2.4m0-7.8a6.13 6.13 0 0 0-4.243 1.687A5.65 5.65 0 0 0 6 8.16v7.68c0 1.527.632 2.993 1.757 4.073A6.13 6.13 0 0 0 12 21.6a6.13 6.13 0 0 0 4.243-1.687A5.65 5.65 0 0 0 18 15.84V8.16a5.65 5.65 0 0 0-1.757-4.073A6.13 6.13 0 0 0 12 2.4"
    })
  ]))
}