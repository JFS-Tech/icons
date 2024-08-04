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
      d: "m2.4 17.94 2.389-.832a7.6 7.6 0 0 1 6.364.63 7.6 7.6 0 0 0 6.459.596l3.988-1.45M2.4 12.202l2.389-.833a7.6 7.6 0 0 1 6.364.63 7.6 7.6 0 0 0 6.459.596l3.988-1.45M2.4 6.465l2.389-.834a7.6 7.6 0 0 1 6.364.63 7.6 7.6 0 0 0 6.459.596l3.988-1.45"
    })
  ]))
}