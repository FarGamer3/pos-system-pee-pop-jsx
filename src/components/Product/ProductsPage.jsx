// src/pages/ProductsPage.jsx

import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  Tag, 
  Search,
  Filter,
  Save,
  X,
  Upload,
  AlertCircle
} from 'lucide-react';
import { formatPrice } from '../utils/formatters';

// Mock data for demonstration
const initialBrands = [
  { id: 1, name: 'ຫົວເສືອ' },
  { id: 2, name: 'Beer Lao' },
  { id: 3, name: 'Apple' },
  { id: 4, name: 'Samsung' },
  { id: 5, name: 'Pepsi' }
];

const initialUnits = [
  { id: 1, name: 'ແກັດ' },
  { id: 2, name: 'ແພັດ' },
  { id: 3, name: 'ບອດ' },
  { id: 4, name: 'ລູກ' },
  { id: 5, name: 'ກິໂລ' },
  { id: 6, name: 'ແຫຼມ' }
];

const initialProducts = [
  { id: 1, name: 'ນ້ຳໃຫຍ່', brand_id: 1, unit_id: 1, price: 15000, image: '🥤' },
  { id: 2, name: 'ນ້ຳໃຫຍ່', brand_id: 1, unit_id: 2, price: 180000, image: '📦' },
  { id: 3, name: 'ນ້ຳເຢັນ', brand_id: 1, unit_id: 1, price: 12000, image: '🥤' },
  { id: 4, name: 'Beer Lao ແດງ', brand_id: 2, unit_id: 3, price: 25000, image: '🍺' },
  { id: 5, name: 'iPhone 15', brand_id: 3, unit_id: 4, price: 50000000, image: '📱' },
  { id: 6, name: 'Galaxy S24', brand_id: 4, unit_id: 4, price: 45000000, image: '📱' },
];

const ProductsPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [brands, setBrands] = useState(initialBrands);
  const [units, setUnits] = useState(initialUnits);
  
  // States for products
  const [searchText, setSearchText] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  // States for brands
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);
  const [brandName, setBrandName] = useState('');
  
  // States for units
  const [showUnitModal, setShowUnitModal] = useState(false);
  const [editingUnit, setEditingUnit] = useState(null);
  const [unitName, setUnitName] = useState('');
  
  // Product form state
  const [productForm, setProductForm] = useState({
    name: '',
    brand_id: '',
    unit_id: '',
    price: '',
    image: '📦'
  });

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchBrand = !selectedBrand || product.brand_id.toString() === selectedBrand;
    const matchUnit = !selectedUnit || product.unit_id.toString() === selectedUnit;
    return matchSearch && matchBrand && matchUnit;
  });

  // Product functions
  const handleAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: '',
      brand_id: '',
      unit_id: '',
      price: '',
      image: '📦'
    });
    setShowProductModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      brand_id: product.brand_id.toString(),
      unit_id: product.unit_id.toString(),
      price: product.price.toString(),
      image: product.image
    });
    setShowProductModal(true);
  };

  const handleSaveProduct = () => {
    if (!productForm.name || !productForm.brand_id || !productForm.unit_id || !productForm.price) {
      alert('ກະລຸນາກື່ມຂໍ້ມູນໃຫ້ຄົບຖ້ວນ');
      return;
    }

    const productData = {
      ...productForm,
      brand_id: parseInt(productForm.brand_id),
      unit_id: parseInt(productForm.unit_id),
      price: parseInt(productForm.price)
    };

    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id ? { ...productData, id: editingProduct.id } : p
      ));
    } else {
      setProducts([...products, { ...productData, id: Date.now() }]);
    }

    setShowProductModal(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    if (confirm('ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບສິນຄ້ານີ້?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  // Brand functions
  const handleAddBrand = () => {
    setEditingBrand(null);
    setBrandName('');
    setShowBrandModal(true);
  };

  const handleEditBrand = (brand) => {
    setEditingBrand(brand);
    setBrandName(brand.name);
    setShowBrandModal(true);
  };

  const handleSaveBrand = () => {
    if (!brandName.trim()) {
      alert('ກະລຸນາໃສ່ຊື່ຍີ່ຫໍ້');
      return;
    }

    if (editingBrand) {
      setBrands(brands.map(b => 
        b.id === editingBrand.id ? { ...b, name: brandName } : b
      ));
    } else {
      setBrands([...brands, { id: Date.now(), name: brandName }]);
    }

    setShowBrandModal(false);
    setBrandName('');
  };

  const handleDeleteBrand = (brandId) => {
    const hasProducts = products.some(p => p.brand_id === brandId);
    if (hasProducts) {
      alert('ບໍ່ສາມາດລຶບຍີ່ຫໍ້ນີ້ໄດ້ເພາະມີສິນຄ້າໃຊ້ຢູ່');
      return;
    }
    
    if (confirm('ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບຍີ່ຫໍ້ນີ້?')) {
      setBrands(brands.filter(b => b.id !== brandId));
    }
  };

  // Unit functions
  const handleAddUnit = () => {
    setEditingUnit(null);
    setUnitName('');
    setShowUnitModal(true);
  };

  const handleEditUnit = (unit) => {
    setEditingUnit(unit);
    setUnitName(unit.name);
    setShowUnitModal(true);
  };

  const handleSaveUnit = () => {
    if (!unitName.trim()) {
      alert('ກະລຸນາໃສ່ຊື່ຫົວໜ່ວຍ');
      return;
    }

    if (editingUnit) {
      setUnits(units.map(u => 
        u.id === editingUnit.id ? { ...u, name: unitName } : u
      ));
    } else {
      setUnits([...units, { id: Date.now(), name: unitName }]);
    }

    setShowUnitModal(false);
    setUnitName('');
  };

  const handleDeleteUnit = (unitId) => {
    const hasProducts = products.some(p => p.unit_id === unitId);
    if (hasProducts) {
      alert('ບໍ່ສາມາດລຶບຫົວໜ່ວຍນີ້ໄດ້ເພາະມີສິນຄ້າໃຊ້ຢູ່');
      return;
    }
    
    if (confirm('ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບຫົວໜ່ວຍນີ້?')) {
      setUnits(units.filter(u => u.id !== unitId));
    }
  };

  const emojiOptions = ['📦', '🥤', '🍺', '📱', '💻', '🎮', '📺', '🚗', '👕', '🍎', '🥛', '🍞'];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <Package size={32} className="text-blue-600" />
          ຈັດການສິນຄ້າ
        </h1>
        <p className="text-gray-600">ເພີ່ມ ແກ້ໄຂ ແລະ ລຶບສິນຄ້າ ຍີ່ຫໍ້ ແລະ ຫົວໜ່ວຍ</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button 
          onClick={handleAddProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <Plus size={18} />
          ເພີ່ມສິນຄ້າໃໝ່
        </button>
        <button 
          onClick={handleAddBrand}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
        >
          <Tag size={18} />
          ເພີ່ມຍີ່ຫໍ້ໃໝ່
        </button>
        <button 
          onClick={handleAddUnit}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
        >
          <Package size={18} />
          ເພີ່ມຫົວໜ່ວຍໃໝ່
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg border shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-800 flex items-center gap-2">
            <Filter size={18} />
            ຄົ້ນຫາ & ກອງສິນຄ້າ
          </h3>
          <span className="text-sm text-gray-500">
            ພົບ {filteredProducts.length} ລາຍການ
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ຄົ້ນຫາຊື່ສິນຄ້າ..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Brand Filter */}
          <select 
            value={selectedBrand} 
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">ທຸກຍີ່ຫໍ້</option>
            {brands.map(brand => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>

          {/* Unit Filter */}
          <select 
            value={selectedUnit} 
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">ທຸກຫົວໜ່ວຍ</option>
            {units.map(unit => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-semibold text-gray-800">ລາຍການສິນຄ້າ</h3>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <Package size={48} className="mx-auto mb-4 text-gray-300" />
            <p>ບໍ່ພົບສິນຄ້າ</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">ສິນຄ້າ</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">ຍີ່ຫໍ້</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">ຫົວໜ່ວຍ</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">ລາຄາ</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">ຈັດການ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map(product => {
                  const brand = brands.find(b => b.id === product.brand_id);
                  const unit = units.find(u => u.id === product.unit_id);
                  
                  return (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{product.image}</span>
                          <span className="font-medium text-gray-800">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                          {brand?.name || 'ບໍ່ມີຍີ່ຫໍ້'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-100 px-2 py-1 rounded text-xs text-blue-700">
                          {unit?.name || 'ບໍ່ມີຫົວໜ່ວຍ'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-green-600">
                        {formatPrice(product.price)} ກີບ
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="text-blue-500 hover:text-blue-700 p-1 rounded"
                            title="ແກ້ໄຂ"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-500 hover:text-red-700 p-1 rounded"
                            title="ລຶບ"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ສິນຄ້າທັງໝົດ</p>
              <p className="text-2xl font-bold text-blue-600">{products.length}</p>
            </div>
            <Package className="text-blue-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ຍີ່ຫໍ້</p>
              <p className="text-2xl font-bold text-green-600">{brands.length}</p>
            </div>
            <Tag className="text-green-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ຫົວໜ່ວຍ</p>
              <p className="text-2xl font-bold text-purple-600">{units.length}</p>
            </div>
            <Package className="text-purple-500" size={32} />
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {editingProduct ? 'ແກ້ໄຂສິນຄ້າ' : 'ເພີ່ມສິນຄ້າໃໝ່'}
              </h2>
              <button 
                onClick={() => setShowProductModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ຊື່ສິນຄ້າ</label>
                <input
                  type="text"
                  value={productForm.name}
                  onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="ໃສ່ຊື່ສິນຄ້າ"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ຍີ່ຫໍ້</label>
                <select
                  value={productForm.brand_id}
                  onChange={(e) => setProductForm({...productForm, brand_id: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">ເລືອກຍີ່ຫໍ້</option>
                  {brands.map(brand => (
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ຫົວໜ່ວຍ</label>
                <select
                  value={productForm.unit_id}
                  onChange={(e) => setProductForm({...productForm, unit_id: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">ເລືອກຫົວໜ່ວຍ</option>
                  {units.map(unit => (
                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ລາຄາ (ກີບ)</label>
                <input
                  type="number"
                  value={productForm.price}
                  onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="ໃສ່ລາຄາ"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ເລືອກໄອຄອນ</label>
                <div className="grid grid-cols-6 gap-2">
                  {emojiOptions.map(emoji => (
                    <button
                      key={emoji}
                      onClick={() => setProductForm({...productForm, image: emoji})}
                      className={`p-2 text-2xl border rounded-lg hover:bg-gray-50 ${
                        productForm.image === emoji ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 p-6 border-t">
              <button 
                onClick={() => setShowProductModal(false)}
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                ຍົກເລີກ
              </button>
              <button 
                onClick={handleSaveProduct}
                className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
              >
                <Save size={18} />
                ບັນທຶກ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Brand Modal */}
      {showBrandModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {editingBrand ? 'ແກ້ໄຂຍີ່ຫໍ້' : 'ເພີ່ມຍີ່ຫໍ້ໃໝ່'}
              </h2>
              <button 
                onClick={() => setShowBrandModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">ຊື່ຍີ່ຫໍ້</label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="ໃສ່ຊື່ຍີ່ຫໍ້"
              />
            </div>
            
            <div className="flex gap-3 p-6 border-t">
              <button 
                onClick={() => setShowBrandModal(false)}
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                ຍົກເລີກ
              </button>
              <button 
                onClick={handleSaveBrand}
                className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                ບັນທຶກ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unit Modal */}
      {showUnitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {editingUnit ? 'ແກ້ໄຂຫົວໜ່ວຍ' : 'ເພີ່ມຫົວໜ່ວຍໃໝ່'}
              </h2>
              <button 
                onClick={() => setShowUnitModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">ຊື່ຫົວໜ່ວຍ</label>
              <input
                type="text"
                value={unitName}
                onChange={(e) => setUnitName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="ໃສ່ຊື່ຫົວໜ່ວຍ"
              />
            </div>
            
            <div className="flex gap-3 p-6 border-t">
              <button 
                onClick={() => setShowUnitModal(false)}
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                ຍົກເລີກ
              </button>
              <button 
                onClick={handleSaveUnit}
                className="flex-1 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              >
                ບັນທຶກ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Brands Management Section */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <Tag size={18} />
            ຈັດການຍີ່ຫໍ້
          </h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {brands.map(brand => (
              <div key={brand.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <span className="font-medium text-gray-800">{brand.name}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEditBrand(brand)}
                    className="text-blue-500 hover:text-blue-700 p-1 rounded"
                    title="ແກ້ໄຂ"
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => handleDeleteBrand(brand.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded"
                    title="ລຶບ"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Units Management Section */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <Package size={18} />
            ຈັດການຫົວໜ່ວຍ
          </h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {units.map(unit => (
              <div key={unit.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <span className="font-medium text-gray-800">{unit.name}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEditUnit(unit)}
                    className="text-blue-500 hover:text-blue-700 p-1 rounded"
                    title="ແກ້ໄຂ"
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => handleDeleteUnit(unit.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded"
                    title="ລຶບ"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;