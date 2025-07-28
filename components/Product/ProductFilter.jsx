// src/components/Product/ProductFilter.js

import React from 'react';
import { Search, Filter, Tag, Package } from 'lucide-react';

const ProductFilter = ({ 
  searchText, 
  setSearchText, 
  selectedBrand, 
  setSelectedBrand,
  selectedUnit,
  setSelectedUnit,
  brands,
  units,
  productsCount = 0
}) => {
  const handleClearFilters = () => {
    setSearchText('');
    setSelectedBrand('');
    setSelectedUnit('');
  };

  const hasActiveFilters = searchText || selectedBrand || selectedUnit;

  return (
    <div className="mb-6 space-y-4 bg-white p-4 rounded-lg border shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-800 flex items-center gap-2">
          <Filter size={18} />
          ຄົ້ນຫາ & ກອງສິນຄ້າ
        </h3>
        <span className="text-sm text-gray-500">
          ພົບ {productsCount} ລາຍການ
        </span>
      </div>

      {/* ຊ່ອງຄົ້ນຫາ */}
      <div className="relative">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="ຄົ້ນຫາຊື່ສິນຄ້າ..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {searchText && (
          <button
            onClick={() => setSearchText('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>
      
      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Brand Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            <Tag size={14} />
            ຍີ່ຫໍ້:
          </label>
          <select 
            value={selectedBrand} 
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="">ທັງໝົດ</option>
            {brands.map(brand => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Unit Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            <Package size={14} />
            ຫົວໜ່ວຍ:
          </label>
          <select 
            value={selectedUnit} 
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="">ທັງໝົດ</option>
            {units.map(unit => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex justify-end">
          <button
            onClick={handleClearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            ລ້າງຟິເຕີ
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;