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
      "stroke-linejoin": "round",
      d: "M21.6 14.64c-.902.273-1.86.42-2.851.42-5.418 0-9.81-4.392-9.81-9.81 0-.991.147-1.948.42-2.85C5.332 3.622 2.4 7.363 2.4 11.79c0 5.418 4.392 9.81 9.81 9.81 4.427 0 8.169-2.932 9.39-6.96Z"
    })
  ]))
}