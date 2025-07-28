// src/pages/ViewBillsPage.jsx

import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Calendar, 
  DollarSign, 
  Eye,
  Download,
  Filter,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Printer,
  RefreshCw,
  X
} from 'lucide-react';
import { formatPrice, formatDateTime, formatDate } from '../utils/formatters';
import { mockBills, mockSalesStats } from '../data/mockData';

const ViewBillsPage = () => {
  const [bills, setBills] = useState(mockBills);
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [selectedBill, setSelectedBill] = useState(null);
  const [showBillDetail, setShowBillDetail] = useState(false);

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

  // Calculate stats
  const totalRevenue = bills.reduce((sum, bill) => sum + bill.total, 0);
  const paidBills = bills.filter(bill => bill.status === 'ຊຳລະແລ້ວ');
  const pendingBills = bills.filter(bill => bill.status === 'ລໍຖ້າຊຳລະ');

  // Handle bill detail view
  const handleViewBill = (bill) => {
    setSelectedBill(bill);
    setShowBillDetail(true);
  };

  const handleCloseBillDetail = () => {
    setShowBillDetail(false);
    setSelectedBill(null);
  };

  const handlePrintBill = (bill) => {
    // Simulate printing
    alert(`ກຳລັງພີມບິນເລກທີ: ${bill.id}`);
  };

  const handleUpdateStatus = (billId, newStatus) => {
    setBills(bills.map(bill => 
      bill.id === billId ? { ...bill, status: newStatus } : bill
    ));
  };

  const getStatusColor = (status) => {
    return status === 'ຊຳລະແລ້ວ' ? 'text-green-600 bg-green-100' : 'text-orange-600 bg-orange-100';
  };

  const getStatusIcon = (status) => {
    return status === 'ຊຳລະແລ້ວ' ? <CheckCircle size={16} /> : <Clock size={16} />;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <FileText size={32} className="text-blue-600" />
          ເບິ່ງບິນ
        </h1>
        <p className="text-gray-600">ກວດສອບ ແລະ ຈັດການບິນທີ່ບັນທຶກແລ້ວ</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ບິນທັງໝົດ</p>
              <p className="text-2xl font-bold text-blue-600">{bills.length}</p>
            </div>
            <FileText className="text-blue-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ຊຳລະແລ້ວ</p>
              <p className="text-2xl font-bold text-green-600">{paidBills.length}</p>
            </div>
            <CheckCircle className="text-green-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ລໍຖ້າຊຳລະ</p>
              <p className="text-2xl font-bold text-orange-600">{pendingBills.length}</p>
            </div>
            <Clock className="text-orange-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ລາຍຮັບລວມ</p>
              <p className="text-lg font-bold text-purple-600">{formatPrice(totalRevenue)}</p>
            </div>
            <TrendingUp className="text-purple-500" size={32} />
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg border shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-800 flex items-center gap-2">
            <Filter size={18} />
            ຄົ້ນຫາ & ກອງບິນ
          </h3>
          <span className="text-sm text-gray-500">
            ພົບ {filteredBills.length} ບິນ
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ຄົ້ນຫາເລກບິນ, ຊື່ລູກຄ້າ, ຫຼືເບີໂທ..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status Filter */}
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">ທຸກສະຖານະ</option>
            <option value="ຊຳລະແລ້ວ">ຊຳລະແລ້ວ</option>
            <option value="ລໍຖ້າຊຳລະ">ລໍຖ້າຊຳລະ</option>
          </select>

          {/* Date Filter */}
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Bills Table */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-semibold text-gray-800">ລາຍການບິນ</h3>
        </div>
        
        {filteredBills.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <FileText size={48} className="mx-auto mb-4 text-gray-300" />
            <p>ບໍ່ພົບບິນ</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">ເລກບິນ</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">ລູກຄ້າ</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">ວັນທີ</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">ຍອດລວມ</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">ສະຖານະ</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">ຈັດການ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBills.map(bill => (
                  <tr key={bill.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-mono text-sm font-semibold text-blue-600">{bill.id}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-800">{bill.customer_name}</p>
                        {bill.customer_phone && (
                          <p className="text-sm text-gray-500">{bill.customer_phone}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm text-gray-800">{formatDate(bill.created_at)}</p>
                        <p className="text-xs text-gray-500">{formatDateTime(bill.created_at).split(' ')[1]}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-green-600">
                      {formatPrice(bill.total)} ກີບ
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bill.status)}`}>
                          {getStatusIcon(bill.status)}
                          {bill.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleViewBill(bill)}
                          className="text-blue-500 hover:text-blue-700 p-1 rounded"
                          title="ເບິ່ງລາຍລະອຽດ"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handlePrintBill(bill)}
                          className="text-green-500 hover:text-green-700 p-1 rounded"
                          title="ພີມບິນ"
                        >
                          <Printer size={16} />
                        </button>
                        {bill.status === 'ລໍຖ້າຊຳລະ' && (
                          <button
                            onClick={() => handleUpdateStatus(bill.id, 'ຊຳລະແລ້ວ')}
                            className="text-orange-500 hover:text-orange-700 p-1 rounded"
                            title="ອັບເດດເປັນຊຳລະແລ້ວ"
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Bill Detail Modal */}
      {showBillDetail && selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">ລາຍລະອຽດບິນ</h2>
              <button 
                onClick={handleCloseBillDetail}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Bill Info */}
            <div className="p-6 space-y-6">
              {/* Header Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">ຂໍ້ມູນບິນ</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">ເລກບິນ:</span>
                      <span className="font-mono font-semibold text-blue-600">{selectedBill.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ວັນທີ:</span>
                      <span className="font-medium">{formatDateTime(selectedBill.created_at)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ສະຖານະ:</span>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedBill.status)}`}>
                        {getStatusIcon(selectedBill.status)}
                        {selectedBill.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">ຂໍ້ມູນລູກຄ້າ</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">ຊື່:</span>
                      <span className="font-medium">{selectedBill.customer_name}</span>
                    </div>
                    {selectedBill.customer_phone && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">ເບີໂທ:</span>
                        <span className="font-medium">{selectedBill.customer_phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">ລາຍການສິນຄ້າ</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">ສິນຄ້າ</th>
                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-600 uppercase">ຈຳນວນ</th>
                        <th className="px-4 py-2 text-right text-xs font-medium text-gray-600 uppercase">ລາຄາ</th>
                        <th className="px-4 py-2 text-right text-xs font-medium text-gray-600 uppercase">ລວມ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedBill.items.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{item.image}</span>
                              <div>
                                <p className="font-medium text-gray-800">{item.name}</p>
                                <p className="text-xs text-gray-500">{item.brand} • {item.unit}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center font-semibold">
                            {item.quantity}
                          </td>
                          <td className="px-4 py-3 text-right text-sm">
                            {formatPrice(item.price)}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-green-600">
                            {formatPrice(item.totalPrice)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold text-gray-800">ລວມທັງໝົດ:</span>
                  <span className="font-bold text-green-600 text-xl">
                    {formatPrice(selectedBill.total)} ກີບ
                  </span>
                </div>
              </div>
            </div>
            
            {/* Modal Actions */}
            <div className="flex gap-3 p-6 border-t bg-gray-50">
              <button 
                onClick={handleCloseBillDetail}
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                ປິດ
              </button>
              <button 
                onClick={() => handlePrintBill(selectedBill)}
                className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center gap-2"
              >
                <Printer size={18} />
                ພີມບິນ
              </button>
              {selectedBill.status === 'ລໍຖ້າຊຳລະ' && (
                <button 
                  onClick={() => {
                    handleUpdateStatus(selectedBill.id, 'ຊຳລະແລ້ວ');
                    setSelectedBill({...selectedBill, status: 'ຊຳລະແລ້ວ'});
                  }}
                  className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} />
                  ອັບເດດເປັນຊຳລະແລ້ວ
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Daily Sales Summary */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <TrendingUp size={18} />
            ສະຫຼຸບການຂາຍ
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600 font-medium">ມື້ນີ້</p>
              <p className="text-2xl font-bold text-blue-600">{formatPrice(mockSalesStats.today.sales)}</p>
              <p className="text-xs text-gray-500">{mockSalesStats.today.transactions} ທຸລະກຳ</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600 font-medium">ອາທິດນີ້</p>
              <p className="text-2xl font-bold text-green-600">{formatPrice(mockSalesStats.thisWeek.sales)}</p>
              <p className="text-xs text-gray-500">{mockSalesStats.thisWeek.transactions} ທຸລະກຳ</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-600 font-medium">ເດືອນນີ້</p>
              <p className="text-2xl font-bold text-purple-600">{formatPrice(mockSalesStats.thisMonth.sales)}</p>
              <p className="text-xs text-gray-500">{mockSalesStats.thisMonth.transactions} ທຸລະກຳ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">ການກະທຳດ່ວນ</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="text-blue-500" size={20} />
            <span className="text-sm font-medium">ນຳອອກລາຍງານ</span>
          </button>
          
          <button 
            onClick={() => {
              setSearchText('');
              setStatusFilter('');
              setDateFilter('');
            }}
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="text-green-500" size={20} />
            <span className="text-sm font-medium">ລ້າງຟິເຕີ</span>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Users className="text-purple-500" size={20} />
            <span className="text-sm font-medium">ລາຍງານລູກຄ້າ</span>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="text-orange-500" size={20} />
            <span className="text-sm font-medium">ກຳນົດການ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBillsPage;