import * as React from "react";

function Dislike({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "none",
				"stroke-width":"1.5",
				"stroke-linecap":"round",
				"stroke-linejoin":"round",
				stroke: "currentColor",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title
			? /*#__PURE__*/ React.createElement(
					"title",
					{
						id: titleId,
					},
					title,
			  )
			: null,
		/*#__PURE__*/ React.createElement("path", {
			 d:
			 "M18 15H20C21.1045 15 22 14.1046 22 13V6C22 4.89543 21.1045 4 20 4H18C16.8954 4 16 4.89543 16 6V13C16 14.1046 16.8954 15 18 15Z" 

		}),
		/*#__PURE__*/ React.createElement("path", {
			d:
			"M8.12309 3H11.7889C12.5786 3 13.3506 3.23375 14.0077 3.6718L15.5547 4.70313C15.8329 4.8886 16 5.20083 16 5.53518V13.7344C16 13.9085 15.9546 14.0795 15.8682 14.2306L12 21H10.6713C8.67453 21 7.48355 18.7746 8.59115 17.1133L9.99998 15H4.56153C3.26039 15 2.30567 13.7772 2.62125 12.5149L4.24252 6.02986C4.68768 4.24919 6.28761 3 8.12309 3Z"

	   }),
	);
}

export default React.forwardRef(Dislike);

