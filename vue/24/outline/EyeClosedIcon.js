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
      d: "m20.4 19.5-15-15m4.8 5.942a2.3 2.3 0 0 0-.6 1.544c0 1.29 1.074 2.336 2.4 2.336a2.43 2.43 0 0 0 1.593-.589m6.846.589c.826-1.237 1.16-2.246 1.16-2.246S19.416 5.1 12 5.1q-.622 0-1.2.063m6.6 12.186c-1.376.88-3.15 1.5-5.4 1.464-7.322-.12-9.6-6.737-9.6-6.737s1.059-3.378 4.2-5.433"
    })
  ]))
}