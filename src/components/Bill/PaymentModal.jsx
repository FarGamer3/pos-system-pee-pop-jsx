// src/components/Bill/PaymentModal.jsx

import React, { useState, useEffect } from 'react';
import { 
  X, 
  CreditCard, 
  Banknote, 
  DollarSign, 
  Check
} from 'lucide-react';

const formatPrice = (price) => {
  return new Intl.NumberFormat('lo-LA').format(price);
};

const PaymentModal = ({ 
  bill, 
  isOpen, 
  onClose, 
  onProcessPayment 
}) => {
  const [paymentForm, setPaymentForm] = useState({
    method: 'ເງິນສົດ',
    amount: '',
    reference: '',
    notes: ''
  });

  useEffect(() => {
    if (isOpen && bill) {
      const { remaining } = getPaymentSummary(bill);
      setPaymentForm({
        method: 'ເງິນສົດ',
        amount: remaining > 0 ? remaining.toString() : '',
        reference: '',
        notes: ''
      });
    }
  }, [isOpen, bill]);

  if (!isOpen || !bill) return null;

  const getPaymentSummary = (bill) => {
    const totalPaid = bill.payments?.reduce((sum, payment) => sum + payment.amount, 0) || 0;
    const remaining = bill.total - totalPaid;
    return { totalPaid, remaining };
  };

  const { totalPaid, remaining } = getPaymentSummary(bill);

  const handleProcessPayment = () => {
    if (!paymentForm.amount || parseFloat(paymentForm.amount) <= 0) {
      alert('ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ');
      return;
    }

    const paymentAmount = parseFloat(paymentForm.amount);

    if (paymentAmount > remaining) {
      alert('ຈຳນວນເງິນເກີນຍອດທີ່ຄ້າງຊຳລະ');
      return;
    }

    const paymentData = {
      method: paymentForm.method,
      amount: paymentAmount,
      reference: paymentForm.reference,
      notes: paymentForm.notes
    };

    onProcessPayment(paymentData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
            <CreditCard size={20} className="text-blue-600 sm:w-6 sm:h-6" />
            ຈ່າຍເງິນ
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
        
        {/* Payment Form */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Bill Summary */}
          <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
            <div className="text-center mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-gray-600">ບິນເລກທີ</p>
              <p className="font-mono font-bold text-blue-600 text-sm sm:text-base">{bill.id}</p>
              <p className="text-xs sm:text-sm text-gray-600">{bill.customer_name}</p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-xs sm:text-sm">
              <div>
                <p className="text-gray-500">ຍອດລວມ</p>
                <p className="font-semibold text-xs sm:text-sm">{formatPrice(bill.total)}</p>
              </div>
              <div>
                <p className="text-gray-500">ຊຳລະແລ້ວ</p>
                <p className="font-semibold text-green-600 text-xs sm:text-sm">{formatPrice(totalPaid)}</p>
              </div>
              <div>
                <p className="text-gray-500">ຄົງເຫຼືອ</p>
                <p className="font-semibold text-orange-600 text-xs sm:text-sm">{formatPrice(remaining)}</p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ວິທີຊຳລະ</label>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={() => setPaymentForm({...paymentForm, method: 'ເງິນສົດ'})}
                className={`p-2 sm:p-3 border rounded-lg flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm ${
                  paymentForm.method === 'ເງິນສົດ' 
                    ? 'border-green-500 bg-green-50 text-green-700' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Banknote size={16} className="sm:w-5 sm:h-5" />
                <span className="font-medium">ເງິນສົດ</span>
              </button>
              <button
                onClick={() => setPaymentForm({...paymentForm, method: 'ບັດເຄຣດິດ'})}
                className={`p-2 sm:p-3 border rounded-lg flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm ${
                  paymentForm.method === 'ບັດເຄຣດິດ' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <CreditCard size={16} className="sm:w-5 sm:h-5" />
                <span className="font-medium">ບັດເຄຣດິດ</span>
              </button>
            </div>
          </div>

          {/* Payment Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ຈຳນວນເງິນ (ກີບ)</label>
            <div className="relative">
              <DollarSign size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                value={paymentForm.amount}
                onChange={(e) => setPaymentForm({...paymentForm, amount: e.target.value})}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-lg"
                placeholder="ໃສ່ຈຳນວນເງິນ"
                min="0"
                step="1000"
              />
            </div>
            
            {/* Quick Amount Buttons */}
            <div className="mt-2 grid grid-cols-4 gap-1 sm:gap-2">
              {(() => {
                const quickAmounts = [
                  { label: '25%', value: Math.floor(remaining / 4) },
                  { label: '50%', value: Math.floor(remaining / 2) },
                  { label: '75%', value: Math.floor(remaining * 0.75) },
                  { label: 'ທັງໝົດ', value: remaining }
                ].filter(item => item.value > 0);
                
                return quickAmounts.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setPaymentForm({...paymentForm, amount: item.value.toString()})}
                    className="py-1 px-1 sm:px-2 text-xs border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </button>
                ));
              })()}
            </div>
          </div>

          {/* Reference Number (for credit card) */}
          {paymentForm.method === 'ບັດເຄຣດິດ' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ເລກອ້າງອີງ</label>
              <input
                type="text"
                value={paymentForm.reference}
                onChange={(e) => setPaymentForm({...paymentForm, reference: e.target.value})}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="ເລກທຸລະກຳບັດເຄຣດິດ"
              />
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ໝາຍເຫດ (ບໍ່ບັງຄັບ)</label>
            <textarea
              value={paymentForm.notes}
              onChange={(e) => setPaymentForm({...paymentForm, notes: e.target.value})}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              rows="2"
              placeholder="ໝາຍເຫດເພີ່ມເຕີມ..."
            />
          </div>

          {/* Payment Confirmation */}
          {paymentForm.amount && (
            <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-green-700">ຈະຊຳລະ:</p>
                  <p className="text-sm sm:text-lg font-bold text-green-600">{formatPrice(parseFloat(paymentForm.amount) || 0)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm text-green-700">ຄົງເຫຼືອຫຼັງຊຳລະ:</p>
                  <p className="text-sm sm:text-lg font-bold text-orange-600">
                    {formatPrice(Math.max(0, remaining - (parseFloat(paymentForm.amount) || 0)))}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Modal Actions */}
        <div className="flex gap-3 p-4 sm:p-6 border-t bg-gray-50">
          <button 
            onClick={onClose}
            className="flex-1 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm sm:text-base"
          >
            ຍົກເລີກ
          </button>
          <button 
            onClick={handleProcessPayment}
            disabled={!paymentForm.amount || parseFloat(paymentForm.amount) <= 0}
            className="flex-1 py-2 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
          >
            <Check size={16} />
            ຢືນຢັນການຊຳລະ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;