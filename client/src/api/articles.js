export async function getArticles() {
  const response = await fetch(`/api/articles`);
  if (!response.ok) {
    throw new Error(response);
  }
  const results = await response.json();
  return results;
}

export async function getArticle(id) {
  const response = await fetch(`/api/articles/${id}`);
  if (!response.ok) {
    throw new Error(response);
  }
  const results = await response.json();
  return results;
}
