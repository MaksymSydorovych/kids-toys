export async function fetchApi(asyncFunction, url) {
	try {
		const response = await fetch(url);
		const JSON = await response.json();
		const result = JSON.data;
		asyncFunction(result);
	} catch (error) {}
}
