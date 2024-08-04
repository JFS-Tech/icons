const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
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
      d: "M18.857 20.2a1 1 0 1 0 0-2zm-13.714-2a1 1 0 0 0 0 2zM2.4 13.902a1 1 0 1 0 0 2zm19.2 2a1 1 0 1 0 0-2zM4.244 12.048a1 1 0 1 0 1.11-1.664zm-.948-3.035a1 1 0 0 0-1.109 1.664zm4.806-1.554a1 1 0 0 0 1.793-.886zM8.8 4.357a1 1 0 1 0-1.792.886zm4.99 1.945a1 1 0 0 0 1.665 1.11zm3.036-.947a1 1 0 1 0-1.664-1.11zm4.976 5.386a1 1 0 1 0-.886-1.793zm-3.103-.697a1 1 0 1 0 .887 1.793zm.158 8.156H5.143v2h13.714zM2.4 15.902h19.2v-2H2.4zm5.8-1a3.8 3.8 0 0 1 3.8-3.8v-2a5.8 5.8 0 0 0-5.8 5.8zm3.8-3.8a3.8 3.8 0 0 1 3.8 3.8h2a5.8 5.8 0 0 0-5.8-5.8zm-6.645-.718L3.297 9.013l-1.109 1.664 2.057 1.371zm4.541-3.811L8.8 4.357l-1.792.886L8.103 7.46zm5.559.839 1.371-2.057-1.664-1.11-1.371 2.057zm5.46 1.536L18.7 10.044l.887 1.793 2.216-1.096z"
    })
  ]))
}