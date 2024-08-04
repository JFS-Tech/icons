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
      d: "m6.375 21 9.563-9 4.5 4.5M6.374 21h11.25A3.375 3.375 0 0 0 21 17.625V12M6.375 21A3.375 3.375 0 0 1 3 17.625V6.375A3.375 3.375 0 0 1 6.375 3h7.313M21 6.335l-2.3 2.29m0 0-2.2-2.186m2.2 2.186V3M9.75 8.063a1.688 1.688 0 1 1-3.375 0 1.688 1.688 0 0 1 3.375 0"
    })
  ]))
}