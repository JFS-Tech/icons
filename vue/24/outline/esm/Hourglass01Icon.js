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
      d: "M7.271 21h9.958c.564 0 1.021-.46 1.021-1.029v-2.747c0-.22-.07-.434-.2-.61l-2.944-4.026a1.03 1.03 0 0 1-.02-1.19l2.73-4.021c.117-.171.179-.374.179-.58V4.028c0-.568-.458-1.029-1.022-1.029H7.271c-.564 0-1.021.46-1.021 1.029v2.747c0 .22.07.434.2.61l2.928 4.004c.266.363.266.857 0 1.22L6.45 16.614c-.13.176-.199.39-.199.61v2.747c0 .569.457 1.029 1.021 1.029"
    })
  ]))
}