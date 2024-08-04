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
      d: "M1.4 21.6a1 1 0 1 0 2 0zm1-3.6h1zm10.8-2.6a1 1 0 1 0 0-2zm7.693 2.707a1 1 0 1 0 1.414-1.414zm-2.404-5.232a1 1 0 0 0-1.415 1.414zm-1.415 3.818a1 1 0 0 0 1.415 1.414zm5.233-2.404a1 1 0 0 0-1.414-1.415zM13.4 6a2.6 2.6 0 0 1-2.6 2.6v2A4.6 4.6 0 0 0 15.4 6zm-2.6 2.6A2.6 2.6 0 0 1 8.2 6h-2a4.6 4.6 0 0 0 4.6 4.6zM8.2 6a2.6 2.6 0 0 1 2.6-2.6v-2A4.6 4.6 0 0 0 6.2 6zm2.6-2.6A2.6 2.6 0 0 1 13.4 6h2a4.6 4.6 0 0 0-4.6-4.6zM3.4 21.6V18h-2v3.6zM6 13.4A4.6 4.6 0 0 0 1.4 18h2A2.6 2.6 0 0 1 6 15.4zm0 2h7.2v-2H6zm16.307 1.293-1.91-1.91-1.413 1.415 1.909 1.91zm-1.91-1.91-1.908-1.908-1.415 1.414 1.91 1.909zm-1.908 3.324 1.909-1.91-1.414-1.413-1.91 1.909zm1.909-1.91 1.91-1.908-1.415-1.415-1.91 1.91z"
    })
  ]))
}