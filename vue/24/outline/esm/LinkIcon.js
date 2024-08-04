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
      d: "M10.012 7.453h-3.16A4.45 4.45 0 0 0 2.4 11.97a4.45 4.45 0 0 0 1.294 3.205c.857.87 1.96 1.333 3.14 1.333h3.158m3.996.038h3.159a4.45 4.45 0 0 0 4.452-4.518 4.54 4.54 0 0 0-1.313-3.186 4.4 4.4 0 0 0-3.14-1.332h-3.158m-6.736 4.447h9.476"
    })
  ]))
}