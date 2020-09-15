export async function listSpots() {
  const response = await fetch(`/api/spots`);
  return response.json();
}
