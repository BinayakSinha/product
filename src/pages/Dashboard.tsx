import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import type { Product } from '../types';
import { Spinner } from '../components/atoms/Spinner';
import { ProductCard } from '../components/molecules/ProductCard';

export const Dashboard: React.FC = () => {
  // Pass the table name to our custom hook
  const { data: products, loading, error } = useFetchData<Product>('products');

  if (loading) return <Spinner />;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Dashboard Overview</h1>
      <p>Loaded {products.length} items from the database.</p>
      
      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};