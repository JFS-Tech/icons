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
    _createElementVNode("path", { d: "M5.2 9.443a6.4 6.4 0 1 0 9.15 4.957m-1.95 6.092A6.4 6.4 0 1 0 18.232 9.2m.168-.4a6.4 6.4 0 1 1-12.8 0 6.4 6.4 0 0 1 12.8 0Z" })
  ]))
}