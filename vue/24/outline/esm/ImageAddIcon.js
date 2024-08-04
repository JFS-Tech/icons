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
      d: "m6.197 20.934 9.059-8.525 4.263 4.262M6.197 20.934h10.658a3.197 3.197 0 0 0 3.197-3.197V12.41M6.197 20.934A3.197 3.197 0 0 1 3 17.737V7.08a3.197 3.197 0 0 1 3.197-3.197h6.927m5.862 5.146V6.014m0 0V3m0 3.014h-3.014m3.014 0H22M9.395 8.68a1.599 1.599 0 1 1-3.198 0 1.599 1.599 0 0 1 3.198 0"
    })
  ]))
}