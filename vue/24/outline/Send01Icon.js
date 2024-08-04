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
      d: "M21.07 2.93 10.406 13.594M3.271 8.235l16.606-5.76c1.023-.356 2.004.625 1.649 1.648l-5.761 16.606c-.395 1.137-1.992 1.169-2.431.047l-2.637-6.738a1.3 1.3 0 0 0-.735-.735l-6.738-2.637c-1.122-.439-1.09-2.036.047-2.43Z"
    })
  ]))
}