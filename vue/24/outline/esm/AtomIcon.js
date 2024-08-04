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
      d: "M12 12.09V12m8.962 8.962c-1.895 1.896-7.445-.58-12.395-5.53S1.142 4.933 3.037 3.037c1.896-1.895 7.446.58 12.395 5.53 4.95 4.95 7.426 10.5 5.53 12.395Zm-17.925 0c-1.895-1.895.58-7.445 5.53-12.395s10.5-7.425 12.396-5.53c1.895 1.896-.58 7.446-5.53 12.395-4.95 4.95-10.5 7.426-12.396 5.53Z"
    })
  ]))
}