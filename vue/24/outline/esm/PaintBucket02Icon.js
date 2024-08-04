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
      d: "M17.913 11.36a2 2 0 0 1-.584 1.463l-5.16 5.16c-.78.78-2.044.78-2.823 0l-5.161-5.16a2 2 0 0 1-.584-1.464m14.312 0a2 2 0 0 0-.487-1.255.8.8 0 0 0-.152-.22l-6.426-6.426m7.065 7.901H3.601m0 0A2 2 0 0 1 4.185 10c.132-.133 6.663-6.542 6.663-6.542m0 0L9.789 2.4M4.611 21.6h10.61m4.329-6.406a.34.34 0 0 0-.287-.163.34.34 0 0 0-.288.163c-.224.37-.95 1.631-.95 2.181 0 .685.556 1.244 1.238 1.244s1.237-.558 1.237-1.244c0-.559-.726-1.812-.95-2.181"
    })
  ]))
}