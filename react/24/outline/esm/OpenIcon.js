import * as React from "react";
function OpenIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 18 18",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    filter: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M5.247 8.438c-.101-.377-.203-.865-.417-1.577s-.346-.875-.478-1.251c-.132-.377-.305-.733-.508-1.2a12 12 0 0 1-.468-1.465c-.085-.42.02-.855.284-1.19a1.43 1.43 0 0 1 1.384-.357c.385.169.711.449.936.804.3.48.545.992.732 1.526.287.732.495 1.492.62 2.268l.092.458v-1.18c0-1.017-.06-1.851 0-2.99 0-.133.061-.6.082-.733A1.21 1.21 0 0 1 8.187.534a1.74 1.74 0 0 1 1.424 0c.406.181.676.574.702 1.017 0 .112.092 1.017.092 1.13v3.702c.024-1.342.14-2.681.345-4.008.12-.416.413-.76.804-.946a1.39 1.39 0 0 1 1.424.244c.293.322.466.735.488 1.17v3.611c.092-.285.194-.55.275-.753s.244-.62.366-.875q.187-.363.417-.701c.16-.259.399-.459.682-.57a1.017 1.017 0 0 1 1.322.6c.06.37.06.749 0 1.119a9.5 9.5 0 0 1-.356 1.678c-.132.458-.274 1.252-.346 1.628s-.234 1.404-.366 1.851a6 6 0 0 1-.804 1.496 7.4 7.4 0 0 0-1.21 1.84c-.076.334-.11.676-.102 1.018q-.001.476.122.936a6 6 0 0 1-1.25 0c-.397-.061-.886-.855-1.018-1.099a.387.387 0 0 0-.692 0c-.234.387-.722 1.089-1.068 1.13-.681.08-2.085 0-3.194 0 0 0 .193-1.018-.234-1.384s-.844-.794-1.16-1.078l-.844-.936c-.284-.366-.64-1.109-1.261-2.035-.356-.508-1.017-1.108-1.302-1.607A1.78 1.78 0 0 1 1.25 7.37a1.23 1.23 0 0 1 1.393-.874c.472.03.918.225 1.262.549q.409.354.763.763c.162.193.203.285.386.519s.305.468.214.122"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5.247 8.438c-.101-.377-.203-.865-.417-1.577s-.346-.875-.478-1.251c-.132-.377-.305-.733-.508-1.2a12 12 0 0 1-.468-1.465c-.085-.42.02-.855.284-1.19a1.43 1.43 0 0 1 1.384-.357c.385.169.711.449.936.804.3.48.545.992.732 1.526.287.732.495 1.492.62 2.268l.092.458v-1.18c0-1.017-.06-1.851 0-2.99 0-.133.061-.6.082-.733A1.21 1.21 0 0 1 8.187.534a1.74 1.74 0 0 1 1.424 0c.406.181.676.574.702 1.017 0 .112.092 1.017.092 1.13v3.702c.024-1.342.14-2.681.345-4.008.12-.416.413-.76.804-.946a1.39 1.39 0 0 1 1.424.244c.293.322.466.735.488 1.17v3.611c.092-.285.194-.55.275-.753s.244-.62.366-.875q.187-.363.417-.701c.16-.259.399-.459.682-.57a1.017 1.017 0 0 1 1.322.6c.06.37.06.749 0 1.119a9.5 9.5 0 0 1-.356 1.678c-.132.458-.274 1.252-.346 1.628s-.234 1.404-.366 1.851a6 6 0 0 1-.804 1.496 7.4 7.4 0 0 0-1.21 1.84c-.076.334-.11.676-.102 1.018q-.001.476.122.936a6 6 0 0 1-1.25 0c-.397-.061-.886-.855-1.018-1.099a.387.387 0 0 0-.692 0c-.234.387-.722 1.089-1.068 1.13-.681.08-2.085 0-3.194 0 0 0 .193-1.018-.234-1.384s-.844-.794-1.16-1.078l-.844-.936c-.284-.366-.64-1.109-1.261-2.035-.356-.508-1.017-1.108-1.302-1.607A1.78 1.78 0 0 1 1.25 7.37a1.23 1.23 0 0 1 1.393-.874c.472.03.918.225 1.262.549q.409.354.763.763c.162.193.203.285.386.519s.305.468.214.122"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0A090B",
    d: "M12.744 12.67V9.16a.381.381 0 0 0-.763 0v3.511a.381.381 0 0 0 .763 0M10.72 12.67l-.01-3.513a.38.38 0 0 0-.383-.379.38.38 0 0 0-.38.381l.01 3.513a.38.38 0 0 0 .763-.002M7.918 9.16l.02 3.503a.383.383 0 0 0 .384.382.383.383 0 0 0 .379-.386l-.02-3.504a.383.383 0 0 0-.384-.382.383.383 0 0 0-.38.387"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "a",
    width: 17.769,
    height: 18,
    x: 0,
    y: 0,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: 0.4
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_101_5453"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_101_5453",
    result: "shape"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(OpenIcon);
export default ForwardRef;