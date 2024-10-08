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
      d: "M11.495 2.714a.563.563 0 0 1 1.01 0l2.674 5.418c.082.166.24.281.424.308l5.98.869a.563.563 0 0 1 .311.96l-4.326 4.218a.56.56 0 0 0-.162.498l1.021 5.955a.563.563 0 0 1-.817.594l-5.348-2.812a.56.56 0 0 0-.524 0L6.39 21.534a.563.563 0 0 1-.817-.594l1.021-5.955a.56.56 0 0 0-.162-.498l-4.326-4.218a.563.563 0 0 1 .312-.96l5.98-.869a.56.56 0 0 0 .423-.308z"
    })
  ]))
}