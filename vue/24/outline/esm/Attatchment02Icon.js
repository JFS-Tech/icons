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
      d: "M17.48 6.072v11.21c0 3.05-2.107 5.518-5.217 5.518-3.051 0-5.063-2.408-5.063-5.519v-12.6A3.473 3.473 0 0 1 10.68 1.2a3.473 3.473 0 0 1 3.482 3.48v12.823a1.74 1.74 0 0 1-3.481 0V6.072"
    })
  ]))
}