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
      d: "M17 7.54A5.97 5.97 0 0 0 12.992 6m0 0A5.996 5.996 0 0 0 7 12c0 3.314 2.682 6 5.992 6m0-12 .001-2m-.001 14a5.97 5.97 0 0 0 4.004-1.536M12.992 18l.001 2"
    })
  ]))
}