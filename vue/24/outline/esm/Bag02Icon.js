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
      d: "m16.41 10.709-.005-.006m-8.29.006-.007-.006m8.303-4.152a4.151 4.151 0 1 0-8.303 0M5.513 21.6h12.973c1.147 0 2.076-.93 2.076-2.076V8.627c0-1.146-.93-2.076-2.076-2.076H5.513c-1.146 0-2.075.93-2.075 2.076v10.897c0 1.147.93 2.076 2.075 2.076"
    })
  ]))
}