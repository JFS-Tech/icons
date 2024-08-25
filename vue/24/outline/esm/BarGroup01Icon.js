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
      d: "M9.056 21v-9.976a1 1 0 0 1 1-1h4.059a1 1 0 0 1 1 1V21m-6.059 0 .002-4.32a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1zm0 0h6.059m0 0V4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1z"
    })
  ]))
}