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
      d: "M8.4 17.4h.056m6.094-6.15L16.8 9m0 0 2.25 2.25M16.8 9V5.4m0 3.6-3-1.5m3 1.5 3-1.5m-7.2 9.9A4.2 4.2 0 1 1 6 13.953V4.798a2.4 2.4 0 0 1 4.8.002v9.153c.86.769 1.8 2.203 1.8 3.447"
    })
  ]))
}