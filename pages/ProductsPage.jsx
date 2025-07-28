// src/pages/ProductsPage.js

import React from 'react';
import { Package, Plus, Edit, Trash2, Tag } from 'lucide-react';

const ProductsPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <Package size={32} className="text-blue-600" />
          ຈັດການສິນຄ້າ
        </h1>
        <p className="text-gray-600">ເພີ່ມ ແກ້ໄຂ ແລະ ລຶບສິນຄ້າ ຍີ່ຫໍ້ ແລະ ຫົວໜ່ວຍ</p>
      </div>

      {/* Coming Soon Content */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 text-center">
        <div className="max-w-lg mx-auto">
          <div className="text-gray-300 mb-6">
            <Package size={80} className="mx-auto" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ໜ້ານີ້ກຳລັງພັດທະນາ
          </h2>
          
          <p className="text-gray-600 mb-8">
            ຄຸນສົມບັດການຈັດການສິນຄ້າຈະມາໃນເວີຊັ່ນຕໍ່ໄປ
          </p>

          {/* Preview Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <div className="bg-green-50 p-4 rounded-lg">
              <Plus className="text-green-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ເພີ່ມສິນຄ້າ</h3>
              <p className="text-sm text-gray-600">ເພີ່ມສິນຄ້າໃໝ່ພ້ອມຮູບ</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <Edit className="text-blue-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ແກ້ໄຂສິນຄ້າ</h3>
              <p className="text-sm text-gray-600">ອັບເດດລາຄາ ແລະ ຂໍ້ມູນ</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <Trash2 className="text-red-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ລຶບສິນຄ້າ</h3>
              <p className="text-sm text-gray-600">ລຶບສິນຄ້າທີ່ບໍ່ຂາຍແລ້ວ</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <Tag className="text-purple-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ຈັດການຍີ່ຫໍ້</h3>
              <p className="text-sm text-gray-600">ເພີ່ມ ແລະ ແກ້ໄຂຍີ່ຫໍ້</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <Package className="text-orange-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ຈັດການຫົວໜ່ວຍ</h3>
              <p className="text-sm text-gray-600">ເພີ່ມ ແລະ ແກ້ໄຂຫົວໜ່ວຍ</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <Edit className="text-yellow-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ອັບໂຫຼດຮູບ</h3>
              <p className="text-sm text-gray-600">ເພີ່ມຮູບພາບສິນຄ້າ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;