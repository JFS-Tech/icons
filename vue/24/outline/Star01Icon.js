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
      "stroke-linejoin": "round",
      d: "M10.89 3.172c.382-1.03 1.838-1.03 2.219 0l1.896 5.124c.12.324.375.579.699.699l5.124 1.896c1.03.38 1.03 1.837 0 2.218l-5.124 1.896c-.324.12-.58.375-.699.699l-1.896 5.124c-.381 1.03-1.837 1.03-2.218 0l-1.896-5.124a1.18 1.18 0 0 0-.699-.699l-5.124-1.896c-1.03-.381-1.03-1.837 0-2.218l5.124-1.896c.324-.12.579-.375.699-.699z"
    })
  ]))
}