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
      d: "M21 12.063H3m10.278 4.76a1.835 1.835 0 0 1 0 2.632 1.925 1.925 0 0 1-2.684 0 1.835 1.835 0 0 1 0-2.631 1.925 1.925 0 0 1 2.684 0Zm0-12.278a1.835 1.835 0 0 1 0 2.631 1.925 1.925 0 0 1-2.684 0 1.835 1.835 0 0 1 0-2.631 1.925 1.925 0 0 1 2.684 0Z"
    })
  ]))
}