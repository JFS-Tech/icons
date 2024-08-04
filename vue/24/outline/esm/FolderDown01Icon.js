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
      d: "m14.4 13.8-2.454 2.443m0 0L9.6 13.91m2.346 2.332v-6M2.4 17.54V5.259a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.953H20.4a1.2 1.2 0 0 1 1.2 1.2v9.33a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.401"
    })
  ]))
}