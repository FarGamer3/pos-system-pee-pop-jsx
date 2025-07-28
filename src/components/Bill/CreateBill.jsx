// src/pages/CreateBillPage.js

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

// Components
import CustomerSelector from '../components/Customer/CustomerSelector';
import ProductFilter from '../components/Product/ProductFilter';
import ProductGrid from '../components/Product/ProductGrid';
import ProductPopup from '../components/Product/ProductPopup';
import BillItems from '../components/Bill/BillItems';

// Data
import { mockCustomers, mockProducts, mockBrands, mockUnits } from '../data/mockData';

const CreateBillPage = () => {
  // State
  const [selectedCustomer, setSelectedCustomer] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [billItems, setBillItems] = useState([]);

  // Filter products based on search and filters
  const filteredProducts = mockProducts.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchBrand = !selectedBrand || product.brand_id.toString() === selectedBrand;
    const matchUnit = !selectedUnit || product.unit_id.toString() === selectedUnit;
    return matchSearch && matchBrand && matchUnit;
  });

  // Handlers
  const handleCustomerChange = (customerId) => {
    setSelectedCustomer(customerId);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const handleAddToBill = (item) => {
    const existingIndex = billItems.findIndex(billItem => 
      billItem.id === item.id && 
      billItem.brand_id === item.brand_id && 
      billItem.unit_id === item.unit_id
    );

    if (existingIndex >= 0) {
      // Update existing item
      const updatedItems = [...billItems];
      updatedItems[existingIndex].quantity += item.quantity;
      updatedItems[existingIndex].totalPrice = 
        updatedItems[existingIndex].quantity * updatedItems[existingIndex].price;
      setBillItems(updatedItems);
    } else {
      // Add new item
      setBillItems([...billItems, item]);
    }
  };

  const handleRemoveItem = (index) => {
    setBillItems(billItems.filter((_, i) => i !== index));
  };

  const handleSaveBill = () => {
    if (billItems.length === 0) {
      alert('ກະລຸນາເລືອກສິນຄ້າກ່ອນບັນທຶກບິນ');
      return;
    }
    
    const customer = mockCustomers.find(c => c.id === selectedCustomer);
    const total = billItems.reduce((sum, item) => sum + item.totalPrice, 0);
    
    // Here you would normally send to backend
    console.log('Bill saved:', {
      customer,
      items: billItems,
      total,
      timestamp: new Date()
    });
    
    alert(`ບັນທຶກບິນສຳເລັດ!\nລູກຄ້າ: ${customer.name}\nຍອດລວມ: ${total.toLocaleString()} ກີບ`);
    
    // Reset form
    setBillItems([]);
    setSelectedCustomer(1);
    setSearchText('');
    setSelectedBrand('');
    setSelectedUnit('');
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  // Get selected product details for popup
  const selectedProductBrand = selectedProduct ? 
    mockBrands.find(b => b.id === selectedProduct.brand_id) : null;
  const selectedProductUnit = selectedProduct ? 
    mockUnits.find(u => u.id === selectedProduct.unit_id) : null;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <Plus size={32} className="text-blue-600" />
          ສ້າງບິນຂາຍ
        </h1>
        <p className="text-gray-600">ເລືອກລູກຄ້າ ແລະ ສິນຄ້າເພື່ອສ້າງບິນຂາຍໃໝ່</p>
      </div>

      {/* Customer Selection */}
      <CustomerSelector 
        customers={mockCustomers}
        selectedCustomer={selectedCustomer}
        onCustomerChange={handleCustomerChange}
      />
      
      {/* Product Filter */}
      <ProductFilter 
        searchText={searchText}
        setSearchText={setSearchText}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        brands={mockBrands}
        units={mockUnits}
        productsCount={filteredProducts.length}
      />
      
      {/* Product Grid */}
      <ProductGrid 
        products={filteredProducts}
        brands={mockBrands}
        units={mockUnits}
        onProductClick={handleProductClick}
      />
      
      {/* Bill Items */}
      <BillItems 
        billItems={billItems}
        onRemoveItem={handleRemoveItem}
        onSaveBill={handleSaveBill}
      />
      
      {/* Product Selection Popup */}
      <ProductPopup 
        product={selectedProduct}
        brand={selectedProductBrand}
        unit={selectedProductUnit}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onAddToBill={handleAddToBill}
      />
    </div>
  );
};

export default CreateBillPage;