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
      d: "M6.504 14.992a2.504 2.504 0 1 1 0 5.008 2.504 2.504 0 0 1 0-5.008Zm0 0V6.504M16.52 9.008a2.504 2.504 0 1 0 0-5.008 2.504 2.504 0 0 0 0 5.008Zm0 0v4.45a4 4 0 0 1-4 4H9.01"
    })
  ]))
}