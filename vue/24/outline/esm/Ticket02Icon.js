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
      d: "M14.4 14.86V8.953M5.012 3.46H12a2.625 2.625 0 0 0 5.248 0h1.74a3.81 3.81 0 0 1 3.81 3.811v9.457a3.81 3.81 0 0 1-3.81 3.812h-1.74a2.625 2.625 0 0 0-5.248 0h-6.99A3.81 3.81 0 0 1 1.2 16.728V7.271A3.81 3.81 0 0 1 5.012 3.46"
    })
  ]))
}