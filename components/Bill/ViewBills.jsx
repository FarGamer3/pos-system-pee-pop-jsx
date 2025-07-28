// src/pages/ViewBillsPage.js

import React from 'react';
import { FileText, Search, Calendar, DollarSign } from 'lucide-react';

const ViewBillsPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <FileText size={32} className="text-blue-600" />
          ເບິ່ງບິນ
        </h1>
        <p className="text-gray-600">ກວດສອບ ແລະ ຈັດການບິນທີ່ບັນທຶກແລ້ວ</p>
      </div>

      {/* Coming Soon Content */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-gray-300 mb-6">
            <FileText size={80} className="mx-auto" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ໜ້ານີ້ກຳລັງພັດທະນາ
          </h2>
          
          <p className="text-gray-600 mb-8">
            ຄຸນສົມບັດການເບິ່ງ ແລະ ຈັດການບິນຈະມາໃນເວີຊັ່ນຕໍ່ໄປ
          </p>

          {/* Preview Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-blue-50 p-4 rounded-lg">
              <Search className="text-blue-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ຄົ້ນຫາບິນ</h3>
              <p className="text-sm text-gray-600">ຄົ້ນຫາບິນຕາມເລກທີ ຫຼື ລູກຄ້າ</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <Calendar className="text-green-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ກອງຕາມວັນ</h3>
              <p className="text-sm text-gray-600">ເບິ່ງບິນຕາມວັນທີທີ່ບັນທຶກ</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <DollarSign className="text-purple-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ການຊຳລະ</h3>
              <p className="text-sm text-gray-600">ອັບເດດສະຖານະການຊຳລະ</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <FileText className="text-orange-600 mb-2" size={20} />
              <h3 className="font-semibold text-gray-800 mb-1">ພີມບິນ</h3>
              <p className="text-sm text-gray-600">ພີມບິນສຳລັບລູກຄ້າ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBillsPage;