// src/components/Bill/BillList.jsx

import React, { useState } from 'react';
import { 
  Search, 
  Filter,
  RefreshCw,
  Eye,
  Printer,
  CreditCard,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const formatPrice = (price) => {
  return new Intl.NumberFormat('lo-LA').format(price);
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('lo-LA');
};

const BillList = ({ bills, onViewBill, onPrintBill, onOpenPayment }) => {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Filter bills
  const filteredBills = bills.filter(bill => {
    const matchSearch = 
      bill.id.toLowerCase().includes(searchText.toLowerCase()) ||
      bill.customer_name.toLowerCase().includes(searchText.toLowerCase()) ||
      bill.customer_phone.includes(searchText);
    
    const matchStatus = !statusFilter || bill.status === statusFilter;
    const matchDate = !dateFilter || formatDate(bill.created_at) === formatDate(new Date(dateFilter));
    
    return matchSearch && matchStatus && matchDate;
  });

  const getStatusConfig = (status) => {
    const configs = {
      'ຊຳລະແລ້ວ': { color: 'text-green-600 bg-green-100', icon: <CheckCircle size={14} /> },
      'ລໍຖ້າຊຳລະ': { color: 'text-orange-600 bg-orange-100', icon: <Clock size={14} /> },
      'ຊຳລະບາງສ່ວນ': { color: 'text-blue-600 bg-blue-100', icon: <AlertCircle size={14} /> }
    };
    return configs[status] || configs['ລໍຖ້າຊຳລະ'];
  };

  const getPaymentSummary = (bill) => {
    const totalPaid = bill.payments?.reduce((sum, payment) => sum + payment.amount, 0) || 0;
    const remaining = bill.total - totalPaid;
    return { totalPaid, remaining };
  };

  const clearFilters = () => {
    setSearchText('');
    setStatusFilter('');
    setDateFilter('');
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-800 flex items-center gap-2 text-sm sm:text-base">
            <Filter size={16} />
            ຄົ້ນຫາ & ກອງບິນ
          </h3>
          <span className="text-xs sm:text-sm text-gray-500">
            ພົບ {filteredBills.length} ບິນ
          </span>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາເລກບິນ, ຊື່ລູກຄ້າ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Status Filter */}
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">ທຸກສະຖານະ</option>
            <option value="ຊຳລະແລ້ວ">ຊຳລະແລ້ວ</option>
            <option value="ລໍຖ້າຊຳລະ">ລໍຖ້າຊຳລະ</option>
            <option value="ຊຳລະບາງສ່ວນ">ຊຳລະບາງສ່ວນ</option>
          </select>

          {/* Date Filter */}
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />

          {/* Clear Filters */}
          <button
            onClick={clearFilters}
            className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <RefreshCw size={14} />
            <span className="hidden sm:inline">ລ້າງຟິເຕີ</span>
          </button>
        </div>
      </div>

      {/* Bills List */}
      {filteredBills.length === 0 ? (
        <div className="bg-white border rounded-lg p-8 sm:p-12 text-center text-gray-500">
          <FileText size={32} className="mx-auto mb-4 text-gray-300 sm:w-12 sm:h-12" />
          <p className="text-sm sm:text-base">ບໍ່ພົບບິນ</p>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">ເລກບິນ</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">ລູກຄ້າ</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">ວັນທີ</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">ຍອດລວມ</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">ຄົງເຫຼືອ</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">ສະຖານະ</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">ຈັດການ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBills.map(bill => {
                  const { remaining } = getPaymentSummary(bill);
                  const statusConfig = getStatusConfig(bill.status);
                  
                  return (
                    <tr key={bill.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <span className="font-mono text-sm font-semibold text-blue-600">{bill.id}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{bill.customer_name}</p>
                          {bill.customer_phone && (
                            <p className="text-xs text-gray-500">{bill.customer_phone}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm text-gray-800">{formatDate(bill.created_at)}</p>
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-800 text-sm">
                        {formatPrice(bill.total)}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-orange-600 text-sm">
                        {formatPrice(remaining)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                            {statusConfig.icon}
                            {bill.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-1">
                          <button
                            onClick={() => onViewBill(bill)}
                            className="text-blue-500 hover:text-blue-700 p-1 rounded"
                            title="ເບິ່ງລາຍລະອຽດ"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => onPrintBill(bill)}
                            className="text-green-500 hover:text-green-700 p-1 rounded"
                            title="ພີມບິນ"
                          >
                            <Printer size={16} />
                          </button>
                          {remaining > 0 && (
                            <button
                              onClick={() => onOpenPayment(bill)}
                              className="text-purple-500 hover:text-purple-700 p-1 rounded"
                              title="ຈ່າຍເງິນ"
                            >
                              <CreditCard size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-3">
            {filteredBills.map(bill => {
              const { remaining } = getPaymentSummary(bill);
              const statusConfig = getStatusConfig(bill.status);
              
              return (
                <div key={bill.id} className="bg-white border rounded-lg p-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-mono text-sm font-bold text-blue-600">{bill.id}</p>
                      <p className="font-medium text-gray-800 text-sm">{bill.customer_name}</p>
                      <p className="text-xs text-gray-500">{formatDate(bill.created_at)}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                      {statusConfig.icon}
                      {bill.status}
                    </span>
                  </div>

                  {/* Amount Info */}
                  <div className="grid grid-cols-2 gap-4 mb-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-xs text-gray-600">ຍອດລວມ</p>
                      <p className="font-semibold text-gray-800 text-sm">{formatPrice(bill.total)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600">ຄົງເຫຼືອ</p>
                      <p className="font-semibold text-orange-600 text-sm">{formatPrice(remaining)}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => onViewBill(bill)}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                    >
                      <Eye size={14} />
                      ເບິ່ງ
                    </button>
                    <button
                      onClick={() => onPrintBill(bill)}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-50 transition-colors text-sm"
                    >
                      <Printer size={14} />
                      ພີມ
                    </button>
                    {remaining > 0 && (
                      <button
                        onClick={() => onOpenPayment(bill)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
                      >
                        <CreditCard size={14} />
                        ຈ່າຍ
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BillList;