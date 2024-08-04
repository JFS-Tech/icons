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
      d: "M4.8 21.6h8a2.4 2.4 0 0 0 2.4-2.4v-4h4a2.4 2.4 0 0 0 2.4-2.4v-8a2.4 2.4 0 0 0-2.4-2.4h-8a2.4 2.4 0 0 0-2.4 2.4v4h-4a2.4 2.4 0 0 0-2.4 2.4v8a2.4 2.4 0 0 0 2.4 2.4"
    })
  ]))
}