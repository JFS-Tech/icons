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
      d: "M19.851 6a6.13 6.13 0 0 0-6.128 6.128c0 1.499.847 4.375 2.298 5.16M9.128 6A6.13 6.13 0 0 0 3 12.128c0 1.499.847 4.375 2.298 5.16M21 14.808a3.064 3.064 0 1 1-6.128 0 3.064 3.064 0 0 1 6.128 0m-10.723 0a3.064 3.064 0 1 1-6.128 0 3.064 3.064 0 0 1 6.128 0"
    })
  ]))
}