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
      d: "m18.834 4.078 1.17 1.169m1.168 1.169-1.169-1.17M9.224 2h4.935m3.896 5.195 1.948-1.948m-7.232 5.714-1.68 1.68 1.68 1.68-1.68 1.68m9.302-2.572a8.571 8.571 0 1 1-17.143 0 8.571 8.571 0 0 1 17.143 0"
    })
  ]))
}