// src/components/Bill/BillOverview.jsx

import React from 'react';
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Eye,
  Download,
  TrendingUp
} from 'lucide-react';

const formatPrice = (price) => {
  return new Intl.NumberFormat('lo-LA').format(price);
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('lo-LA');
};

const BillOverview = ({ bills, onNavigateToBills, onExportReport }) => {
  const totalRevenue = bills.reduce((sum, bill) => sum + bill.total, 0);
  const paidBills = bills.filter(bill => bill.status === 'ຊຳລະແລ້ວ');
  const pendingBills = bills.filter(bill => bill.status === 'ລໍຖ້າຊຳລະ');

  const getStatusConfig = (status) => {
    const configs = {
      'ຊຳລະແລ້ວ': { color: 'text-green-600 bg-green-100', icon: <CheckCircle size={14} /> },
      'ລໍຖ້າຊຳລະ': { color: 'text-orange-600 bg-orange-100', icon: <Clock size={14} /> },
      'ຊຳລະບາງສ່ວນ': { color: 'text-blue-600 bg-blue-100', icon: <Clock size={14} /> }
    };
    return configs[status] || configs['ລໍຖ້າຊຳລະ'];
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 sm:p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-xs sm:text-sm">ບິນທັງໝົດ</p>
              <p className="text-xl sm:text-2xl font-bold">{bills.length}</p>
            </div>
            <FileText size={24} className="text-blue-200 sm:w-8 sm:h-8" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 sm:p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-xs sm:text-sm">ຊຳລະແລ້ວ</p>
              <p className="text-xl sm:text-2xl font-bold">{paidBills.length}</p>
            </div>
            <CheckCircle size={24} className="text-green-200 sm:w-8 sm:h-8" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 sm:p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-xs sm:text-sm">ລໍຖ້າຊຳລະ</p>
              <p className="text-xl sm:text-2xl font-bold">{pendingBills.length}</p>
            </div>
            <Clock size={24} className="text-orange-200 sm:w-8 sm:h-8" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 sm:p-6 rounded-lg text-white col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-xs sm:text-sm">ລາຍຮັບລວມ</p>
              <p className="text-sm sm:text-lg font-bold">{formatPrice(totalRevenue)}</p>
            </div>
            <DollarSign size={24} className="text-purple-200 sm:w-8 sm:h-8" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        <button 
          onClick={onNavigateToBills}
          className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Eye className="text-blue-500" size={18} />
          <span className="text-xs sm:text-sm font-medium">ເບິ່ງລາຍການບິນ</span>
        </button>
        
        <button 
          onClick={onExportReport}
          className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Download className="text-green-500" size={18} />
          <span className="text-xs sm:text-sm font-medium">ນຳອອກລາຍງານ</span>
        </button>
        
        <button className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors col-span-2 sm:col-span-1">
          <TrendingUp className="text-purple-500" size={18} />
          <span className="text-xs sm:text-sm font-medium">ສະຖິຕິການຂາຍ</span>
        </button>
      </div>

      {/* Recent Bills */}
      <div className="bg-white border rounded-lg">
        <div className="p-3 sm:p-4 border-b">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">ບິນຫຼ້າສຸດ</h3>
        </div>
        <div className="divide-y">
          {bills.slice(0, 5).map(bill => {
            const statusConfig = getStatusConfig(bill.status);
            
            return (
              <div key={bill.id} className="p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText size={16} className="text-blue-600 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm">{bill.id}</p>
                    <p className="text-xs text-gray-600">{bill.customer_name}</p>
                    <p className="text-xs text-gray-500">{formatDate(bill.created_at)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600 text-xs sm:text-sm">{formatPrice(bill.total)}</p>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                    {statusConfig.icon}
                    <span className="hidden sm:inline">{bill.status}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BillOverview;