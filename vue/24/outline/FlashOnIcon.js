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
      d: "M19.097 11.087 12.09 21.32c-.353.509-1.183.28-1.183-.332l-.01-5.854c0-.674-.571-1.214-1.277-1.224l-4.183-.052c-.508-.01-.81-.54-.529-.945L11.915 2.68c.353-.509 1.183-.28 1.183.332l.01 5.854c0 .674.571 1.214 1.277 1.224l4.182.052c.499 0 .8.54.53.945"
    })
  ]))
}