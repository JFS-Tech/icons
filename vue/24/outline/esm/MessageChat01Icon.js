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
      d: "M5 11a8 8 0 1 1 15.319 3.232L21 18.999l-4.085-1.021A7.96 7.96 0 0 1 12.999 19m-9.998-3c0 .719.152 1.402.425 2.02L3 21l2.553-.639A5 5 0 1 0 3.001 16"
    })
  ]))
}