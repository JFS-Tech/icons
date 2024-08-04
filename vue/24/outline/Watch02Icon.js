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
      d: "m15.863 18.041-.874 2.622a.49.49 0 0 1-.468.337H9.316a.49.49 0 0 1-.468-.337l-.874-2.622m0-12.082.874-2.622A.49.49 0 0 1 9.315 3h5.207c.212 0 .4.136.467.337l.874 2.622M7.48 18.041h8.876a1.48 1.48 0 0 0 1.48-1.48V7.686a1.48 1.48 0 0 0-1.48-1.48H7.48A1.48 1.48 0 0 0 6 7.686v8.877c0 .817.663 1.48 1.48 1.48Z"
    })
  ]))
}