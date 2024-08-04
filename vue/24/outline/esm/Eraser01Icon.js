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
      d: "M19.678 21.341H7.248l-4.52-4.52a1.13 1.13 0 0 1 0-1.593l11.3-11.3a1.13 1.13 0 0 1 1.594 0l5.65 5.65a1.13 1.13 0 0 1 0 1.594L17.4 15.043m-6.298 6.298 6.298-6.298M9.912 8.045l7.488 6.998"
    })
  ]))
}