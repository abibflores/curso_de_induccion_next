// app/promotions/[id]/page.tsx

import PromotionBanner from "@/components/ecommerce/PromotionBanner/PromotionBanner";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    return null;
  }

  const product = await res.json();
  return product;
}

export default async function PromotionPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Cambiar entre el tema de Navidad y Halloween basado en el ID del producto
  const theme = parseInt(params.id) % 2 === 0 ? 'christmas' : 'halloween';

  return <PromotionBanner product={product} theme={theme} />;
}
