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
      d: "M9.102 3h9.925C20.117 3 21 3.883 21 4.973v14.054c0 1.09-.883 1.973-1.973 1.973H9.102m0-18h-4.13C3.884 3 3 3.883 3 4.973v14.054C3 20.117 3.883 21 4.973 21h4.13m0-18v18m6.01-18v18"
    })
  ]))
}