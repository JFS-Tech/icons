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
      d: "M16.927 17.04 20.4 20.4m-9-13.2a3.6 3.6 0 0 1 3.6 3.6m4.28.64a7.84 7.84 0 1 1-15.68 0 7.84 7.84 0 0 1 15.68 0Z"
    })
  ]))
}