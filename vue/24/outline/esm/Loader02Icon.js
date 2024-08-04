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
      d: "M13.35 5.7V2.1m0 19.8v-4.8m5.7-5.7h2.1m-18.3 0h4.8m9.731-4.03 1.67-1.67M5.925 18.825l3.394-3.394m8.062 0 1.67 1.668M5.924 3.975 9.319 7.37"
    })
  ]))
}