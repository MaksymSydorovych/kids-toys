export async function fetchApi(asyncFunction, url) {
  try {
    const response = await fetch(url);
    const JSON = await response.json();
    const result = JSON;

    asyncFunction(result);
  } catch (error) {}
}
