import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
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
      d: "M11 4v2m0 12v2M8 6h5a3 3 0 0 1 3 3v.143A2.857 2.857 0 0 1 13.143 12H8h5a3 3 0 0 1 3 3v.143A2.857 2.857 0 0 1 13.143 18H8z"
    })
  ]))
}