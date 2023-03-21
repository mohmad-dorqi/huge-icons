import * as React from "react";

function FileFavourite01({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				stroke: "none",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M3 18H2.25H3ZM3 6H3.75H3ZM7 2V1.25V2ZM17 2V1.25V2ZM21 6H20.25H21ZM21 12.3431H21.75H21ZM11.3431 22V21.25V22ZM7 22V22.75V22ZM19.8284 15.1716L19.2981 14.6412V14.6412L19.8284 15.1716ZM14.1716 20.8284L14.7019 21.3588L14.1716 20.8284ZM13 18H13.75H13ZM17 14V13.25V14ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM13.4142 10.5858L12.8839 10.0555L13.4142 10.5858ZM10.5858 10.5858L11.1161 10.0555H11.1161L10.5858 10.5858ZM9.53033 8.46967C9.23744 8.17678 8.76256 8.17678 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L9.53033 8.46967ZM11.25 11C11.25 11.4142 11.5858 11.75 12 11.75C12.4142 11.75 12.75 11.4142 12.75 11H11.25ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6H12.75ZM3.75 18L3.75 6H2.25L2.25 18H3.75ZM7 2.75L17 2.75V1.25L7 1.25V2.75ZM20.25 6V12.3431H21.75V6H20.25ZM11.3431 21.25H7V22.75H11.3431V21.25ZM19.2981 14.6412L13.6412 20.2981L14.7019 21.3588L20.3588 15.7019L19.2981 14.6412ZM11.3431 22.75C12.6029 22.75 13.8111 22.2496 14.7019 21.3588L13.6412 20.2981C13.0317 20.9076 12.2051 21.25 11.3431 21.25V22.75ZM20.25 12.3431C20.25 13.2051 19.9076 14.0318 19.2981 14.6412L20.3588 15.7019C21.2496 14.8111 21.75 13.6029 21.75 12.3431H20.25ZM3.75 6C3.75 4.20507 5.20508 2.75 7 2.75V1.25C4.37665 1.25 2.25 3.37665 2.25 6H3.75ZM2.25 18C2.25 20.6234 4.37665 22.75 7 22.75V21.25C5.20507 21.25 3.75 19.7949 3.75 18H2.25ZM17 2.75C18.7949 2.75 20.25 4.20508 20.25 6H21.75C21.75 3.37665 19.6234 1.25 17 1.25V2.75ZM13.75 22L13.75 18H12.25L12.25 22H13.75ZM17 14.75L21 14.75V13.25L17 13.25V14.75ZM13.75 18C13.75 16.2051 15.2051 14.75 17 14.75V13.25C14.3766 13.25 12.25 15.3766 12.25 18H13.75ZM14.4697 8.46967L12.8839 10.0555L13.9445 11.1161L15.5303 9.53033L14.4697 8.46967ZM11.1161 10.0555L9.53033 8.46967L8.46967 9.53033L10.0555 11.1161L11.1161 10.0555ZM12.75 11V6H11.25V11H12.75ZM12.8839 10.0555C12.3957 10.5436 11.6043 10.5436 11.1161 10.0555L10.0555 11.1161C11.1294 12.1901 12.8706 12.1901 13.9445 11.1161L12.8839 10.0555Z",
		}),
	);
}

const ForwardRef = React.forwardRef(FileFavourite01);
export default ForwardRef;
