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
      d: "m4.688 6.75 6.672 4.79c.385.277.895.277 1.28 0l6.672-4.79M5.25 19h13.5c1.243 0 2.25-1.045 2.25-2.333V7.333C21 6.045 19.993 5 18.75 5H5.25C4.007 5 3 6.045 3 7.333v9.334C3 17.955 4.007 19 5.25 19"
    })
  ]))
}