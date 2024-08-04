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
      d: "M17.76 12a1.92 1.92 0 1 0 3.84 0 1.92 1.92 0 0 0-3.84 0Zm0 0H12.6m5.16-7.68a1.92 1.92 0 1 0 3.84 0 1.92 1.92 0 0 0-3.84 0Zm0 0H6.6m11.16 15.36a1.92 1.92 0 1 0 3.84 0 1.92 1.92 0 0 0-3.84 0Zm0 0h-5.52a.96.96 0 0 1-.96-.96V5.28m-5.04-.96a1.92 1.92 0 1 1-3.84 0 1.92 1.92 0 0 1 3.84 0Z"
    })
  ]))
}