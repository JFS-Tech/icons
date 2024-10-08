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
      d: "M3 9.645h4.178M3 9.645l4.12.001h.058M3 9.645V5.76c0-.53.537-.96 1.2-.96h2.92c.663 0 1.2.43 1.2.96v2.926c0 .515-.506.935-1.142.96M3 9.645v4.846m4.178-4.847h5.598c.663 0 1.2.43 1.2.96v2.927c0 .53-.537.96-1.2.96m-9.776 0h9.776m-9.776 0v3.748c0 .53.537.96 1.2.96h15.6c.663 0 1.2-.43 1.2-.96v-2.788c0-.53-.537-.96-1.2-.96h-7.024M3 21.6V2.4"
    })
  ]))
}