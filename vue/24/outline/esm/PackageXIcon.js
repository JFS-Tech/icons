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
      d: "m20.162 7.2-8.314-4.8-8.314 4.8v9.6l8.314 4.8m8.314-14.4-8.314 5.4m8.314-5.4V12m-8.314 9.6v-9m0 9 1.8-1.039m-1.8-7.961-7.8-4.8m11.4 1.8-7.8-4.8m8.999 10.581 1.91 1.91m0 0 1.908 1.909m-1.908-1.91 1.909-1.909m-1.91 1.91L16.648 19.2"
    })
  ]))
}