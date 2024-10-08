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
      d: "M5.73 6.259a7.46 7.46 0 0 0-1.13 3.944c0 .277.057 2.053.057 2.053 0 1.336-.36 2.65-1.05 3.812m12.6-5.865c-.005-1.81-1.2-3.944-3.682-3.944-2.481 0-3.934 2.036-3.938 3.841v1.093c0 2.6-.3 5.088-1.908 7.167m2.857 3.24a16.03 16.03 0 0 0 3.011-9.335v-2.203m1.748 10.523c.712-.785 1.912-4.385 1.912-6.785m3.22 4.684c.65-2.122.966-6.232.966-8.443 0-4.21-3.507-7.628-7.846-7.641h-.022c-1.38 0-2.738.354-3.938 1.024"
    })
  ]))
}