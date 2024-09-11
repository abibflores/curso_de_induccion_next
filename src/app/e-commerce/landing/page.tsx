import HeroProduct from "@/components/ecommerce/HeroProduct/HeroProduct";
import OfferBanner from "@/components/ecommerce/OfferBanner/OfferBanner";
import PopularJewelry from "@/components/ecommerce/PopularJewelry/PopularJewelry";
import Testimonials from "@/components/ecommerce/Testimonials/Testimonials";
import TopSellingProducts from "@/components/ecommerce/TopSellingProducts/TopSellingProducts";

export async function generateMetadata() {

    return {
        title: `Landing - E-commerce`,
        description: `Welcome to the E-commerce landing page`
    }
}

export default async function ProductPage() {

  return (
    <div>
      <HeroProduct />
      <TopSellingProducts />
      <OfferBanner />
      <PopularJewelry />
      <Testimonials />
    </div>
  );
}