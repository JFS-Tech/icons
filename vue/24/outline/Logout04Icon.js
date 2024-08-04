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
      d: "M14.647 7.8V5.7c0-.557-.223-1.091-.62-1.485a2.13 2.13 0 0 0-1.498-.615H5.118c-.562 0-1.1.221-1.498.615S3 5.143 3 5.7v12.6c0 .557.223 1.091.62 1.485s.936.615 1.498.615h7.411c.562 0 1.1-.221 1.498-.615a2.1 2.1 0 0 0 .62-1.485v-2.1M8.294 12H21m0 0-3.177-3.15M21 12l-3.177 3.15"
    })
  ]))
}