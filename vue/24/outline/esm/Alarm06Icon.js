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
      d: "M5.856 18.912 3.168 21.6m17.664 0-2.688-2.688L3.3 3.9 1.8 5.4m20.4 0-3-3M9.6 4.666A8.448 8.448 0 0 1 20.15 15m-2.75 4.265A8.448 8.448 0 0 1 5.646 7.2"
    })
  ]))
}