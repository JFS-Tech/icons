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
      d: "M4 13.125V7a4 4 0 0 1 4-4h6.125M10 21h6.75A2.25 2.25 0 0 0 19 18.75V9a2.25 2.25 0 0 0-2.25-2.25H10A2.25 2.25 0 0 0 7.75 9v9.75A2.25 2.25 0 0 0 10 21Z"
    })
  ]))
}