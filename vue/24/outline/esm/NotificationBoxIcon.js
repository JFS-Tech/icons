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
      d: "M10.875 3h-4.5A3.375 3.375 0 0 0 3 6.375v11.25A3.375 3.375 0 0 0 6.375 21h11.25A3.375 3.375 0 0 0 21 17.625v-5.063m0-6.75a2.812 2.812 0 1 1-5.625 0 2.812 2.812 0 0 1 5.625 0Z"
    })
  ]))
}