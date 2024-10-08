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
      d: "m9.6 11.188 1.8 1.8 3.6-3.6m-10.2-3.6 5.59-2.795a3.6 3.6 0 0 1 3.22 0l5.59 2.795v8.028c0 2.772-2.562 4.643-7.2 7.572-4.638-2.93-7.2-5.4-7.2-7.572z"
    })
  ]))
}