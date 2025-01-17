import * as React from "react";

function FolderFavourite({ size, title, titleId, ...props }, svgRef) {
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
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M22 17V10C22 7.79086 20.2091 6 18 6H15.3333C14.4679 6 13.6257 5.71929 12.9333 5.2L11.0667 3.8C10.3743 3.28071 9.53215 3 8.66667 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17Z",
		}),
		/*#__PURE__*/ React.createElement("path", {
			d: "M9.36501 13.7063L11.2191 16.0239C11.6195 16.5243 12.3805 16.5243 12.7809 16.0239L14.635 13.7063C14.8713 13.4109 15 13.0439 15 12.6657V12.591C15 11.7123 14.2877 11 13.409 11C12.9871 11 12.5824 11.1676 12.284 11.466L12 11.75L11.716 11.466C11.4176 11.1676 11.0129 11 10.591 11C9.71231 11 9 11.7123 9 12.591V12.6657C9 13.0439 9.12873 13.4109 9.36501 13.7063Z",
		}),
	);
}

export default React.forwardRef(FolderFavourite);
