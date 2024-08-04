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
      d: "M3 18.333h2.795c1.09 0 2.113-.527 2.746-1.414l.96-1.343m10.801-9.104h-2.794c-1.09 0-2.113.526-2.747 1.413l-1.073 1.503M18.654 4 21 6.472l-2.346 2.472m0 6.972L21 18.389l-2.346 2.472M3 6.853h2.795c1.09 0 2.113.527 2.746 1.414l6.22 8.708a3.38 3.38 0 0 0 2.747 1.413h2.794"
    })
  ]))
}