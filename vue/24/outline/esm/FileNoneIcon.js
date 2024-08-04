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
      d: "M15 2.4V6a1.2 1.2 0 0 0 1.2 1.2h3.6M15 2.4h.67c.338 0 .66.142.892.387.35.368.904.935 1.438 1.413.419.374 1.076 1.047 1.47 1.455.213.221.33.516.33.823V7.2M15 2.4H6m13.8 4.8V21M4.2 8.4v10.8a2.4 2.4 0 0 0 2.4 2.4h7.8m6 1.2L3.6 1.2"
    })
  ]))
}