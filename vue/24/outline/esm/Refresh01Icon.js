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
      d: "M5.816 21.6 2.4 18m0 0 3.416-3.6M2.4 18h16.8a2.4 2.4 0 0 0 2.4-2.4V12m-3.416-9.6L21.6 6m0 0-3.416 3.6M21.6 6H4.8a2.4 2.4 0 0 0-2.4 2.4V12"
    })
  ]))
}