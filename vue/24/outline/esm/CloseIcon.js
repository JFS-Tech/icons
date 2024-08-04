import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 15",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("g", { filter: "url(#a)" }, [
      _createElementVNode("path", {
        fill: "#fff",
        d: "M3.95 1.218c.505-.19 1.507-.074 1.77.495.264.57.423 1.308.433 1.129-.02-.545.026-1.09.137-1.624A1.17 1.17 0 0 1 7.018.49c.313-.099.646-.12.97-.063.327.067.617.256.812.527.247.615.386 1.268.411 1.93a7 7 0 0 1 .285-1.666c.176-.249.433-.428.727-.506a2.9 2.9 0 0 1 1.055 0c.286.095.536.275.717.516.224.56.36 1.15.4 1.75 0 .148.075-.41.307-.78a1.057 1.057 0 1 1 2.003.675v2.383q-.057.928-.253 1.835a6.2 6.2 0 0 1-.76 1.508 7.6 7.6 0 0 0-1.254 1.909q-.117.521-.106 1.054a3.7 3.7 0 0 0 .127.97 6 6 0 0 1-1.297 0c-.411-.063-.917-.885-1.055-1.138a.4.4 0 0 0-.717 0c-.232.4-.748 1.128-1.054 1.17-.707.085-2.172 0-3.311 0 0 0 .2-1.054-.243-1.434s-.875-.823-1.202-1.118l-.875-.97a4.7 4.7 0 0 1-1.308-2.109c-.221-.991-.2-1.466 0-1.866.205-.331.524-.575.897-.686.31-.056.628-.034.928.064.207.086.385.229.516.41.243.328.327.486.222.127-.106-.358-.338-.622-.454-1.054a4.8 4.8 0 0 1-.4-1.614c.043-.5.392-.92.875-1.054"
      }),
      _createElementVNode("path", {
        "stroke-linejoin": "round",
        d: "M3.95 1.218c.505-.19 1.507-.074 1.77.495.264.57.423 1.308.433 1.129-.02-.545.026-1.09.137-1.624A1.17 1.17 0 0 1 7.018.49c.313-.099.646-.12.97-.063.327.067.617.256.812.527.247.615.386 1.268.411 1.93a7 7 0 0 1 .285-1.666c.176-.249.433-.428.727-.506a2.9 2.9 0 0 1 1.055 0c.286.095.536.275.717.516.224.56.36 1.15.4 1.75 0 .148.075-.41.307-.78a1.057 1.057 0 1 1 2.003.675v2.383q-.057.928-.253 1.835a6.2 6.2 0 0 1-.76 1.508 7.6 7.6 0 0 0-1.254 1.909q-.117.521-.106 1.054a3.7 3.7 0 0 0 .127.97 6 6 0 0 1-1.297 0c-.411-.063-.917-.885-1.055-1.138a.4.4 0 0 0-.717 0c-.232.4-.748 1.128-1.054 1.17-.707.085-2.172 0-3.311 0 0 0 .2-1.054-.243-1.434s-.875-.823-1.202-1.118l-.875-.97a4.7 4.7 0 0 1-1.308-2.109c-.221-.991-.2-1.466 0-1.866.205-.331.524-.575.897-.686.31-.056.628-.034.928.064.207.086.385.229.516.41.243.328.327.486.222.127-.106-.358-.338-.622-.454-1.054a4.8 4.8 0 0 1-.4-1.614c.021-.507.359-.945.843-1.096Z",
        "clip-rule": "evenodd"
      }),
      _createElementVNode("path", {
        fill: "#0A090B",
        d: "M12.122 9.312v-3.64a.395.395 0 0 0-.791 0v3.64a.395.395 0 0 0 .79 0M10.034 9.31l-.021-3.641a.395.395 0 0 0-.791.004l.02 3.642c.002.218.18.393.399.392a.395.395 0 0 0 .393-.396M7.113 5.678l.02 3.633c.002.22.18.397.399.396a.397.397 0 0 0 .393-.401l-.021-3.632a.397.397 0 0 0-.398-.396.397.397 0 0 0-.393.4"
      })
    ]),
    _createElementVNode("defs", null, [
      _createElementVNode("filter", {
        id: "a",
        width: "16",
        height: "14.895",
        x: "0",
        y: "0",
        "color-interpolation-filters": "sRGB",
        filterUnits: "userSpaceOnUse"
      }, [
        _createElementVNode("feFlood", {
          "flood-opacity": "0",
          result: "BackgroundImageFix"
        }),
        _createElementVNode("feColorMatrix", {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }),
        _createElementVNode("feOffset", { dy: "1" }),
        _createElementVNode("feGaussianBlur", { stdDeviation: ".4" }),
        _createElementVNode("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" }),
        _createElementVNode("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_101_5463"
        }),
        _createElementVNode("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_101_5463",
          result: "shape"
        })
      ])
    ])
  ]))
}