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
      d: "M9 21v-6.847c0-.63.537-1.141 1.2-1.141h3.6c.663 0 1.2.51 1.2 1.14V21M11.305 3.211l-7.8 5.275c-.317.214-.505.56-.505.93v9.872C3 20.234 3.806 21 4.8 21h14.4c.994 0 1.8-.766 1.8-1.712V9.416c0-.37-.188-.716-.505-.93l-7.8-5.275a1.25 1.25 0 0 0-1.39 0Z"
    })
  ]))
}