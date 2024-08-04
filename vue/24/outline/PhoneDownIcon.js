const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 25 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15.553 18-3.6 3.6m0 0-3.44-3.437m3.44 3.437v-8.843M1.026 9.51c0-.783-.005-1.701-.024-1.947-.023-.695.204-1.261.724-1.781 1.052-.926 3.532-1.97 3.532-1.97S8.513 2.4 11.955 2.4c3.384 0 6.589 1.073 8.448 1.926 1.138.518 1.896 1.05 2.455 1.708.355.423.528.895.527 1.447l-.02 2.112a1.2 1.2 0 0 1-1.217 1.189l-3.012-.046a1.2 1.2 0 0 1-1.181-1.2V8.302a.59.59 0 0 0-.494-.585c-1.07-.174-3.656-.556-5.508-.517-1.642.035-3.909.364-4.9.52a.59.59 0 0 0-.498.586v1.212a1.2 1.2 0 0 1-1.2 1.2H2.229A1.205 1.205 0 0 1 1.026 9.51"
    })
  ]))
}