export async function getArticles() {
  const response = await fetch(`/api/articles`);
  if (!response.ok) {
    throw new Error(response);
  }
  const results = await response.json();
  return results;
}
