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
    _createElementVNode("g", { "stroke-width": "2" }, [
      _createElementVNode("path", { d: "M12 21.6s7.513-6.678 7.513-11.687a7.513 7.513 0 1 0-15.026 0C4.487 14.922 12 21.6 12 21.6Z" }),
      _createElementVNode("path", { d: "M14.4 9.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z" })
    ])
  ]))
}