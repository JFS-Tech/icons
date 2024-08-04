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
      d: "m7.8 10.2 3-2.128L17.4 3M12 7.2l9 6m-4.8-2.4-3 10.2m1.2-5.4H3m6.6 0L4.8 3m2.4 18.6h9.6a4.8 4.8 0 0 0 4.8-4.8V7.2a4.8 4.8 0 0 0-4.8-4.8H7.2a4.8 4.8 0 0 0-4.8 4.8v9.6a4.8 4.8 0 0 0 4.8 4.8"
    })
  ]))
}