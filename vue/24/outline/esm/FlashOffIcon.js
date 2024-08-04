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
      d: "m14.148 18.32-2.055 3c-.352.508-1.183.28-1.183-.332l-.01-5.854c0-.674-.571-1.214-1.277-1.224l-4.182-.052c-.509-.01-.81-.54-.53-.945l1.692-2.46M8.357 7.87l3.55-5.189c.352-.508 1.183-.28 1.183.332l.01 5.854c0 .674.57 1.214 1.277 1.225l4.182.051c.509.01.81.54.53.945l-3.26 4.753M20.4 20.4 3.6 3.6"
    })
  ]))
}