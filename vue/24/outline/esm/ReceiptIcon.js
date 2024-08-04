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
      "stroke-linejoin": "round",
      d: "M18.24 3H5.76c-.862 0-1.56.806-1.56 1.8V21l2.6-1.8L9.4 21l2.6-1.8 2.6 1.8 2.6-1.8 2.6 1.8V4.8c0-.994-.698-1.8-1.56-1.8Z"
    })
  ]))
}