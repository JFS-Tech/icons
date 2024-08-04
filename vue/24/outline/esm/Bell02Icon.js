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
      d: "M9.333 20.09c.708.566 1.643.91 2.667.91a4.27 4.27 0 0 0 2.667-.91m-10.16-2.908c-.421 0-.656-.663-.401-1.03.591-.855 1.163-2.107 1.163-3.615l.024-2.185C5.293 6.292 8.296 3 12 3c3.759 0 6.806 3.34 6.806 7.46l-.025 2.077c0 1.518.552 2.778 1.12 3.632.245.369.009 1.013-.408 1.013z"
    })
  ]))
}