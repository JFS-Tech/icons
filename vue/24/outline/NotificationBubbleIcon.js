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
      d: "M13.105 4.051Q12.607 4 12.093 4C7.623 4 4 6.95 4 10.588s3.623 6.589 8.093 6.589c.699 0 1.377-.073 2.023-.208L17.151 20v-4.235C18.514 14.843 19.61 13.459 20 12m0-4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    })
  ]))
}