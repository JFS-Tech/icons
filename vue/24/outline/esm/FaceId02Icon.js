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
      d: "M8.8 2.4H4.533A2.133 2.133 0 0 0 2.4 4.533v14.934c0 1.178.955 2.133 2.133 2.133h14.934a2.133 2.133 0 0 0 2.133-2.133V4.533A2.133 2.133 0 0 0 19.467 2.4H9M7.8 9.165v-1.17m8.4 1.17v-1.17M8.653 15.6c1.368 1.06 4.436 1.06 6.348 0M11.4 12.675l.248-.242c.226-.22.352-.517.352-.828V8.58"
    })
  ]))
}