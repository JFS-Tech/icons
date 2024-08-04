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
      d: "M7.2 11.4v-1.2m4.8 1.2V9m4.8 2.4V6.6m-7.2 9.6L7.8 21m8.793-.067-2.12-4.667M4.8 16.2a2.4 2.4 0 0 1-2.4-2.4V5.4A2.4 2.4 0 0 1 4.8 3h14.4a2.4 2.4 0 0 1 2.4 2.4v8.4a2.4 2.4 0 0 1-2.4 2.4z"
    })
  ]))
}