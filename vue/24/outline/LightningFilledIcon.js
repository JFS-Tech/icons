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
    _createElementVNode("path", { d: "m5.289 13.632 6.99-10.983c.268-.422.921-.232.921.268V10.7a.1.1 0 0 0 .1.1h4.94a.5.5 0 0 1 .41.787L11.71 21.5a.5.5 0 0 1-.91-.287V14.5a.1.1 0 0 0-.1-.1H5.71a.5.5 0 0 1-.421-.768Z" })
  ]))
}