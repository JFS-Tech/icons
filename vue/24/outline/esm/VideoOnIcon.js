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
      d: "M12.106 8.833h-2.75m6.52 5.554 4.65 2.29c.481.294.987.12.974-.491l-.033-8.095c-.04-.664-.433-.846-1.01-.539l-4.595 2.089M5.25 18.5h8.356c1.242 0 2.25-.995 2.25-2.222l.02-2.85-.02-5.706c0-1.227-1.008-2.222-2.25-2.222H5.25C4.007 5.5 3 6.495 3 7.722v8.556C3 17.505 4.007 18.5 5.25 18.5"
    })
  ]))
}