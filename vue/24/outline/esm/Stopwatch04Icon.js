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
      d: "m9.6 9.687 2.583 3.617H16.2M19.5 3.5l2.505 2.504M2.001 6.5l2.504-2.504M9.5 2h5m6 11.429C20.5 18.162 16.694 22 12 22s-8.5-3.838-8.5-8.571c0-4.734 3.806-8.572 8.5-8.572s8.5 3.838 8.5 8.572"
    })
  ]))
}