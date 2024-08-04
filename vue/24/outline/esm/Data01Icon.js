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
      d: "M6.24 12a1.92 1.92 0 1 1-3.84 0 1.92 1.92 0 0 1 3.84 0Zm0 0h11.52m0 0a1.92 1.92 0 1 0 3.84 0 1.92 1.92 0 0 0-3.84 0Zm0-7.68a1.92 1.92 0 1 0 3.84 0 1.92 1.92 0 0 0-3.84 0Zm0 0h-5.52a.96.96 0 0 0-.96.96v13.44c0 .53.43.96.96.96h5.52m0 0a1.92 1.92 0 1 0 3.84 0 1.92 1.92 0 0 0-3.84 0Z"
    })
  ]))
}