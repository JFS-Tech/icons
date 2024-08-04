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
      d: "M5.25 3h14m-14 18h14M17.5 3v2.647a3 3 0 0 1-.674 1.895l-2.875 3.53a1.64 1.64 0 0 0 .03 2.12l2.794 3.25a3 3 0 0 1 .725 1.956V21M7 3v2.647a3 3 0 0 0 .674 1.895l2.875 3.53a1.64 1.64 0 0 1-.03 2.12l-2.794 3.25A3 3 0 0 0 7 18.398V21"
    })
  ]))
}