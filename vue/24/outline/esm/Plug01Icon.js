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
      d: "M11.981 17.627V21.7M8.491 4.245V2.5m6.981 1.745V2.5m3.49 5.818H5m1.746 0h10.473v4.655a4.655 4.655 0 0 1-4.655 4.654h-1.164a4.655 4.655 0 0 1-4.654-4.654z"
    })
  ]))
}