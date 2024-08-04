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
      d: "M8.016 15.784H5.214C3.44 15.784 2 14.558 2 12.761s1.44-3.253 3.214-3.253q.181 0 .357.02v-.02h.045a6 6 0 0 1-.045-.723C5.571 5.59 8.13 3 11.286 3c2.137 0 4 1.188 4.98 2.946A5 5 0 0 1 17 5.892c2.761 0 5 2.266 5 5.062 0 2.55-1.863 4.428-4.286 4.779h-2.589m-3.482-5.864V21m0 0-2.534-2.5m2.534 2.5 2.466-2.5"
    })
  ]))
}