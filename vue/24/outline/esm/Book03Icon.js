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
      d: "M8.571 2.4v19.2m8.915-10.971h-4.8m4.8-4.115h-4.8m-7.543 0H2.4m2.743 4.115H2.4m2.743 4.114H2.4M6.514 21.6h12.343a2.743 2.743 0 0 0 2.743-2.743V5.143A2.743 2.743 0 0 0 18.857 2.4H6.514a2.743 2.743 0 0 0-2.743 2.743v13.714A2.743 2.743 0 0 0 6.514 21.6Z"
    })
  ]))
}