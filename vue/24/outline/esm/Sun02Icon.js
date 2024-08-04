import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 25 25",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "stroke-linecap": "round",
      d: "M12.5 1.83v-.79m0 22.92v-.79M23.17 12.5h.79m-22.92 0h.79m18.215-7.545.56-.559M4.394 20.604l.56-.56m15.09 0 .56.56M4.394 4.396l.56.56m13.853 7.5a6.323 6.323 0 1 1-12.646 0 6.323 6.323 0 0 1 12.646 0Z"
    })
  ]))
}