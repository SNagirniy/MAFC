export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing image ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
   
    const imageUrl = `https://drive.google.com/uc?export=view&id=${id}`;
  
    try {
      const response = await fetch(imageUrl);

      if (!response.ok) {
        throw new Error(`Google Drive responded with ${response.status}`);
      }
      const buffer = await response.arrayBuffer();
  
      return new Response(Buffer.from(buffer), {
        status: 200,
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200', // Кеш 1 день
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch image' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }