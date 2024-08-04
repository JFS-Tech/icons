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
      d: "M11.52 6.24v2.88c0 .53.43.96.96.96h2.88m1.92-7.68h-6.72c-1.06 0-1.92.86-1.92 1.92v1.92m8.64-3.84h.536c.27 0 .527.114.714.31.28.294.723.748 1.15 1.13.335.3.861.837 1.176 1.164.17.177.264.413.264.658v.578M17.28 2.4v2.88c0 .53.43.96.96.96h2.88m0 0v9.6c0 1.06-.86 1.92-1.92 1.92h-3.84M13.92 7.68c-.427-.382-.87-.836-1.15-1.13a.99.99 0 0 0-.714-.31H4.8c-1.06 0-1.92.86-1.92 1.92v11.52c0 1.06.86 1.92 1.92 1.92h8.64c1.06 0 1.92-.86 1.92-1.92V9.502a.95.95 0 0 0-.264-.658A28 28 0 0 0 13.92 7.68"
    })
  ]))
}