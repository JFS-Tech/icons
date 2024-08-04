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
    _createElementVNode("g", {
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" }),
      _createElementVNode("path", { d: "M8.625 9.89c0-.698.567-1.265 1.266-1.265h4.218c.7 0 1.266.567 1.266 1.266v4.218c0 .7-.567 1.266-1.266 1.266H9.891a1.266 1.266 0 0 1-1.266-1.266z" })
    ])
  ]))
}