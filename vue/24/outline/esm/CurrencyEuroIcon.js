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
      d: "M18.1 7c-.844-.965-1.913-1.617-3.074-1.876a5.2 5.2 0 0 0-3.45.423c-1.089.534-2.019 1.43-2.673 2.579A7.86 7.86 0 0 0 7.901 12c0 1.378.349 2.726 1.002 3.874.654 1.148 1.584 2.045 2.673 2.58 1.09.533 2.29.68 3.45.422s2.23-.911 3.074-1.876m-4.2-7h-8m0 4h8"
    })
  ]))
}