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
    _createElementVNode("path", { d: "M12 3v18m-9.6-9H21M2.4 6v12A3.6 3.6 0 0 0 6 21.6h12a3.6 3.6 0 0 0 3.6-3.6V6A3.6 3.6 0 0 0 18 2.4H6A3.6 3.6 0 0 0 2.4 6Z" })
  ]))
}