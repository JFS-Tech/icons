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
    _createElementVNode("g", { "stroke-width": "2" }, [
      _createElementVNode("path", { d: "M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0Z" }),
      _createElementVNode("path", { d: "M14.4 12a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z" })
    ])
  ]))
}