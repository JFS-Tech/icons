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
      d: "M5.578 7.25C6.968 4.71 9.566 3 12.54 3c3.374 0 6.262 2.197 7.455 5.313m-11.977 0H4v-4.25M19.422 15.75C18.032 18.29 15.434 20 12.46 20c-3.374 0-6.262-2.197-7.455-5.312m11.977 0H21v4.25"
    })
  ]))
}