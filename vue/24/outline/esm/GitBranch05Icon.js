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
      d: "M6.667 8.342a2.67 2.67 0 0 0 2.666-2.67A2.67 2.67 0 0 0 6.667 3 2.67 2.67 0 0 0 4 5.671a2.67 2.67 0 0 0 2.667 2.671m0 0v11.725m10.666-5.342A2.67 2.67 0 0 1 20 17.395a2.67 2.67 0 0 1-2.667 2.672 2.67 2.67 0 0 1-2.666-2.671 2.67 2.67 0 0 1 2.666-2.671m0 0V8.378a2.667 2.667 0 0 0-2.666-2.667h-1.6"
    })
  ]))
}