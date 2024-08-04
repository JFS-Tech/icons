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
      d: "M21 17.5a1 1 0 1 0 0-2zm-5.4-2a1 1 0 1 0 0 2zm1.7 3.7a1 1 0 0 0 2 0zm2-5.4a1 1 0 1 0-2 0zm-5.404 7.005a1 1 0 0 0-.284-1.98zm-1-6.203a1 1 0 1 0 .208-1.99zM11 19c-2.348 0-4.195-.38-5.415-.935C4.31 17.484 4 16.865 4 16.5H2c0 1.568 1.25 2.7 2.756 3.385C6.316 20.595 8.469 21 11 21zm-7-2.5c0 .094-.048-.023.324-.315.336-.264.87-.549 1.574-.81 1.401-.52 3.283-.875 5.102-.875v-2c-2.047 0-4.165.395-5.797 1-.813.301-1.555.673-2.114 1.112C2.565 15.022 2 15.656 2 16.5zm9-9.445c0 1-.894 1.945-2 1.945v2c2.207 0 4-1.836 4-3.945zM11 9c-1.106 0-2-.944-2-1.945H7C7 9.164 8.793 11 11 11zM9 7.055C9 6.007 9.94 5 11 5V3C8.746 3 7 4.994 7 7.055zM11 5c1.06 0 2 1.007 2 2.055h2C15 4.994 13.254 3 11 3zm10 10.5h-2.7v2H21zm-2.7 0h-2.7v2h2.7zm1 3.7v-2.7h-2v2.7zm0-2.7v-2.7h-2v2.7zm-5.688 2.325c-.786.113-1.66.175-2.612.175v2a20.5 20.5 0 0 0 2.896-.195zM11 14.5c.608 0 1.251.034 1.896.102l.208-1.99A20 20 0 0 0 11 12.5z"
    })
  ]))
}