// src/pages/ViewBillsPage.jsx

import { FileText, Search, Calendar, DollarSign } from 'lucide-react';

const ViewBillsPage = () => {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2 sm:gap-3">
          <FileText size={28} className="text-blue-600 sm:w-8 sm:h-8" />
          ເບິ່ງບິນ
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">ກວດສອບ ແລະ ຈັດການບິນທີ່ບັນທຶກແລ້ວ</p>
      </div>

      {/* Coming Soon Content */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-gray-300 mb-4 sm:mb-6">
            <FileText size={60} className="mx-auto sm:w-20 sm:h-20" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            ໜ້ານີ້ກຳລັງພັດທະນາ
          </h2>
          
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            ຄຸນສົມບັດການເບິ່ງ ແລະ ຈັດການບິນຈະມາໃນເວີຊັ່ນຕໍ່ໄປ
          </p>

          {/* Preview Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
              <Search className="text-blue-600 mb-2" size={18} />
              <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">ຄົ້ນຫາບິນ</h3>
              <p className="text-xs sm:text-sm text-gray-600">ຄົ້ນຫາບິນຕາມເລກທີ ຫຼື ລູກຄ້າ</p>
            </div>
            
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
              <Calendar className="text-green-600 mb-2" size={18} />
              <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">ກອງຕາມວັນ</h3>
              <p className="text-xs sm:text-sm text-gray-600">ເບິ່ງບິນຕາມວັນທີທີ່ບັນທຶກ</p>
            </div>
            
            <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
              <DollarSign className="text-purple-600 mb-2" size={18} />
              <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">ການຊຳລະ</h3>
              <p className="text-xs sm:text-sm text-gray-600">ອັບເດດສະຖານະການຊຳລະ</p>
            </div>
            
            <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
              <FileText className="text-orange-600 mb-2" size={18} />
              <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">ພີມບິນ</h3>
              <p className="text-xs sm:text-sm text-gray-600">ພີມບິນສຳລັບລູກຄ້າ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBillsPage;