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
      d: "M12.139 20.487c1.391-1.02 5.231-2.449 9.46 0V5.183M2.4 4.904v15.583c1.392-1.02 5.232-2.449 9.462 0V5.46M2.4 4.865c1.391-1.02 5.231-2.449 9.46 0m.279 0c1.391-1.02 5.231-2.449 9.46 0"
    })
  ]))
}