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
      _createElementVNode("path", { d: "M4.2 6v12a3.6 3.6 0 0 0 3.6 3.6h8.4a3.6 3.6 0 0 0 3.6-3.6V6a3.6 3.6 0 0 0-3.6-3.6H7.8A3.6 3.6 0 0 0 4.2 6Z" }),
      _createElementVNode("path", { d: "M13.61 8.605a3.6 3.6 0 0 0-3.22 0L9 9.3v3.345c0 .905 1.068 1.934 3 3.155 1.932-1.22 3-2 3-3.155V9.3z" })
    ])
  ]))
}