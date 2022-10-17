import type { HandleServerError } from '@sveltejs/kit';

const handleError: HandleServerError = ({ error }) => {

	// This error is always an empty object
	console.log(`Error: ${JSON.stringify(error)}`);
	
	return {
		message: 'Something went wrong',
		code: 'oops'
	};
};

export { handleError };
