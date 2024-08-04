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
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "M19 3c1.105 0 2 .883 2 1.973v14.054c0 1.09-.895 1.973-2 1.973h-3c-1.105 0-2-.883-2-1.973V4.973C14 3.883 14.895 3 16 3zM5 3c-1.105 0-2 .883-2 1.973v14.054C3 20.117 3.895 21 5 21h3c1.105 0 2-.883 2-1.973V4.973C10 3.883 9.105 3 8 3z" })
    ])
  ]))
}