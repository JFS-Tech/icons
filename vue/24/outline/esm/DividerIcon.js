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
      d: "M3 21v-2.919c0-1.075.883-1.946 1.973-1.946h14.054c1.09 0 1.973.871 1.973 1.946V21M3 3v2.919c0 1.075.883 1.946 1.973 1.946h14.054c1.09 0 1.973-.871 1.973-1.946V3M3 12h.06m4.365 0h.06m4.485 0h.06m4.425 0h.06m4.425 0H21"
    })
  ]))
}