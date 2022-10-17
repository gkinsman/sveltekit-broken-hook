import type { HandleServerError } from '@sveltejs/kit';

const handleError: HandleServerError = ({ error }) => {
	console.log(`Error: ${JSON.stringify(error)}`);
	return {
		message: 'Something went wrong',
		code: 'oops'
	};
};

export { handleError };
