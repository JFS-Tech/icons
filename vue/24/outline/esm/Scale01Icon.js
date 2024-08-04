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
      d: "M5.363 2.4A2.963 2.963 0 0 0 2.4 5.363M14.133 2.4H9.867M21.6 5.363A2.963 2.963 0 0 0 18.637 2.4M2.4 9.867v4.266m19.2 0V9.867m-19.2 8.77A2.963 2.963 0 0 0 5.363 21.6m13.274 0a2.963 2.963 0 0 0 2.963-2.963M9.867 21.6h4.266M2.4 12h7.467c1.178 0 2.133.955 2.133 2.133V21.6H5.6a3.2 3.2 0 0 1-3.2-3.2z"
    })
  ]))
}