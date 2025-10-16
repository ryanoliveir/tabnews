test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const body = await response.json();

  const { updated_at } = body;

  expect(response.status).toBe(200);
  expect(updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(updated_at).toISOString();
  expect(updated_at).toEqual(parsedUpdatedAt);
  expect(body.dependencies.database.version).toEqual("16.0");
  expect(body.dependencies.database.max_connections).toBeDefined();
  expect(body.dependencies.database.max_connections).toEqual(100);
  expect(body.dependencies.database.opened_connections).toEqual(1);
});
