// src/App.jsx

import { useState } from 'react';

// Layout Components
import Sidebar from './components/Layout/Sidebar';

// Pages
import CreateBillPage from './pages/CreateBillPage';
import ViewBillsPage from './pages/ViewBillsPage';
import ProductsPage from './pages/ProductsPage';

import ViewBillsPage from './components/Bill/ViewBillsPage';

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
    <div className="min-h-screen bg-gray-100">
      {/* Mobile + Desktop Layout */}
      <div className="lg:flex">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <main className="min-h-screen">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;