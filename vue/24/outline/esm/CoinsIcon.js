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
      d: "M9.493 17.882Q8.892 18 8.253 18C4.8 18 2 15.314 2 12s2.8-6 6.253-6q.639 0 1.24.118M22 12c0 3.314-2.8 6-6.253 6s-6.254-2.686-6.254-6 2.8-6 6.254-6S22 8.686 22 12Z"
    })
  ]))
}