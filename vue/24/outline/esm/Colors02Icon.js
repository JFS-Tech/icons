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
      d: "M5.89 18.02h1.164m9.31-4.655h2.909a2.327 2.327 0 0 1 2.327 2.328v3.49a2.327 2.327 0 0 1-2.327 2.328H7.054m4.073-14.763 3.577-3.577a2.327 2.327 0 0 1 3.291 0l2.469 2.469a2.327 2.327 0 0 1 0 3.29l-9.919 9.92m-5.818 2.66h3.491a2.327 2.327 0 0 0 2.327-2.327V5.22a2.327 2.327 0 0 0-2.327-2.327h-3.49A2.327 2.327 0 0 0 2.4 5.22v13.964a2.327 2.327 0 0 0 2.327 2.327"
    })
  ]))
}