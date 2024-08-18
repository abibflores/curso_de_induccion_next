// app/api/[slug]/route.js
export async function GET(request: Request, { params } : { params: { slug: string } }): Promise<Response> {
  const { slug } = params;
  return new Response(JSON.stringify({ message: `You requested ${slug}` }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
