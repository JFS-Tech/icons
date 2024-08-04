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
      d: "M16.354 7.652h-.006m3.174-4.8-5.8-.447a1.77 1.77 0 0 0-1.385.512l-9.42 9.42c-.69.69-.69 1.809 0 2.499l6.247 6.246c.69.69 1.809.69 2.499 0l9.42-9.42c.364-.364.551-.87.512-1.384l-.447-5.8a1.77 1.77 0 0 0-1.626-1.627"
    })
  ]))
}