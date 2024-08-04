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
      d: "m16.999 4-3.76-.94a2 2 0 0 0-.485-.06H8.736a2 2 0 0 0-1.789 1.106l-3.5 7A2 2 0 0 0 5.236 14H12m4.999-10L17 13l-3.392 5.088A3.6 3.6 0 0 0 13 20.096a.905.905 0 0 1-.905.904h-.096a2 2 0 0 1-2-2v-5m7-10H19a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5"
    })
  ]))
}