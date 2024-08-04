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
      fill: "#000",
      d: "M10 2.4a1 1 0 1 0-2 0zM8 21.6a1 1 0 1 0 2 0zM6 3.4h12v-2H6zM20.6 6v12h2V6zM18 20.6H6v2h12zM3.4 18V6h-2v12zM6 20.6A2.6 2.6 0 0 1 3.4 18h-2A4.6 4.6 0 0 0 6 22.6zM20.6 18a2.6 2.6 0 0 1-2.6 2.6v2a4.6 4.6 0 0 0 4.6-4.6zM18 3.4A2.6 2.6 0 0 1 20.6 6h2A4.6 4.6 0 0 0 18 1.4zm-12-2A4.6 4.6 0 0 0 1.4 6h2A2.6 2.6 0 0 1 6 3.4zm2 1v19.2h2V2.4zM3 10h18V8H3z"
    })
  ]))
}