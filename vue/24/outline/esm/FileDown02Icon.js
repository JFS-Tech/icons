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
      d: "M10.8 21.6H6a2.4 2.4 0 0 1-2.4-2.4V4.8A2.4 2.4 0 0 1 6 2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v6.6m1.2 7.757L17.946 21.6m0 0L15.6 19.268m2.346 2.332v-6M7.8 7.2H15m-7.2 3.6H15m-7.2 3.6h3.6"
    })
  ]))
}