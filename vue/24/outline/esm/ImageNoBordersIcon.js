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
      fill: "#000",
      d: "m2.4 20.4-.781-.625a1 1 0 0 0 .78 1.625zm5.28-6.6.78-.625a1 1 0 0 0-1.561 0zm1.92 2.4-.781.625a1 1 0 0 0 1.562 0zm4.32-5.4.78-.625a1 1 0 0 0-1.561 0zm7.68 9.6v1a1 1 0 0 0 .78-1.625zM7.4 5.4a.8.8 0 0 1-.8.8v2a2.8 2.8 0 0 0 2.8-2.8zm-.8.8a.8.8 0 0 1-.8-.8h-2a2.8 2.8 0 0 0 2.8 2.8zm-.8-.8a.8.8 0 0 1 .8-.8v-2a2.8 2.8 0 0 0-2.8 2.8zm.8-.8a.8.8 0 0 1 .8.8h2a2.8 2.8 0 0 0-2.8-2.8zM3.18 21.025l5.28-6.6-1.561-1.25-5.28 6.6zm3.719-6.6 1.92 2.4 1.562-1.25-1.92-2.4zm3.482 2.4 4.32-5.4-1.562-1.25-4.32 5.4zm2.758-5.4 7.68 9.6 1.562-1.25-7.68-9.6zm8.46 7.975H2.4v2h19.2z"
    })
  ]))
}