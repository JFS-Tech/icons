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
      d: "m20.298 12.241-7.926 7.926c-2.157 2.158-5.393 2.412-7.592.213-2.158-2.157-1.877-5.283.322-7.482l8.91-8.91a3.473 3.473 0 0 1 4.923 0 3.473 3.473 0 0 1 0 4.922l-9.066 9.067a1.74 1.74 0 0 1-2.462-2.462l8.083-8.082"
    })
  ]))
}