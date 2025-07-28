// src/components/Bill/BillDetailModal.jsx

import React from 'react';
import { 
  X, 
  CreditCard, 
  Printer, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  History,
  Banknote
} from 'lucide-react';

const formatPrice = (price) => {
  return new Intl.NumberFormat('lo-LA').format(price);
};

const formatDateTime = (date) => {
  return new Date(date).toLocaleString('lo-LA');
};

const BillDetailModal = ({ 
  bill, 
  isOpen, 
  onClose, 
  onPrintBill, 
  onOpenPayment 
}) => {
  if (!isOpen || !bill) return null;

  const getStatusConfig = (status) => {
    const configs = {
      'ຊຳລະແລ້ວ': { color: 'text-green-600 bg-green-100', icon: <CheckCircle size={16} /> },
      'ລໍຖ້າຊຳລະ': { color: 'text-orange-600 bg-orange-100', icon: <Clock size={16} /> },
      'ຊຳລະບາງສ່ວນ': { color: 'text-blue-600 bg-blue-100', icon: <AlertCircle size={16} /> }
    };
    return configs[status] || configs['ລໍຖ້າຊຳລະ'];
  };

  const getPaymentSummary = (bill) => {
    const totalPaid = bill.payments?.reduce((sum, payment) => sum + payment.amount, 0) || 0;
    const remaining = bill.total - totalPaid;
    return { totalPaid, remaining };
  };

  const { totalPaid, remaining } = getPaymentSummary(bill);
  const statusConfig = getStatusConfig(bill.status);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">ລາຍລະອຽດບິນ</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
        
        {/* Bill Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Bill & Customer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">ຂໍ້ມູນບິນ</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">ເລກບິນ:</span>
                  <span className="font-mono font-semibold text-blue-600">{bill.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ວັນທີ:</span>
                  <span className="font-medium">{formatDateTime(bill.created_at)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ສະຖານະ:</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                    {statusConfig.icon}
                    {bill.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">ຂໍ້ມູນລູກຄ້າ</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">ຊື່:</span>
                  <span className="font-medium">{bill.customer_name}</span>
                </div>
                {bill.customer_phone && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">ເບີໂທ:</span>
                    <span className="font-medium">{bill.customer_phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
              <CreditCard size={16} />
              ສະຫຼຸບການຊຳລະ
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="text-center">
                <p className="text-gray-600 mb-1">ຍອດລວມ</p>
                <p className="text-sm sm:text-lg font-bold text-gray-800">{formatPrice(bill.total)}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-1">ຊຳລະແລ້ວ</p>
                <p className="text-sm sm:text-lg font-bold text-green-600">{formatPrice(totalPaid)}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-1">ຄົງເຫຼືອ</p>
                <p className="text-sm sm:text-lg font-bold text-orange-600">{formatPrice(remaining)}</p>
              </div>
            </div>
          </div>

          {/* Items List - Mobile Optimized */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">ລາຍການສິນຄ້າ</h3>
            
            {/* Desktop Table */}
            <div className="hidden sm:block border border-gray-200 rounded-lg overflow-hidden">
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
                  {bill.items.map((item, index) => (
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

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-3">
              {bill.items.map((item, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl">{item.image}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.brand} • {item.unit}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <p className="text-gray-600">ຈຳນວນ</p>
                      <p className="font-semibold">{item.quantity}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600">ລາຄາ</p>
                      <p className="font-semibold">{formatPrice(item.price)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600">ລວມ</p>
                      <p className="font-semibold text-green-600">{formatPrice(item.totalPrice)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment History */}
          {bill.payments && bill.payments.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                <History size={16} />
                ປະຫວັດການຊຳລະ
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {bill.payments.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                        {payment.method === 'ເງິນສົດ' ? (
                          <Banknote size={12} className="text-green-600 sm:w-4 sm:h-4" />
                        ) : (
                          <CreditCard size={12} className="text-green-600 sm:w-4 sm:h-4" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-xs sm:text-sm">{payment.method}</p>
                        <p className="text-xs text-gray-500">{formatDateTime(payment.date)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600 text-xs sm:text-sm">{formatPrice(payment.amount)}</p>
                      {payment.reference && (
                        <p className="text-xs text-gray-500">ອ້າງອີງ: {payment.reference}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Total */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-base sm:text-lg">
              <span className="font-semibold text-gray-800">ລວມທັງໝົດ:</span>
              <span className="font-bold text-green-600 text-lg sm:text-xl">
                {formatPrice(bill.total)} ກີບ
              </span>
            </div>
          </div>
        </div>
        
        {/* Modal Actions */}
        <div className="flex gap-3 p-4 sm:p-6 border-t bg-gray-50">
          <button 
            onClick={onClose}
            className="flex-1 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm sm:text-base"
          >
            ປິດ
          </button>
          <button 
            onClick={() => onPrintBill(bill)}
            className="flex-1 py-2 sm:py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Printer size={16} />
            ພີມບິນ
          </button>
          {remaining > 0 && (
            <button 
              onClick={() => {
                onClose();
                onOpenPayment(bill);
              }}
              className="flex-1 py-2 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <CreditCard size={16} />
              ຈ່າຍເງິນ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillDetailModal;