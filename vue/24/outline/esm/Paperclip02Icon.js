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
      d: "M18.957 11.505 11.91 18.55c-1.917 1.918-4.793 2.144-6.748.19-1.918-1.918-1.669-4.696.287-6.652l7.92-7.92a3.087 3.087 0 0 1 4.375 0 3.087 3.087 0 0 1 0 4.376l-8.059 8.059a1.547 1.547 0 1 1-2.188-2.188l7.185-7.184"
    })
  ]))
}