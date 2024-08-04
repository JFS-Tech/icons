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
      d: "M6.938 19.875v-5.062c0-.622.503-1.126 1.125-1.126h7.874c.622 0 1.126.504 1.126 1.126v5.624M14.813 7.5h-6.75a1.125 1.125 0 0 1-1.126-1.125V3m13.498 3.935-3.37-3.37A1.93 1.93 0 0 0 15.7 3H4.93A1.93 1.93 0 0 0 3 4.929V19.07C3 20.137 3.863 21 4.929 21H19.07A1.93 1.93 0 0 0 21 19.071V8.3c0-.512-.203-1.002-.565-1.364Z"
    })
  ]))
}