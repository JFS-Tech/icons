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
      d: "M4.75 8.914h14M6.56 3v1.543M16.75 3v1.543m0 0h-10c-1.657 0-3 1.381-3 3.086v10.285c0 1.704 1.343 3.086 3 3.086h10c1.657 0 3-1.381 3-3.086V7.63c0-1.705-1.343-3.086-3-3.086m3 10.543h-5.5m0 0h-5m5 0v5.143m0-5.143V9.429m-5 5.657h-5.5m5.5 0v5.143m0-5.143V9.429"
    })
  ]))
}