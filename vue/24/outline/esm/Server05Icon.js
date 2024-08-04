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
      d: "M18 7.8a6 6 0 0 1-6 6m6-6a6 6 0 0 0-6-6m6 6H6m6 6a6 6 0 0 1-6-6m6 6c1.325 0 2.4-2.686 2.4-6s-1.075-6-2.4-6m0 12c-1.326 0-2.4-2.686-2.4-6s1.074-6 2.4-6m-6 6a6 6 0 0 1 6-6m2.4 18a2.4 2.4 0 1 1-4.8 0m4.8 0a2.4 2.4 0 1 0-4.8 0m4.8 0h7.2m-12 0H2.4"
    })
  ]))
}