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
      d: "M11.4 21.6h-6A2.4 2.4 0 0 1 3 19.2V4.8a2.4 2.4 0 0 1 2.4-2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v4.8m1.2 10.2L21 21M7.2 7.2h7.2m-7.2 3.6h7.2m-7.2 3.6h3.6m9.6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    })
  ]))
}