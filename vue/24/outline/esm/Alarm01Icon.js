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
      d: "M12 9.312v3.138c0 .204.08.399.225.543l1.695 1.695M2.4 7.008V6.24A3.84 3.84 0 0 1 6.24 2.4h.768m9.984 0h.768a3.84 3.84 0 0 1 3.84 3.84v.768M5.856 18.912 3.168 21.6m17.664 0-2.688-2.688m2.304-6.144a8.448 8.448 0 1 1-16.896 0 8.448 8.448 0 0 1 16.896 0Z"
    })
  ]))
}