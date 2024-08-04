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
    _createElementVNode("path", { d: "M5.4 19.2c.461-.517 2.62-2.893 3.254-2.893h6.692c.918 0 2.79 1.97 3.254 2.664m3-6.971a9.6 9.6 0 0 1-9.6 9.6 9.6 9.6 0 1 1 9.6-9.6Zm-6.161-3.272C15.439 6.896 13.893 5.4 12 5.4c-1.892 0-3.438 1.496-3.438 3.328s1.546 3.328 3.438 3.328 3.439-1.496 3.439-3.328Z" })
  ]))
}