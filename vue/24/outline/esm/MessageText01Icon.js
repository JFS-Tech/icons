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
      d: "M8.4 8.4h7.2m-7.2 4.8h4.2m9-1.2c0 1.38-.292 2.692-.816 3.878l.817 5.721-4.903-1.226A9.56 9.56 0 0 1 12 21.6a9.6 9.6 0 1 1 9.6-9.6"
    })
  ]))
}