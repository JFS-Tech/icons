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
      d: "M2.493 13.376a9.607 9.607 0 0 0 19.014 0M12 2.4a4.116 4.116 0 0 0-4.116 4.116v5.488a4.116 4.116 0 1 0 8.232 0V6.516A4.116 4.116 0 0 0 12.002 2.4"
    })
  ]))
}