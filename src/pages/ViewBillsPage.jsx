import React, { useState } from 'react';
import { FileText, TrendingUp } from 'lucide-react';

// Import components
import BillOverview from './BillOverview';
import BillList from './BillList';
import BillDetailModal from './BillDetailModal';
import PaymentModal from './PaymentModal';
import ViewBillsPage from '../components/Bill/ViewBillsPage';

// Mock data
const mockBills = [
  {
    id: 'B250101001',
    customer_id: 2,
    customer_name: 'ສົມຊາຍ ວົງສະວັນ',
    customer_phone: '020-1234567',
    items: [
      { id: 1, name: 'ນ້ຳໃຫຍ່', brand: 'ຫົວເສືອ', unit: 'ແກັດ', quantity: 2, price: 15000, totalPrice: 30000, image: '🥤' },
      { id: 5, name: 'Beer Lao ແດງ', brand: 'Beer Lao', unit: 'ບອດ', quantity: 6, price: 25000, totalPrice: 150000, image: '🍺' }
    ],
    total: 180000,
    created_at: new Date('2025-01-01T10:30:00'),
    status: 'ຊຳລະແລ້ວ',
    payments: [
      { method: 'ເງິນສົດ', amount: 180000, date: new Date('2025-01-01T10:30:00') }
    ]
  },
  {
    id: 'B250101002',
    customer_id: 3,
    customer_name: 'ນາງສີ ພົມມະວົງ',
    customer_phone: '020-7654321',
    items: [
      { id: 8, name: 'iPhone 15', brand: 'Apple', unit: 'ລູກ', quantity: 1, price: 50000000, totalPrice: 50000000, image: '📱' }
    ],
    total: 50000000,
    created_at: new Date('2025-01-01T14:15:00'),
    status: 'ລໍຖ້າຊຳລະ',
    payments: []
  },
  {
    id: 'B250102003',
    customer_id: 4,
    customer_name: 'ທ້າວບຸນມີ ສີໄຕ',
    customer_phone: '020-9876543',
    items: [
      { id: 14, name: 'Pepsi', brand: 'Pepsi', unit: 'ບອດ', quantity: 12, price: 12000, totalPrice: 144000, image: '🥤' },
      { id: 17, name: 'ເສື້ອ Nike Air', brand: 'Nike', unit: 'ລູກ', quantity: 2, price: 850000, totalPrice: 1700000, image: '👕' }
    ],
    total: 1844000,
    created_at: new Date('2025-01-02T09:45:00'),
    status: 'ຊຳລະແລ້ວ',
    payments: [
      { method: 'ເງິນສົດ', amount: 1844000, date: new Date('2025-01-02T09:45:00') }
    ]
  },
  {
    id: 'B250102004',
    customer_id: 1,
    customer_name: 'ລູກຄ້າທົ່ວໄປ',
    customer_phone: '',
    items: [
      { id: 21, name: 'Coca-Cola', brand: 'Coca-Cola', unit: 'ບອດ', quantity: 24, price: 13000, totalPrice: 312000, image: '🥤' }
    ],
    total: 312000,
    created_at: new Date('2025-01-02T16:20:00'),
    status: 'ຊຳລະແລ້ວ',
    payments: [
      { method: 'ບັດເຄຣດິດ', amount: 312000, date: new Date('2025-01-02T16:20:00') }
    ]
  },
  {
    id: 'B250103005',
    customer_id: 5,
    customer_name: 'ນາງແສງ ທອງດີ',
    customer_phone: '020-5555666',
    items: [
      { id: 11, name: 'Galaxy S24', brand: 'Samsung', unit: 'ລູກ', quantity: 1, price: 45000000, totalPrice: 45000000, image: '📱' },
      { id: 18, name: 'ເກີບ Nike Air Max', brand: 'Nike', unit: 'ໜ່ວຍ', quantity: 1, price: 1200000, totalPrice: 1200000, image: '👟' }
    ],
    total: 46200000,
    created_at: new Date('2025-01-03T11:10:00'),
    status: 'ຊຳລະບາງສ່ວນ',
    payments: [
      { method: 'ເງິນສົດ', amount: 20000000, date: new Date('2025-01-03T11:15:00') },
      { method: 'ບັດເຄຣດິດ', amount: 10000000, date: new Date('2025-01-03T11:20:00') }
    ]
  }
];

const formatPrice = (price) => {
  return new Intl.NumberFormat('lo-LA').format(price);
};

const ViewBillsPage = () => {
  const [bills, setBills] = useState(mockBills);
  const [activeTab, setActiveTab] = useState('overview'); // overview, bills
  const [selectedBill, setSelectedBill] = useState(null);
  const [showBillDetail, setShowBillDetail] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Handlers
  const handleViewBill = (bill) => {
    setSelectedBill(bill);
    setShowBillDetail(true);
  };

  const handleCloseBillDetail = () => {
    setShowBillDetail(false);
    setSelectedBill(null);
  };

  const handleOpenPayment = (bill) => {
    setSelectedBill(bill);
    setShowPaymentModal(true);
  };

  const handleClosePayment = () => {
    setShowPaymentModal(false);
    setSelectedBill(null);
  };

  const handleProcessPayment = (paymentData) => {
    const newPayment = {
      ...paymentData,
      date: new Date()
    };

    const updatedBill = {
      ...selectedBill,
      payments: [...(selectedBill.payments || []), newPayment]
    };

    // Calculate new status
    const totalPaid = updatedBill.payments.reduce((sum, payment) => sum + payment.amount, 0);
    const remaining = updatedBill.total - totalPaid;
    updatedBill.status = remaining <= 0 ? 'ຊຳລະແລ້ວ' : 'ຊຳລະບາງສ່ວນ';

    setBills(bills.map(bill => 
      bill.id === selectedBill.id ? updatedBill : bill
    ));

    alert(`ບັນທຶກການຊຳລະສຳເລັດ!\nຈຳນວນ: ${formatPrice(paymentData.amount)} ກີບ\nວິທີຊຳລະ: ${paymentData.method}`);
    handleClosePayment();
  };

  const handlePrintBill = (bill) => {
    alert(`ກຳລັງພີມບິນເລກທີ: ${bill.id}`);
  };

  const handleExportReport = () => {
    alert('ກຳລັງນຳອອກລາຍງານ...');
  };

  const handleNavigateToBills = () => {
    setActiveTab('bills');
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2 sm:gap-3">
          <FileText size={28} className="text-blue-600 sm:w-8 sm:h-8" />
          ເບິ່ງບິນ ແລະ ຈັດການການຊຳລະ
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">ກວດສອບ ຈັດການບິນ ແລະ ຕິດຕາມການຊຳລະ</p>
      </div>

      {/* Tab Navigation - Mobile Optimized */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 px-4 sm:px-6 py-3 font-medium transition-colors text-sm sm:text-base ${
              activeTab === 'overview' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <TrendingUp size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">ສະຫຼຸບ</span>
              <span className="sm:hidden">ໜ້າຫຼັກ</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('bills')}
            className={`flex-1 px-4 sm:px-6 py-3 font-medium transition-colors text-sm sm:text-base ${
              activeTab === 'bills' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <FileText size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">ລາຍການບິນ</span>
              <span className="sm:hidden">ບິນ</span>
            </div>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <BillOverview
              bills={bills}
              onNavigateToBills={handleNavigateToBills}
              onExportReport={handleExportReport}
            />
          )}

          {/* Bills Tab */}
          {activeTab === 'bills' && (
            <BillList
              bills={bills}
              onViewBill={handleViewBill}
              onPrintBill={handlePrintBill}
              onOpenPayment={handleOpenPayment}
            />
          )}
        </div>
      </div>

      {/* Bill Detail Modal */}
      <BillDetailModal
        bill={selectedBill}
        isOpen={showBillDetail}
        onClose={handleCloseBillDetail}
        onPrintBill={handlePrintBill}
        onOpenPayment={handleOpenPayment}
      />

      {/* Payment Modal */}
      <PaymentModal
        bill={selectedBill}
        isOpen={showPaymentModal}
        onClose={handleClosePayment}
        onProcessPayment={handleProcessPayment}
      />
    </div>
  );
};

export default ViewBillsPage;