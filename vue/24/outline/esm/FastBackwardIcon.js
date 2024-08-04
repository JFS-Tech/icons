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
    _createElementVNode("g", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "m13.919 12.48 6.52 6.52a.68.68 0 0 0 1.16-.48V5.48a.68.68 0 0 0-1.16-.481l-6.52 6.52a.68.68 0 0 0 0 .962M2.6 12.48 9.12 19a.68.68 0 0 0 1.16-.48V5.48a.68.68 0 0 0-1.16-.481l-6.52 6.52a.68.68 0 0 0 0 .962" })
    ])
  ]))
}