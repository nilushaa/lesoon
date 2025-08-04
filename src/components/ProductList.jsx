import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products = [] }) {
  // Istalgan category bo'yicha filtrlash mumkin yoki filtirsiz ham qoldiring
  // Agar filtr kerak bo'lsa, masalan:
  const filteredProducts = products.filter(p =>
    ['mens-shirts', 'womens-dresses', 'tops'].includes(p.category)
  );

  if (filteredProducts.length === 0) {
    return <p className="text-center mt-10 text-lg">Mahsulotlar topilmadi</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
