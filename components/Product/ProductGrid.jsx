// src/components/Product/ProductGrid.js

import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, brands, units, onProductClick }) => {
  if (products.length === 0) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m0 0V9a2 2 0 012-2h2m0 0V6a2 2 0 012-2h2.09M15 13h2m-2 0V9a2 2 0 00-2-2H9" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">ບໍ່ພົບສິນຄ້າ</h3>
        <p className="text-gray-500">ກະລຸນາປັບຟິເຕີການຄົ້ນຫາ ຫຼື ເພີ່ມສິນຄ້າໃໝ່</p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-800">
          ລາຍການສິນຄ້າ
        </h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {products.length} ລາຍການ
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {products.map(product => {
          const brand = brands.find(b => b.id === product.brand_id);
          const unit = units.find(u => u.id === product.unit_id);
          
          return (
            <ProductCard
              key={`${product.id}-${product.brand_id}-${product.unit_id}`}
              product={product}
              brand={brand}
              unit={unit}
              onProductClick={onProductClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;