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
      d: "M5.25 19.875v-1.688a2.25 2.25 0 0 1 2.25-2.25h9a2.25 2.25 0 0 1 2.25 2.25v2.25M5.25 21C4.007 21 3 19.94 3 18.632V5.368C3 4.06 4.007 3 5.25 3h13.5C19.993 3 21 4.06 21 5.368v13.264C21 19.94 19.993 21 18.75 21zm9.563-11.813a2.813 2.813 0 1 1-5.626 0 2.813 2.813 0 0 1 5.626 0"
    })
  ]))
}