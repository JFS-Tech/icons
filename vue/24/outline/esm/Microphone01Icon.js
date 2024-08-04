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
      d: "M4.398 11.177A7.68 7.68 0 0 0 12 17.753m0 0a7.68 7.68 0 0 0 7.602-6.576M12 17.753V21.6m.001-19.2A3.29 3.29 0 0 0 8.71 5.69v4.389a3.292 3.292 0 0 0 6.583 0V5.69A3.29 3.29 0 0 0 12 2.4"
    })
  ]))
}