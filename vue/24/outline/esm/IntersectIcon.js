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
    _createElementVNode("g", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "M15.2 19.2a2.4 2.4 0 0 1-2.4 2.4h-8a2.4 2.4 0 0 1-2.4-2.4v-8a2.4 2.4 0 0 1 2.4-2.4h8a2.4 2.4 0 0 1 2.4 2.4z" }),
      _createElementVNode("path", { d: "M21.6 12.8a2.4 2.4 0 0 1-2.4 2.4h-8a2.4 2.4 0 0 1-2.4-2.4v-8a2.4 2.4 0 0 1 2.4-2.4h8a2.4 2.4 0 0 1 2.4 2.4z" })
    ])
  ]))
}