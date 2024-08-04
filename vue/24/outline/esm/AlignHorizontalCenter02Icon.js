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
      d: "M12 7.2V2.4m0 19.2v-5.4m-7.2 0h14.4a2.4 2.4 0 0 0 2.4-2.4v-3.6a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 0 0-2.4 2.4v3.6a2.4 2.4 0 0 0 2.4 2.4"
    })
  ]))
}