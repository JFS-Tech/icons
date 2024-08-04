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
      d: "m7.379 10.19-2.234 2.234a4.45 4.45 0 0 0 .047 6.343 4.45 4.45 0 0 0 3.181 1.352c1.22.01 2.328-.444 3.162-1.278l2.234-2.233m2.853-2.798 2.233-2.234a4.45 4.45 0 0 0-.047-6.343 4.54 4.54 0 0 0-3.18-1.325 4.4 4.4 0 0 0-3.163 1.278L10.232 7.42m-1.619 7.907 6.7-6.7"
    })
  ]))
}