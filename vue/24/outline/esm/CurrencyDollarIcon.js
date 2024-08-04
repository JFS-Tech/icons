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
      d: "M16.778 7.556a3.33 3.33 0 0 0-3-2.223H9.333a3.333 3.333 0 0 0 0 6.667h4.445a3.333 3.333 0 0 1 0 6.667H9.333a3.33 3.33 0 0 1-3-2.223M11.556 2v3.333m0 13.334V22"
    })
  ]))
}