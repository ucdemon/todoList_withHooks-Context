import React from "react";
import Svg, {Path} from 'react-native-svg';

const SVG = ({
	             style = {},
	             fill = "#555555",
	             width = "100%",
	             height = "100%",
	             viewBox = "0 0 20 19",
	             opacity = '0.4'
             }) => (
	<Svg
		width={width}
		style={style}
		height={height}
		viewBox={viewBox}
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M19.4453 17.9609L14.0078 12.5C14.5547 11.8438 14.9766 11.1016 15.2734 10.2734C15.5859 9.44531 15.7422 8.57031 15.7422 7.64844C15.7422 6.60156 15.5391 5.61719 15.1328 4.69531C14.7422 3.77344 14.2031 2.96875 13.5156 2.28125C12.8281 1.59375 12.0234 1.05469 11.1016 0.664062C10.1797 0.257812 9.19531 0.0546875 8.14844 0.0546875C7.10156 0.0546875 6.11719 0.257812 5.19531 0.664062C4.27344 1.05469 3.46875 1.59375 2.78125 2.28125C2.09375 2.96875 1.54688 3.77344 1.14062 4.69531C0.75 5.61719 0.554688 6.60156 0.554688 7.64844C0.554688 8.69531 0.75 9.67969 1.14062 10.6016C1.54688 11.5234 2.09375 12.3281 2.78125 13.0156C3.46875 13.7031 4.27344 14.25 5.19531 14.6562C6.11719 15.0469 7.10156 15.2422 8.14844 15.2422C9.07031 15.2422 9.94531 15.0938 10.7734 14.7969C11.6016 14.4844 12.3438 14.0547 13 13.5078L18.4609 18.9453L19.4453 17.9609ZM1.35156 7.64844C1.35156 6.71094 1.53125 5.83594 1.89062 5.02344C2.25 4.19531 2.73438 3.47656 3.34375 2.86719C3.96875 2.24219 4.6875 1.75 5.5 1.39062C6.32812 1.03125 7.21094 0.851562 8.14844 0.851562C9.08594 0.851562 9.96875 1.03125 10.7969 1.39062C11.625 1.75 12.3438 2.24219 12.9531 2.86719C13.5781 3.47656 14.0625 4.19531 14.4062 5.02344C14.7656 5.83594 14.9453 6.71094 14.9453 7.64844C14.9453 8.58594 14.7656 9.46875 14.4062 10.2969C14.0625 11.125 13.5781 11.8516 12.9531 12.4766C12.3438 13.0859 11.625 13.5703 10.7969 13.9297C9.96875 14.2734 9.08594 14.4453 8.14844 14.4453C7.21094 14.4453 6.32812 14.2734 5.5 13.9297C4.6875 13.5703 3.96875 13.0859 3.34375 12.4766C2.73438 11.8516 2.25 11.125 1.89062 10.2969C1.53125 9.46875 1.35156 8.58594 1.35156 7.64844Z"
			fill={fill}/>
	</Svg>
);

export default SVG;
