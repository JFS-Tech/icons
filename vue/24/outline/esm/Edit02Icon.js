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
      d: "m13.449 6.951 3.6 3.6m-12.6 9 4.366-.88a1.2 1.2 0 0 0 .611-.327l9.774-9.78a1.2 1.2 0 0 0 0-1.697L17.128 4.8a1.2 1.2 0 0 0-1.697 0l-9.775 9.781a1.2 1.2 0 0 0-.327.61z"
    })
  ]))
}