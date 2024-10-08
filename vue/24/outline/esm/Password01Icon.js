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
      d: "M6.529 12h.14m5.33 0h.14m5.19 0h.14M2.4 15.267V8.733c0-1.178.956-2.133 2.134-2.133h14.934c1.178 0 2.133.955 2.133 2.133v6.534a2.133 2.133 0 0 1-2.133 2.133H4.533A2.133 2.133 0 0 1 2.4 15.267Z"
    })
  ]))
}