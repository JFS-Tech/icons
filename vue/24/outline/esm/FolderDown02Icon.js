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
      d: "M14.026 19.712H4.774a2.4 2.4 0 0 1-2.4-2.4V5.029a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.954h8.316a1.2 1.2 0 0 1 1.2 1.2v3.188m.054 6.557-2.454 2.442m0 0-2.346-2.332m2.345 2.332v-6"
    })
  ]))
}