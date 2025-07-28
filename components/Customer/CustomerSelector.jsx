// src/components/Customer/CustomerSelector.js

import React from 'react';
import { User } from 'lucide-react';

const CustomerSelector = ({ customers, selectedCustomer, onCustomerChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
        <User size={16} />
        ເລືອກລູກຄ້າ:
      </label>
      
      <select 
        value={selectedCustomer} 
        onChange={(e) => onCustomerChange(parseInt(e.target.value))}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
      >
        {customers.map(customer => (
          <option key={customer.id} value={customer.id}>
            {customer.name} {customer.phone && `(${customer.phone})`}
          </option>
        ))}
      </select>
      
      {/* ສະແດງຂໍ້ມູນລູກຄ້າທີ່ເລືອກ */}
      {selectedCustomer && (
        <div className="mt-2 p-2 bg-blue-50 rounded-lg">
          {(() => {
            const customer = customers.find(c => c.id === selectedCustomer);
            return customer ? (
              <div className="text-sm text-blue-700">
                <span className="font-medium">ລູກຄ້າ:</span> {customer.name}
                {customer.phone && (
                  <>
                    <span className="mx-2">•</span>
                    <span>ເບີໂທ: {customer.phone}</span>
                  </>
                )}
              </div>
            ) : null;
          })()}
        </div>
      )}
    </div>
  );
};

export default CustomerSelector;