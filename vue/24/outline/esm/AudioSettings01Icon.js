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
      d: "M2.4 4.8H12M2.4 12H12m0 0v2.4m0-2.4V9.6m-9.6 9.6h4.8m4.8 0h9.6M16.8 12h4.8m-4.8-7.2h4.8m-4.8 0v2.4m0-2.4V2.4m-9 19.2v-4.8"
    })
  ]))
}