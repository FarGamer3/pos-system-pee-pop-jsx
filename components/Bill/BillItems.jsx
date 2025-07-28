// src/components/Bill/BillItems.js

import React from 'react';
import { Trash2, ShoppingCart, Save } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

const BillItems = ({ billItems, onRemoveItem, onSaveBill }) => {
  const grandTotal = billItems.reduce((sum, item) => sum + item.totalPrice, 0);

  if (billItems.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-8 text-center">
          <div className="text-gray-300 mb-4">
            <ShoppingCart size={64} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            ບິນຍັງວ່າງເປົ່າ
          </h3>
          <p className="text-gray-500">
            ກະລຸນາເລືອກສິນຄ້າເພື່ອເພີ່ມໃສ່ບິນ
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <ShoppingCart size={18} />
            ລາຍການທີ່ເລືອກ
          </h3>
          <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded">
            {billItems.length} ລາຍການ
          </span>
        </div>
      </div>
      
      {/* Items Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                ສິນຄ້າ
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                ຍີ່ຫໍ້
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                ຫົວໜ່ວຍ
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                ຈຳນວນ
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                ລາຄາ
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                ລຶບ
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {billItems.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.image}</span>
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {item.brand}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">
                  <span className="bg-blue-100 px-2 py-1 rounded text-xs text-blue-700">
                    {item.unit}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="font-semibold text-gray-800">
                    {item.quantity}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">
                      {formatPrice(item.price)} × {item.quantity}
                    </div>
                    <div className="font-semibold text-green-600">
                      {formatPrice(item.totalPrice)}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <button 
                    onClick={() => onRemoveItem(index)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    title="ລຶບສິນຄ້ານີ້"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Summary & Actions */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        {/* Summary */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-gray-800">ລວມທັງໝົດ:</span>
            <span className="font-bold text-green-600 text-xl">
              {formatPrice(grandTotal)} ກີບ
            </span>
          </div>
        </div>
        
        {/* Save Button */}
        <button 
          onClick={onSaveBill}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <Save size={20} />
          ບັນທຶກບິນ
        </button>
      </div>
    </div>
  );
};

export default BillItems;