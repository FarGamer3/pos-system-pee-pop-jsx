// src/components/Layout/Sidebar.js

import React from 'react';
import { ShoppingCart, FileText, Package, Home } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { 
      id: 'create-bill', 
      label: 'ສ້າງບິນ', 
      icon: ShoppingCart,
      description: 'ສ້າງບິນຂາຍໃໝ່'
    },
    { 
      id: 'view-bills', 
      label: 'ເບິ່ງບິນ', 
      icon: FileText,
      description: 'ກວດສອບບິນທີ່ບັນທຶກ'
    },
    { 
      id: 'products', 
      label: 'ສິນຄ້າ', 
      icon: Package,
      description: 'ຈັດການສິນຄ້າ'
    }
  ];

  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen p-4 shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Home size={24} className="text-blue-200" />
          ລະບົບ POS
        </h1>
        <p className="text-blue-200 text-sm mt-1">Point of Sale System</p>
      </div>
      
      {/* Navigation Menu */}
      <nav className="space-y-2">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                  : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                }
              `}
              title={item.description}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="text-blue-200 text-xs text-center">
          <p>ເວີຊັ່ນ 1.0.0</p>
          <p className="mt-1">© 2025 POS System</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;