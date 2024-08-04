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
      d: "M2.4 21.6V18A3.6 3.6 0 0 1 6 14.4h7.2m3 3 1.2 1.2 4.2-4.2m-4.2-12c1.456.816 2.4 2.125 2.4 3.6s-.944 2.784-2.4 3.6m-3-3.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0"
    })
  ]))
}