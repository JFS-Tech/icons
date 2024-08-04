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
      d: "M2.4 21.067h19.2M2.4 17.333h2.667M4.533 10.4l1.886 1.886M18.686 10.4 16.8 12.286m2.133 5.047H21.6M12 10.4V2.933m0 0-3.2 3.2m3.2-3.2 3.2 3.2m-6.933 11.2a3.733 3.733 0 0 1 7.466 0"
    })
  ]))
}