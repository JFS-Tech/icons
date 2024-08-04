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
      d: "M16.518 10.5h4.015c.59 0 1.067.477 1.067 1.067V18.1a2 2 0 0 1-2 2H4.8M2.4 4.967V18c0 1.16.94 2.1 2.1 2.1v0A2.1 2.1 0 0 0 6.6 18v-6.433c0-.59.477-1.067 1.067-1.067h11.8V7.978c0-.589-.478-1.066-1.067-1.066h-7.027l-1.63-2.524a1.07 1.07 0 0 0-.897-.488h-5.38c-.589 0-1.066.477-1.066 1.067"
    })
  ]))
}