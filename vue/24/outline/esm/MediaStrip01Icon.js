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
      d: "M3 7.2h18M3 16.8h18M12 2.4v19.2m4.8-19.2v4.8m0 9.6v4.8M7.2 2.4v4.8m0 9.6v4.8M6 2.4h12A3.6 3.6 0 0 1 21.6 6v12a3.6 3.6 0 0 1-3.6 3.6H6A3.6 3.6 0 0 1 2.4 18V6A3.6 3.6 0 0 1 6 2.4"
    })
  ]))
}