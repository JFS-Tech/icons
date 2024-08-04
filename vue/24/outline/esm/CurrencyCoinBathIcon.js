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
      d: "M11.701 6.192v1.4m0 8.407v1.4M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0m-12-4.406h3.502a2.1 2.1 0 0 1 2.102 2.101v.1a2 2 0 0 1-2.002 2.002H9.6h3.502a2.1 2.1 0 0 1 2.102 2.101v.1A2 2 0 0 1 13.202 16H9.6z"
    })
  ]))
}