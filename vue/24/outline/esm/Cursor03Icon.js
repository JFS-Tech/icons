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
      d: "m18.522 21.364 2.842-2.842a.804.804 0 0 0 0-1.137l-4.481-4.482a.804.804 0 0 1 .066-1.196l3.768-3.014a.804.804 0 0 0-.282-1.401l-17.01-4.86a.804.804 0 0 0-.993.994l4.86 17.01a.804.804 0 0 0 1.4.28l3.015-3.767a.804.804 0 0 1 1.196-.066l4.482 4.481a.804.804 0 0 0 1.137 0"
    })
  ]))
}