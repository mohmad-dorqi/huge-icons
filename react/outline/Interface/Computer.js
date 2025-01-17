import * as React from "react";

function Computer({ size, title, titleId, ...props }, svgRef) {
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
			 d:"M2 13.25H1.25V14.75H2V13.25ZM22 14.75H22.75V13.25H22V14.75ZM9 21.25C8.58579 21.25 8.25 21.5858 8.25 22C8.25 22.4142 8.58579 22.75 9 22.75V21.25ZM15 22.75C15.4142 22.75 15.75 22.4142 15.75 22C15.75 21.5858 15.4142 21.25 15 21.25V22.75ZM12.75 18C12.75 17.5858 12.4142 17.25 12 17.25C11.5858 17.25 11.25 17.5858 11.25 18H12.75ZM5 2.75H19V1.25H5V2.75ZM21.25 5V15H22.75V5H21.25ZM19 17.25H5V18.75H19V17.25ZM2.75 15V5H1.25V15H2.75ZM5 17.25C3.75736 17.25 2.75 16.2426 2.75 15H1.25C1.25 17.0711 2.92893 18.75 5 18.75V17.25ZM21.25 15C21.25 16.2426 20.2426 17.25 19 17.25V18.75C21.0711 18.75 22.75 17.0711 22.75 15H21.25ZM19 2.75C20.2426 2.75 21.25 3.75736 21.25 5H22.75C22.75 2.92893 21.0711 1.25 19 1.25V2.75ZM5 1.25C2.92893 1.25 1.25 2.92893 1.25 5H2.75C2.75 3.75736 3.75736 2.75 5 2.75V1.25ZM2 14.75H22V13.25H2V14.75ZM9 22.75H12V21.25H9V22.75ZM12 22.75H15V21.25H12V22.75ZM12.75 22V18H11.25V22H12.75Z" 
		}),
	);
}

export default React.forwardRef(Computer);

