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
      d: "M17.4 16.2h-6m-4.8.09v-.09M2.4 15 4.414 4.93A2.4 2.4 0 0 1 6.767 3h9.937a2.4 2.4 0 0 1 2.335 1.844l2.56 10.756M16.8 11.4H7.2a4.8 4.8 0 1 0 0 9.6h9.6a4.8 4.8 0 1 0 0-9.6"
    })
  ]))
}