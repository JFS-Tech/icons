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
      d: "M6.375 7.886c0-3.04 2.409-5.486 5.4-5.486 1.864 0 3.5.95 4.47 2.4M6.6 8.8c-.99 0-1.8.823-1.8 1.829v9.142c0 1.006.81 1.829 1.8 1.829h10.8c.99 0 1.8-.823 1.8-1.829V10.63c0-1.006-.81-1.83-1.8-1.83z"
    })
  ]))
}