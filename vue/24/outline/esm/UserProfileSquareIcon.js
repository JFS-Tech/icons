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
    _createElementVNode("path", { d: "M4.2 19.8c.344-.385 2.658-2.202 3.808-3.098A2.38 2.38 0 0 1 9.47 16.2h5.047c.537 0 1.056.183 1.488.502 1.485 1.094 2.877 1.909 4.394 3.098M6 21.6h12a3.6 3.6 0 0 0 3.6-3.6V6A3.6 3.6 0 0 0 18 2.4H6A3.6 3.6 0 0 0 2.4 6v12A3.6 3.6 0 0 0 6 21.6Zm9.439-12.328c0-1.831-1.547-3.328-3.44-3.328-1.892 0-3.438 1.497-3.438 3.328 0 1.832 1.547 3.328 3.439 3.328s3.438-1.496 3.438-3.328Z" })
  ]))
}