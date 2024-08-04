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
      d: "M6 6v4.2M18 6v4.2m-.6 4.2h2.4a1.8 1.8 0 0 0 1.8-1.8V4.2a1.8 1.8 0 0 0-1.8-1.8H4.2a1.8 1.8 0 0 0-1.8 1.8v8.4a1.8 1.8 0 0 0 1.8 1.8h2.4m2.005 3.806 3.394 3.394m0 0 3.165-3.166M12 21.6v-6.943M14.4 8.4a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0"
    })
  ]))
}