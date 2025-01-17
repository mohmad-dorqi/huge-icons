import * as React from "react";

function ClockRectangle({ size, title, titleId, ...props }, svgRef) {
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
				"strokeWidth":"1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
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
			 d:"M12 12H11.25C11.25 12.3228 11.4566 12.6094 11.7628 12.7115L12 12ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM14.7628 13.7115C15.1558 13.8425 15.5805 13.6301 15.7115 13.2372C15.8425 12.8442 15.6301 12.4195 15.2372 12.2885L14.7628 13.7115ZM12.75 12V7H11.25V12H12.75ZM11.7628 12.7115L14.7628 13.7115L15.2372 12.2885L12.2372 11.2885L11.7628 12.7115ZM6 2.75H18V1.25H6V2.75ZM21.25 6V18H22.75V6H21.25ZM18 21.25H6V22.75H18V21.25ZM2.75 18V6H1.25V18H2.75ZM6 21.25C4.20507 21.25 2.75 19.7949 2.75 18H1.25C1.25 20.6234 3.37665 22.75 6 22.75V21.25ZM21.25 18C21.25 19.7949 19.7949 21.25 18 21.25V22.75C20.6234 22.75 22.75 20.6234 22.75 18H21.25ZM18 2.75C19.7949 2.75 21.25 4.20507 21.25 6H22.75C22.75 3.37665 20.6234 1.25 18 1.25V2.75ZM6 1.25C3.37665 1.25 1.25 3.37665 1.25 6H2.75C2.75 4.20507 4.20507 2.75 6 2.75V1.25Z"
			 
		}),
	);
}

export default  React.forwardRef(ClockRectangle);

