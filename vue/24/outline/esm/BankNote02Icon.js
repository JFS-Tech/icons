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
      d: "M6 9.6v4.2m12-4.2v4.2M4.2 18h15.6a1.8 1.8 0 0 0 1.8-1.8V7.8A1.8 1.8 0 0 0 19.8 6H4.2a1.8 1.8 0 0 0-1.8 1.8v8.4A1.8 1.8 0 0 0 4.2 18m10.2-6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0"
    })
  ]))
}