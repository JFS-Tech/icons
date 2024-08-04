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
      d: "m6.306 20.633 9.367-8.817 4.408 4.408M6.306 20.633h11.02a3.306 3.306 0 0 0 3.307-3.307V9.612M6.306 20.632A3.306 3.306 0 0 1 3 17.327V6.306A3.306 3.306 0 0 1 6.306 3h8.265m.92 2.755 1.652 1.653L21 3.551M9.612 7.959a1.653 1.653 0 1 1-3.306 0 1.653 1.653 0 0 1 3.306 0"
    })
  ]))
}