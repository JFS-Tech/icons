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
      d: "M21.6 6.3H2.4h0m19.2 0v13.316c0 1.262-1.042 2.284-2.328 2.284H4.727c-1.285 0-2.327-1.022-2.327-2.284V6.3m19.2 0-3.849-3.848a1.2 1.2 0 0 0-.848-.352H7.097a1.2 1.2 0 0 0-.849.352L2.4 6.3m13.2 3.6a3.6 3.6 0 0 1-7.2 0"
    })
  ]))
}