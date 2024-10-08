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
      d: "M7.936 21.6h3.934m0 0h4.117m-4.117 0v-9.29M4.22 7.318V5.497c0-.368.16-.698.413-.924m7.237-.315h5.902c.684 0 1.24.555 1.24 1.239v2.331m-7.142-3.57v2.477m0-2.477H9.794M20.323 21.6 3.6 2.4"
    })
  ]))
}