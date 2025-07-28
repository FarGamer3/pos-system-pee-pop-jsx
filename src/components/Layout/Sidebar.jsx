// src/components/Layout/Sidebar.jsx

import { ShoppingCart, FileText, Package, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleMenuClick = (itemId) => {
    setActiveTab(itemId);
    setIsMobileMenuOpen(false); // ປິດ menu ໃນມືຖື
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-blue-800 text-white p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <Home size={20} className="text-blue-200" />
          <h1 className="text-lg font-bold">ລະບົບ POS</h1>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-blue-800 text-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:min-h-screen
      `}>
        {/* Desktop Header */}
        <div className="hidden lg:block p-4 mb-8">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Home size={24} className="text-blue-200" />
            ລະບົບ POS
          </h1>
          <p className="text-blue-200 text-sm mt-1">Point of Sale System</p>
        </div>

        {/* Mobile Header in Sidebar */}
        <div className="lg:hidden p-4 border-b border-blue-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Home size={20} className="text-blue-200" />
              <h1 className="text-lg font-bold">ລະບົບ POS</h1>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 hover:bg-blue-700 rounded"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-1">Point of Sale System</p>
        </div>
        
        {/* Navigation Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`
                  w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
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
    </>
  );
};

export default Sidebar;