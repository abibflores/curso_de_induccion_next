// app/api/og/[id]/route.tsx
import MiniCardImage from '@/components/ecommerce/MiniCard/Minicard';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge'; // Usar Edge runtime para mejorar latencia

// Función para hacer la petición a la API real
const fetchUser = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/users/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }

  return res.json();
};

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  console.log(id, "id");

  try {
    // Petición a la API de Fake Store para obtener los datos del usuario
    const user = await fetchUser(id);

    // Generamos la imagen utilizando ImageResponse con MiniCardImage
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
          }}
        >
          {/* Pasamos los datos del usuario real al componente MiniCardImage */}
          <MiniCardImage user={user} />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response('Failed to generate image', { status: 500 });
  }
}
