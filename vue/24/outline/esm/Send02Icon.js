import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 25 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "stroke-linecap": "round",
      d: "M23.8 12H11.16m-5.326 4.17H3.4m2.434-4.024H1m4.834-4.022H3.4m6.707-3.528 13.256 6.427a1.086 1.086 0 0 1 0 1.954l-13.256 6.427c-.908.44-1.873-.488-1.468-1.413l2.43-5.556a1.09 1.09 0 0 0 0-.87L8.64 6.008c-.405-.924.56-1.852 1.468-1.412Z"
    })
  ]))
}