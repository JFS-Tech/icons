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
    _createElementVNode("g", {
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "m14.823 2.4 1.83 4.946 4.947 1.83-4.946 1.83-1.83 4.947-1.83-4.946-4.947-1.83 4.946-1.83zM6.353 13.694l1.599 2.354 2.354 1.599-2.354 1.599-1.6 2.354-1.598-2.354L2.4 17.647l2.354-1.599z" })
    ])
  ]))
}