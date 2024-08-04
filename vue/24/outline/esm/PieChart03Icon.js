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
      d: "M21.6 12A9.6 9.6 0 0 0 12 2.4m9.6 9.6q0 0 0 0m0 0A9.6 9.6 0 1 1 12 2.4m9.6 9.6H12m0-9.6V12m0 0-6.6 6.6"
    })
  ]))
}