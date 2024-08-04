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
      _createElementVNode("path", { d: "M2.4 18.082V6.257a1 1 0 0 1 1.296-.956l.348.108c2.672.827 5.56.827 8.233 0a13.96 13.96 0 0 1 8.95.244l.373.139v12.782a.277.277 0 0 1-.373.26 13.96 13.96 0 0 0-8.95-.245c-2.673.827-5.561.827-8.233 0z" }),
      _createElementVNode("path", { d: "M14.4 11.99a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z" })
    ])
  ]))
}