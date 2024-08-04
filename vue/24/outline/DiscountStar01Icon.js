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
      d: "m8.4 15.6 7.2-7.2m-6.646.55-.014-.015m6.124 6.188-.014-.015M7.923 4.388l-1.018.061a2.62 2.62 0 0 0-2.456 2.456l-.062 1.018A2.62 2.62 0 0 1 3.734 9.5l-.676.764a2.62 2.62 0 0 0 0 3.472l.676.764c.388.438.618.993.653 1.577l.062 1.018a2.62 2.62 0 0 0 2.456 2.456l1.018.062a2.62 2.62 0 0 1 1.577.653l.764.676a2.62 2.62 0 0 0 3.472 0l.764-.676a2.62 2.62 0 0 1 1.577-.653l1.018-.062a2.62 2.62 0 0 0 2.456-2.456l.062-1.018a2.62 2.62 0 0 1 .653-1.577l.676-.764a2.62 2.62 0 0 0 0-3.472l-.676-.764a2.62 2.62 0 0 1-.653-1.577l-.062-1.018a2.62 2.62 0 0 0-2.456-2.456l-1.018-.062a2.62 2.62 0 0 1-1.577-.653l-.764-.676a2.62 2.62 0 0 0-3.472 0l-.764.676a2.62 2.62 0 0 1-1.577.653Z"
    })
  ]))
}