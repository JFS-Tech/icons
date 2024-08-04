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
      d: "M22.2 13.8v-3.6M6.6 9.6H5.4v4.8h1.2m0-4.8h1.2v4.8H6.6m0-4.8v4.8M4.2 18h12a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 16.2 6h-12a2.4 2.4 0 0 0-2.4 2.4v7.2A2.4 2.4 0 0 0 4.2 18"
    })
  ]))
}