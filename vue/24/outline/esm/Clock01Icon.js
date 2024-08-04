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
      fill: "#000",
      d: "M15.559 15.199a1 1 0 0 0 .632-1.898zM12.5 13.125h-1a1 1 0 0 0 .684.949zm1-4.704a1 1 0 1 0-2 0zm2.691 4.88-3.375-1.125-.632 1.898 3.375 1.125zm-2.691-.176V8.421h-2v4.704zm7-1.125a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8h-2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2c-5.523 0-10 4.477-10 10zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10z"
    })
  ]))
}