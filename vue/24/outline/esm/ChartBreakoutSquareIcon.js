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
      d: "M10.338 4.022h-5.67A2.27 2.27 0 0 0 2.4 6.29v13.608a2.27 2.27 0 0 0 2.268 2.268h13.607a2.27 2.27 0 0 0 2.268-2.268v-6.804m-17.576.066c4.536 0 10.772.567 11.34-3.402m0 0h-3.402m3.402 0v4.076m-.078-12v2.447m7.37 4.924h-2.446m.179-5.103-1.624 1.621"
    })
  ]))
}