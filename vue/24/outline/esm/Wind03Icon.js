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
      d: "M7.417 20.819c1.269.267 2.844.425 4.55.425 1.836 0 3.52-.183 4.834-.488M3.884 12.261c1.707.98 4.69 1.629 8.084 1.629 3.395 0 6.378-.65 8.084-1.629M5.4 16.556c1.387.608 3.81 1.01 6.568 1.01s5.182-.402 6.569-1.01M21.6 6.293c0 1.953-4.298 3.537-9.6 3.537S2.4 8.246 2.4 6.293 6.698 2.756 12 2.756s9.6 1.584 9.6 3.537Z"
    })
  ]))
}