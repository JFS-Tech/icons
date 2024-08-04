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
      d: "M7.089 20.238h-.507a2.535 2.535 0 0 1-2.535-2.535v-5.07c0-.78-1.647-1.14-1.647-1.14s1.647-.3 1.647-1.14V6.296c0-1.4 1.135-2.535 2.535-2.535h.507m9.822 0h.507c1.4 0 2.534 1.135 2.534 2.535v5.07c0 .78 1.648 1.14 1.648 1.14s-1.648.3-1.648 1.14v4.056c0 1.4-1.134 2.535-2.534 2.535h-.507"
    })
  ]))
}