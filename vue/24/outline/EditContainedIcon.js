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
      d: "M11.098 3.804H5.412A3.41 3.41 0 0 0 2 7.215v11.373A3.41 3.41 0 0 0 5.412 22h11.373a3.41 3.41 0 0 0 3.412-3.412v-5.686m-12.51 3.412 4.137-.834c.22-.044.422-.153.58-.311L21.667 5.9a1.137 1.137 0 0 0 0-1.608l-1.963-1.96a1.137 1.137 0 0 0-1.608 0l-9.264 9.27c-.158.157-.266.358-.31.578z"
    })
  ]))
}