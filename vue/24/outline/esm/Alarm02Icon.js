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
      d: "M12 9.312v3.138c0 .204.081.399.225.543l1.695 1.695m-8.064 4.224L3.168 21.6m17.664 0-2.688-2.688M4.8 2.4l-3 3m20.4 0-3-3m1.248 10.368a8.448 8.448 0 1 1-16.896 0 8.448 8.448 0 0 1 16.896 0Z"
    })
  ]))
}