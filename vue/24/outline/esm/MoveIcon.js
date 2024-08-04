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
      d: "M5.763 15.363 2.4 12m0 0 3.363-3.363M2.4 12h19.2m-3.363 3.363L21.6 12m0 0-3.363-3.363m-9.6-2.874L12 2.4m0 0 3.363 3.363M12 2.4v19.2m-3.363-3.363L12 21.6m0 0 3.363-3.363"
    })
  ]))
}