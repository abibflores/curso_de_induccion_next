// app/components/PromotionBanner.styles.ts
import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
`;

export const BuyButton = styled.button`
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
  }
`;

// Nuevo componente para el botón de toggle
export const ThemeToggle = styled.button`
  margin-top: 20px;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
  }
`;
