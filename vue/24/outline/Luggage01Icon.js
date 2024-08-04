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
      d: "M8.917 19.364a1 1 0 0 0-2 0zm-2 1.636a1 1 0 1 0 2 0zm8.75 0a1 1 0 1 0 2 0zm-5-14.727a1 1 0 1 0-2 0zm-2 9.818a1 1 0 1 0 2 0zm6.666-9.818a1 1 0 1 0-2 0zm-2 9.818a1 1 0 1 0 2 0zm-6.416 3.273V21h2v-1.636zm8.75 0V21h2v-1.636zm-7-13.091v9.818h2V6.273zm4.666 0v9.818h2V6.273zM7.333 4h9.334V2H7.333zM18 5.182v12h2v-12zm-1.333 13.182H7.333v2h9.334zM6 17.182v-12H4v12zm1.333 1.182c-.8 0-1.333-.592-1.333-1.182H4c0 1.82 1.557 3.182 3.333 3.182zM18 17.182c0 .59-.533 1.182-1.333 1.182v2C18.443 20.364 20 19 20 17.182zM16.667 4c.8 0 1.333.591 1.333 1.182h2C20 3.362 18.443 2 16.667 2zM7.333 2C5.557 2 4 3.362 4 5.182h2C6 4.592 6.533 4 7.333 4z"
    })
  ]))
}