export async function GET(request: Request) {
  return Response.json({ message: "Hello" }, { status: 202 });
}
