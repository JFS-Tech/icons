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
      d: "M6.6 8.8v-.914C6.6 4.846 9.01 2.4 12 2.4s5.4 2.447 5.4 5.486V8.8m-10.8 0c-.99 0-1.8.823-1.8 1.829v9.142c0 1.006.81 1.829 1.8 1.829h10.8c.99 0 1.8-.823 1.8-1.829V10.63c0-1.006-.81-1.83-1.8-1.83m-10.8 0h10.8M12 16.2v-2.4"
    })
  ]))
}