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
      _createElementVNode("path", { d: "M2.4 20.512c0-3.775 3.154-6.836 9.6-6.836s9.6 3.06 9.6 6.836c0 .601-.438 1.088-.979 1.088H3.38c-.54 0-.98-.487-.98-1.088ZM15.6 6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z" })
    ])
  ]))
}