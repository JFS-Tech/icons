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
      d: "m5.4 9.624 4.83-5.27a2.4 2.4 0 0 1 3.54 0l4.83 5.27m2.597 1.297-2.732 8.8a1 1 0 0 1-.955.703H6.555a1 1 0 0 1-.953-.697l-2.79-8.8a1 1 0 0 1 .954-1.303h16.476a1 1 0 0 1 .955 1.297"
    })
  ]))
}