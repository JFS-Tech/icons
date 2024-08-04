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
      d: "m15.6 12.81-.546-.839-.014.01-.014.009zm0-1.377-.594.805.045.033.048.028zm-5.516-4.061.593-.805-.028-.021-.03-.019zm-1.156.606 1-.002v-.018zm.023 7.978-1 .003v.028l.002.029zm1.198.665.485.875.046-.025.043-.03zM6 3.4h12v-2H6zM20.6 6v12h2V6zM18 20.6H6v2h12zM3.4 18V6h-2v12zM6 20.6A2.6 2.6 0 0 1 3.4 18h-2A4.6 4.6 0 0 0 6 22.6zM20.6 18a2.6 2.6 0 0 1-2.6 2.6v2a4.6 4.6 0 0 0 4.6-4.6zM18 3.4A2.6 2.6 0 0 1 20.6 6h2A4.6 4.6 0 0 0 18 1.4zm-12-2A4.6 4.6 0 0 0 1.4 6h2A2.6 2.6 0 0 1 6 3.4zm10.146 12.247c.434-.282.983-.787.982-1.547 0-.783-.578-1.273-1.027-1.533L15.099 12.3c.105.06.124.092.11.073a.45.45 0 0 1-.082-.27c0-.143.056-.228.065-.24.004-.005-.027.037-.138.11zm.047-3.02-5.515-4.06-1.186 1.61 5.515 4.061zm-5.573-4.1c-.47-.298-1.131-.469-1.756-.177-.68.318-.948 1.002-.935 1.649l2-.04c-.002-.06.01-.04-.02.018a.43.43 0 0 1-.2.185c-.185.087-.26-.01-.16.055zM7.928 7.981l.023 7.978 2-.006-.023-7.977zm.025 8.035c.031.534.217 1.246.888 1.604.66.353 1.347.123 1.793-.124l-.969-1.75c-.099.055-.138.058-.122.056a.4.4 0 0 1 .24.054.43.43 0 0 1 .185.179c.008.017-.012-.017-.019-.138zm2.77 1.425 5.45-3.812-1.147-1.64-5.45 3.813z"
    })
  ]))
}