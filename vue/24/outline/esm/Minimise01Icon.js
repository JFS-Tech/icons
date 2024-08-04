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
      d: "M2.4 15.456h3.866c1.179 0 2.134.917 2.134 2.048V21.6m0-19.2v4.096c0 1.131-.955 2.048-2.133 2.048H2.4m19.2 6.912h-3.867c-1.178 0-2.133.917-2.133 2.048V21.6m0-19.2v4.096c0 1.131.955 2.048 2.133 2.048H21.6"
    })
  ]))
}