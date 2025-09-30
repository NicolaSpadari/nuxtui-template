export default defineEventHandler(async (event) => {
	const { text } = getQuery(event);

	return {
		value: `Hello ${text}!`
	};
});
