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
      fill: "#D9D9D9",
      d: "M13.12 14.257a1.299 1.299 0 1 1-2.597 0 1.299 1.299 0 0 1 2.597 0"
    }),
    _createElementVNode("path", {
      fill: "#000",
      d: "M19.542 3.37a1 1 0 1 0-1.415 1.415zm.923 3.753a1 1 0 1 0 1.414-1.415zM12.821 9.84a1 1 0 1 0-2 0zm-2 3.377a1 1 0 1 0 2 0zM9.224 1a1 1 0 1 0 0 2zm4.935 2a1 1 0 1 0 0-2zm3.19 3.488a1 1 0 0 0 1.413 1.414zm2.654-1.241.707-.707zM10.821 9.84v3.377h2V9.84zM9.224 3h4.935V1H9.224zm9.538 4.902 1.948-1.948-1.414-1.414-1.948 1.948zm.63 5.527A7.57 7.57 0 0 1 11.823 21v2a9.57 9.57 0 0 0 9.57-9.571zM11.823 21a7.57 7.57 0 0 1-7.572-7.571h-2A9.57 9.57 0 0 0 11.821 23zM4.25 13.429a7.57 7.57 0 0 1 7.571-7.572v-2A9.57 9.57 0 0 0 2.25 13.43zm7.571-7.572a7.57 7.57 0 0 1 7.572 7.572h2a9.57 9.57 0 0 0-9.572-9.572zm.3 8.4a.3.3 0 0 1-.3.298v2c1.27 0 2.3-1.029 2.3-2.298zm-.3.298a.3.3 0 0 1-.298-.298h-2c0 1.269 1.029 2.298 2.298 2.298zm-.298-.298c0-.165.133-.3.298-.3v-2a2.3 2.3 0 0 0-2.298 2.3zm.298-.3c.165 0 .3.134.3.3h2c0-1.27-1.03-2.3-2.3-2.3zm6.306-9.172 1.17 1.169L20.71 4.54l-1.169-1.17zm1.17 1.169 1.168 1.169 1.414-1.415L20.71 4.54z"
    })
  ]))
}