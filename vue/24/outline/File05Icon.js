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
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 2.4V6a1.2 1.2 0 0 0 1.2 1.2h3.6m-11.4 0h2.4m-2.4 3.6h7.2m-7.2 3.6h7.2M18 4.2a27 27 0 0 1-1.438-1.413 1.23 1.23 0 0 0-.893-.387H6.6a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4h10.8a2.4 2.4 0 0 0 2.4-2.4L19.8 6.478c0-.307-.117-.602-.33-.823-.394-.408-1.051-1.08-1.47-1.455"
    })
  ]))
}