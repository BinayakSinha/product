import React from 'react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '16px', 
      borderRadius: '8px',
      marginBottom: '10px'
    }}>
      <h3 style={{ margin: '0 0 8px 0' }}>{product.name}</h3>
      <p style={{ margin: '0 0 12px 0', color: '#555' }}>{product.description}</p>
      <strong>${product.price.toFixed(2)}</strong>
    </div>
  );
};