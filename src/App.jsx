// src/App.jsx

import { useState } from 'react';

// Layout Components
import Sidebar from './components/Layout/Sidebar';

// Pages
import CreateBillPage from './pages/CreateBillPage';
import ViewBillsPage from './pages/ViewBillsPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [activeTab, setActiveTab] = useState('create-bill');

  const renderContent = () => {
    switch (activeTab) {
      case 'create-bill':
        return <CreateBillPage />;
      case 'view-bills':
        return <ViewBillsPage />;
      case 'products':
        return <ProductsPage />;
      default:
        return <CreateBillPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;