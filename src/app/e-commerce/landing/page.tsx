import HeroProduct from "@/components/ecommerce/HeroProduct/HeroProduct";
import OfferBanner from "@/components/ecommerce/OfferBanner/OfferBanner";
import PopularJewelry from "@/components/ecommerce/PopularJewelry/PopularJewelry";
import Testimonials from "@/components/ecommerce/Testimonials/Testimonials";
import TopSellingProducts from "@/components/ecommerce/TopSellingProducts/TopSellingProducts";
import TopSellingProductsSkeleton from "@/components/ecommerce/TopSellingProductsSkeleton/TopSellingProductsSkeleton";
import { Suspense } from "react";

export async function generateMetadata() {

    return {
        title: `Landing - E-commerce`,
        description: `Welcome to the E-commerce landing page`
    }
}

export default async function ProductPage() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>} >
        <HeroProduct />
      </Suspense>
      <Suspense fallback={<TopSellingProductsSkeleton />} >
        <TopSellingProducts />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>} >
        <OfferBanner />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>} >
        <PopularJewelry />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>} >
        <Testimonials />
      </Suspense>
    </div>
  );
}