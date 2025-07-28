// src/components/Product/ProductCard.js

import React from 'react';
import { formatPrice } from '../../utils/formatters';

const ProductCard = ({ product, brand, unit, onProductClick }) => {
  return (
    <div 
      onClick={() => onProductClick(product)}
      className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg hover:border-blue-300 transition-all duration-200 transform hover:scale-105"
    >
      {/* ຮູບສິນຄ້າ */}
      <div className="text-center mb-3">
        <div className="text-4xl mb-2 bg-gray-50 rounded-lg p-4 inline-block">
          {product.image}
        </div>
      </div>

      {/* ຂໍ້ມູນສິນຄ້າ */}
      <div className="text-center space-y-1">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2">
          {product.name}
        </h3>
        
        <div className="space-y-0.5">
          <p className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded inline-block">
            {brand?.name || 'ບໍ່ມີຍີ່ຫໍ້'}
          </p>
          <p className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block ml-1">
            {unit?.name || 'ບໍ່ມີຫົວໜ່ວຍ'}
          </p>
        </div>
      </div>
      
      {/* ລາຄາ */}
      <div className="mt-3 text-center">
        <p className="text-lg font-bold text-green-600 mb-3">
          {formatPrice(product.price)} ກີບ
        </p>
        
        {/* ປຸ່ມເພີ່ມ */}
        <button className="w-full bg-blue-500 text-white py-2.5 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm flex items-center justify-center gap-2">
          <span>🛒</span>
          ເລືອກສິນຄ້າ
        </button>
      </div>
    </div>
  );
};

export default ProductCard;