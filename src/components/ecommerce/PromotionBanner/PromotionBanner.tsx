// app/components/PromotionBanner.tsx
'use client';

import { Theme, ThemeClientProvider } from '@/lib/styledComponents/provider';
import { 
  BannerContainer, 
  BuyButton, 
  ProductDescription, 
  ProductImage, 
  ProductPrice, 
  ProductTitle, 
  ThemeToggle 
} from './PromotionBanner.styles';
import { useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type PromotionBannerProps = {
  product: Product;
  theme: Theme;
};

const PromotionBanner: React.FC<PromotionBannerProps> = ({ product, theme }) => {
  // Estado para el tema actual
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'christmas' ? 'halloween' : 'christmas'));
  };

  return (
    <ThemeClientProvider theme={currentTheme}>
      <BannerContainer>
        <ProductImage src={product.image} alt={product.title} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <BuyButton>Buy Now</BuyButton>
        {/* Botón para cambiar el tema */}
        <ThemeToggle onClick={toggleTheme}>
          {currentTheme === 'christmas' ? '🎄 Christmas Mode' : '🎃 Halloween Mode'}
        </ThemeToggle>
      </BannerContainer>
    </ThemeClientProvider>
  );
};

export default PromotionBanner;
