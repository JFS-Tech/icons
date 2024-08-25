import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 26 26",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.652 4A9.6 9.6 0 0 1 13 3.4a9.6 9.6 0 0 1 9.6 9.6 9.6 9.6 0 0 1-.698 3.6M16 22.122a9.6 9.6 0 0 1-3 .478A9.6 9.6 0 0 1 3.4 13c0-1.273.248-2.488.698-3.6M13 5.8V1m0 24v-4.8m7.2-7.2H25M1 13h4.8M4.6 4l16.8 18.6"
    })
  ]))
}