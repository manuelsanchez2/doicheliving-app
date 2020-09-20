export async function listSpots() {
  const response = await fetch(`/api/spots`);
  return response.json();
}

export async function createSpot(spot) {
  const response = await fetch(`/api/spots`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(spot),
  });
  return response.json();
}