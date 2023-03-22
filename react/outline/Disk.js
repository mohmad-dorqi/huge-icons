import * as React from "react";

function Disk({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"stroke-width":"1.5",
				"stroke-linecap":"round",
				"stroke-linejoin":"round",
				stroke: "#28303F",
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
			 "M17.616 3.17157L18.1463 2.64124V2.64124L17.616 3.17157ZM20.8284 6.38398L20.2981 6.91431L20.8284 6.38398ZM6.25 22V22.75H7.75V22H6.25ZM16.25 22V22.75H17.75V22H16.25ZM15 7.75C15.4142 7.75 15.75 7.41421 15.75 7C15.75 6.58579 15.4142 6.25 15 6.25V7.75ZM9 6.25C8.58579 6.25 8.25 6.58579 8.25 7C8.25 7.41421 8.58579 7.75 9 7.75V6.25ZM21.25 9.21241V18H22.75V9.21241H21.25ZM18 21.25H6V22.75H18V21.25ZM2.75 18V6H1.25V18H2.75ZM6 2.75H14.7876V1.25H6V2.75ZM17.0857 3.7019L20.2981 6.91431L21.3588 5.85365L18.1463 2.64124L17.0857 3.7019ZM14.7876 2.75C15.6495 2.75 16.4762 3.09241 17.0857 3.7019L18.1463 2.64124C17.2556 1.75045 16.0474 1.25 14.7876 1.25V2.75ZM6 21.25C4.20507 21.25 2.75 19.7949 2.75 18H1.25C1.25 20.6234 3.37665 22.75 6 22.75V21.25ZM21.25 18C21.25 19.7949 19.7949 21.25 18 21.25V22.75C20.6234 22.75 22.75 20.6234 22.75 18H21.25ZM22.75 9.21241C22.75 7.95263 22.2496 6.74445 21.3588 5.85365L20.2981 6.91431C20.9076 7.52381 21.25 8.35046 21.25 9.21241H22.75ZM2.75 6C2.75 4.20507 4.20508 2.75 6 2.75V1.25C3.37665 1.25 1.25 3.37665 1.25 6H2.75ZM7.75 22V16H6.25V22H7.75ZM9 14.75H15V13.25H9V14.75ZM16.25 16V22H17.75V16H16.25ZM15 14.75C15.6904 14.75 16.25 15.3096 16.25 16H17.75C17.75 14.4812 16.5188 13.25 15 13.25V14.75ZM7.75 16C7.75 15.3096 8.30964 14.75 9 14.75V13.25C7.48122 13.25 6.25 14.4812 6.25 16H7.75ZM15 6.25L9 6.25V7.75L15 7.75V6.25Z"

		}),
	);
}

export default React.forwardRef(Disk);
