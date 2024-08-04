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
      d: "M15.6 8.342a3.6 3.6 0 1 1-7.2 0m-3.673 12.6h14.546c1.285 0 2.327-1.022 2.327-2.284L20.109 5.342c0-1.261-1.042-2.284-2.327-2.284H5.927C4.642 3.058 3.6 4.081 3.6 5.342L2.4 18.658c0 1.262 1.042 2.284 2.327 2.284"
    })
  ]))
}