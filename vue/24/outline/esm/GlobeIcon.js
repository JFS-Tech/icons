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
    _createElementVNode("path", { d: "M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c-2.175 0-3.937-4.03-3.937-9S9.825 3 12 3m0 18c2.175 0 3.938-4.03 3.938-9S14.175 3 12 3M4.688 16.374c1.648-.944 4.388-1.561 7.488-1.561 3.236 0 6.079.672 7.699 1.687M4.688 7.626c1.648.944 4.388 1.561 7.488 1.561 3.236 0 6.079-.672 7.699-1.687" })
  ]))
}