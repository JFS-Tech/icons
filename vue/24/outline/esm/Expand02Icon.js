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
      d: "m14 10 7-7m0 0h-5.143M21 3v5.143M10 14l-7 7m0 0h5.143M3 21v-5.143M14 14l7 7m0 0v-5.143M21 21h-5.143M10 10 3 3m0 0v5.143M3 3h5.143"
    })
  ]))
}