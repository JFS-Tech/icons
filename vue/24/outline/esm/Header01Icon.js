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
      d: "M5.631 20.216v-8.308m0 8.308h-2.77m2.77 0h2.77m-2.77-8.308V3.6m0 8.308h12.462M5.63 3.6h-2.77m2.77 0h2.77m9.692 8.308v8.308m0-8.308V3.6m0 16.616h-2.77m2.77 0h2.769M18.092 3.6h-2.769m2.77 0h2.769"
    })
  ]))
}