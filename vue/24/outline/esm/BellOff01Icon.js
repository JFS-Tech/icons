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
      d: "M20 16.311c-.571-.829-1.126-2.051-1.126-3.525l.024-2.016c0-3.999-3.066-7.24-6.848-7.24q-.611 0-1.192.11M9.367 20.118c.712.548 1.652.882 2.683.882s1.971-.334 2.683-.882m1.074-2.824H4.51c-.424 0-.661-.643-.405-1 .596-.829 1.17-2.044 1.17-3.508l.025-2.121c0-1.7.563-3.263 1.502-4.489m11.15 13.765L5.61 3"
    })
  ]))
}