import initialize from "./initialize.js";
import comment from "./comment.js";
import comment_with_images from "./comment_with_images.js";

export {initialize, comment, comment_with_images};

export const options = {
	scenarios: {
		initialize: {
			executor: "shared-iterations",
			vus: 1,
			iterations: 1,
			exec: "initialize",
			maxDuration: "10s",
		},
		comment: {
			executor: "constant-vus",
			vus: 4,
			duration: "30s",
			exec: "comment",
			startTime: "12s",
		},
		comment_with_images: {
			executor: "constant-vus",
			vus: 2,
			duration: "30s",
			exec: "comment_with_images",
			startTime: "12s",
		},
	},
};

export default function() {}
