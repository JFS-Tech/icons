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
      "stroke-linejoin": "round",
      d: "M20.64 14.76v2.44a2 2 0 0 1-2 2H4.4a2 2 0 0 1-2-2V6.8a2 2 0 0 1 2-2h14.24a2 2 0 0 1 2 2v2.37m.96 5.59h-3.12a2.64 2.64 0 0 1 0-5.28h3.12z"
    })
  ]))
}