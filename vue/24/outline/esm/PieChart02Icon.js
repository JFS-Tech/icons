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
    _createElementVNode("g", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "M11.435 21.883a9.035 9.035 0 0 0 9.036-9.036h-9.036V3.812a9.035 9.035 0 0 0 0 18.07" }),
      _createElementVNode("path", { d: "M15.388 2.118v6.69H21.6v-.479a6.21 6.21 0 0 0-6.212-6.211" })
    ])
  ]))
}