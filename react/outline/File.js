import * as React from "react";

function File({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linejoin": "round",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M13 22L13 18C13 15.7909 14.7909 14 17 14L21 14M3 18L3 6C3 3.79086 4.79086 2 7 2L17 2C19.2091 2 21 3.79086 21 6V12.3431C21 13.404 20.5786 14.4214 19.8284 15.1716L14.1716 20.8284C13.4214 21.5786 12.404 22 11.3431 22H7C4.79086 22 3 20.2091 3 18Z",
		}),
	);
}

export default React.forwardRef(File);
