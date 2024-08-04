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
    _createElementVNode("g", {
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "M11.714 9c0 1.511-1.055 2.585-2.356 2.585C8.056 11.585 7 10.511 7 9c0-1.512 1.055-2.415 2.357-2.415 1.301 0 2.356.903 2.356 2.415ZM15.5 17.685c0 1.555-1.818 2.815-6 2.815s-6-1.26-6-2.815 2.686-2.815 6-2.815 6 1.26 6 2.815ZM17 4l.85 1.83 2.003.243-1.478 1.374.388 1.98L17 8.446l-1.763.981.388-1.98-1.478-1.374 2.003-.243z" })
    ])
  ]))
}