import type { APIRoute } from "astro";
import users from "../../data/users.json";

export const prerender = true;

export const GET: APIRoute = async () => {
  return Response.json(users);
};

export const POST: APIRoute = async ({ request }) => {
  const { slug } = await request.json();

  if (!slug) return Response.json(users);

  const userData = users.find((user) => user.username === slug);

  if (!userData) return Response.json({ message: "User data not found" });

  return Response.json(userData);
};
