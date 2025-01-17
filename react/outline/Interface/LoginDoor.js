import * as React from "react";

function LoginDoor({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "none",
				"strokeWidth":"1.5",
				"strokeLinecap":"round",
				"strokeLinejoin":"round",
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
			 "M15 10.2664L13.7071 11.5593C13.3166 11.9498 13.3166 12.5829 13.7071 12.9735L15 14.2664M14 12.2664L20 12.2664M4 17.2663V7.26633M16 17.2663C16 18.3709 15.1046 19.2663 14 19.2663H10M16 7.26633C16 6.16176 15.1046 5.26633 14 5.26633H10M4.8906 19.8601L6.8906 21.1934C8.21971 22.0795 10 21.1267 10 19.5293V5.00336C10 3.40597 8.21971 2.45319 6.8906 3.33926L4.8906 4.6726C4.3342 5.04353 4 5.66799 4 6.3367V18.196C4 18.8647 4.3342 19.4891 4.8906 19.8601Z" 

		}),
	);
}

export default React.forwardRef(LoginDoor);

