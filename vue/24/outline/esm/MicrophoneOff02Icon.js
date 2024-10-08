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
      d: "M7.792 6.516v5.488a4.116 4.116 0 0 0 7.591 2.206M2.4 13.376a9.607 9.607 0 0 0 19.014 0M16.024 9V6.516A4.116 4.116 0 0 0 9.769 3M4.2 2.4l17.4 17.4"
    })
  ]))
}