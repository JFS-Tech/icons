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
      d: "M19.2 13.686c1.267.947 2.4 3.33 2.4 4.8 0 .457-.334.828-.746.828H20.4m-4.8-9.51a2.742 2.742 0 0 0 0-4.751M3.146 19.314h13.137c.412 0 .745-.37.745-.828 0-2.877-2.403-5.209-7.314-5.209S2.4 15.61 2.4 18.486c0 .457.334.828.746.828ZM12.457 7.43a2.743 2.743 0 1 1-5.486 0 2.743 2.743 0 0 1 5.486 0Z"
    })
  ]))
}