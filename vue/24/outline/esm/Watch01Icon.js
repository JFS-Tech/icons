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
      d: "m8 16.67 1.024 3.99c.051.2.228.34.43.34h4.887a.45.45 0 0 0 .424-.319L16 16.672m0-9.342-1.024-3.99a.45.45 0 0 0-.43-.339H9.66a.45.45 0 0 0-.424.318L8 7.33m10 4.557c0 3.398-2.686 6.152-6 6.152s-6-2.754-6-6.152 2.686-6.152 6-6.152 6 2.754 6 6.152Z"
    })
  ]))
}