// src/components/Product/ProductPopup.js

import React, { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

const ProductPopup = ({ 
  product, 
  brand, 
  unit, 
  isOpen, 
  onClose, 
  onAddToBill 
}) => {
  const [quantity, setQuantity] = useState(1);

  // Reset quantity when popup opens
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const totalPrice = product.price * quantity;

  const handleQuantityChange = (newQuantity) => {
    const qty = Math.max(1, newQuantity);
    setQuantity(qty);
  };

  const handleAddToBill = () => {
    onAddToBill({
      ...product,
      brand: brand?.name,
      unit: unit?.name,
      quantity,
      totalPrice
    });
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'Enter') {
      handleAddToBill();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">ເລືອກສິນຄ້າ</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="text-5xl bg-gray-50 rounded-lg p-4 flex-shrink-0">
              {product.image}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">ຍີ່ຫໍ້:</span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">
                    {brand?.name || 'ບໍ່ມີຍີ່ຫໍ້'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">ຫົວໜ່ວຍ:</span>
                  <span className="bg-blue-100 px-2 py-1 rounded text-blue-700">
                    {unit?.name || 'ບໍ່ມີຫົວໜ່ວຍ'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">ລາຄາຕໍ່ຫົວໜ່ວຍ:</span>
                  <span className="text-green-600 font-semibold">
                    {formatPrice(product.price)} ກີບ
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              ຈຳນວນ:
            </label>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => handleQuantityChange(quantity - 1)}
                className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors flex items-center justify-center"
                disabled={quantity <= 1}
              >
                <Minus size={18} />
              </button>
              
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-20 text-center p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-semibold"
                min="1"
              />
              
              <button 
                onClick={() => handleQuantityChange(quantity + 1)}
                className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors flex items-center justify-center"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
          
          {/* Total Price */}
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-green-700 mb-1">ລວມທັງໝົດ:</p>
              <p className="text-2xl font-bold text-green-600">
                {formatPrice(totalPrice)} ກີບ
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              ຍົກເລີກ
            </button>
            <button 
              onClick={handleAddToBill}
              className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              ເພີ່ມໃສ່ບິນ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;