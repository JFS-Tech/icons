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
      d: "M14.944 21.088V3.912a1 1 0 0 0-1-1H9.885a1 1 0 0 0-1 1v17.176m6.059 0-.002-10.32a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v9.32a1 1 0 0 1-1 1zm0 0H8.885m0 0v-5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"
    })
  ]))
}