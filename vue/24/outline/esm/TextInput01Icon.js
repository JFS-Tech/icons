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
      _createElementVNode("path", { d: "M4.8 4.8h3.6M6.6 8.4h-3a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 0 0 1.2 1.2h3m4.2-7.2h9.6a1.2 1.2 0 0 1 1.2 1.2v4.8a1.2 1.2 0 0 1-1.2 1.2h-9.6m-4.2 3.6V4.8M4.8 19.2h3.6" })
    ])
  ]))
}