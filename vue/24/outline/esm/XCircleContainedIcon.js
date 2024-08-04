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
      fill: "#000",
      d: "M15.89 9.525a1 1 0 0 0-1.415-1.414zm-7.78 4.95a1 1 0 1 0 1.415 1.414zm6.365 1.414a1 1 0 0 0 1.414-1.414zm-4.95-7.778a1 1 0 0 0-1.414 1.414zM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm2.475 4.11-3.182 3.183 1.414 1.414 3.182-3.182zm-3.182 3.183L8.11 14.475l1.414 1.414 3.182-3.182zm4.596 3.182-3.182-3.182-1.414 1.414 3.182 3.182zm-3.182-3.182L9.525 8.11 8.111 9.525l3.182 3.182z"
    })
  ]))
}