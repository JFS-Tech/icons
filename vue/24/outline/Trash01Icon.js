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
      d: "M4 6.176h16M9 3h6m-5 13.765v-6.353m4 6.353v-6.353M15.5 21h-7c-1.105 0-2-.948-2-2.118L6.043 7.28c-.023-.601.43-1.103 1-1.103h9.915c.568 0 1.022.502.999 1.103L17.5 18.882c0 1.17-.895 2.118-2 2.118"
    })
  ]))
}