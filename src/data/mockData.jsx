// src/data/mockData.jsx

export const mockBrands = [
  { id: 1, name: 'ຫົວເສືອ' },
  { id: 2, name: 'Beer Lao' },
  { id: 3, name: 'Apple' },
  { id: 4, name: 'Samsung' },
  { id: 5, name: 'Pepsi' },
  { id: 6, name: 'Nike' },
  { id: 7, name: 'Adidas' },
  { id: 8, name: 'Coca-Cola' }
];

export const mockUnits = [
  { id: 1, name: 'ແກັດ' },
  { id: 2, name: 'ແພັດ' },
  { id: 3, name: 'ບອດ' },
  { id: 4, name: 'ລູກ' },
  { id: 5, name: 'ກິໂລ' },
  { id: 6, name: 'ແຫຼມ' },
  { id: 7, name: 'ໜ່ວຍ' },
  { id: 8, name: 'ຊຸດ' }
];

export const mockCustomers = [
  { id: 1, name: 'ລູກຄ້າທົ່ວໄປ', phone: '' },
  { id: 2, name: 'ສົມຊາຍ ວົງສະວັນ', phone: '020-1234567' },
  { id: 3, name: 'ນາງສີ ພົມມະວົງ', phone: '020-7654321' },
  { id: 4, name: 'ທ້າວບຸນມີ ສີໄຕ', phone: '020-9876543' },
  { id: 5, name: 'ນາງແສງ ທອງດີ', phone: '020-5555666' },
  { id: 6, name: 'ສົມພອນ ລາວົງ', phone: '020-7777888' }
];

export const mockProducts = [
  { id: 1, name: 'ນ້ຳໃຫຍ່', brand_id: 1, unit_id: 1, price: 15000, image: '🥤' },
  { id: 2, name: 'ນ້ຳໃຫຍ່', brand_id: 1, unit_id: 2, price: 180000, image: '📦' },
  { id: 3, name: 'ນ້ຳເຢັນ', brand_id: 1, unit_id: 1, price: 12000, image: '🥤' },
  { id: 4, name: 'ນ້ຳເຢັນ', brand_id: 1, unit_id: 2, price: 150000, image: '📦' },
  { id: 5, name: 'Beer Lao ແດງ', brand_id: 2, unit_id: 3, price: 25000, image: '🍺' },
  { id: 6, name: 'Beer Lao ດຳ', brand_id: 2, unit_id: 3, price: 28000, image: '🍺' },
  { id: 7, name: 'Beer Lao ແດງ', brand_id: 2, unit_id: 2, price: 300000, image: '📦' },
  { id: 8, name: 'iPhone 15', brand_id: 3, unit_id: 4, price: 50000000, image: '📱' },
  { id: 9, name: 'iPhone 15 Pro', brand_id: 3, unit_id: 4, price: 60000000, image: '📱' },
  { id: 10, name: 'iPhone 15 Pro Max', brand_id: 3, unit_id: 4, price: 70000000, image: '📱' },
  { id: 11, name: 'Galaxy S24', brand_id: 4, unit_id: 4, price: 45000000, image: '📱' },
  { id: 12, name: 'Galaxy S24 Ultra', brand_id: 4, unit_id: 4, price: 55000000, image: '📱' },
  { id: 13, name: 'Galaxy A55', brand_id: 4, unit_id: 4, price: 15000000, image: '📱' },
  { id: 14, name: 'Pepsi', brand_id: 5, unit_id: 3, price: 12000, image: '🥤' },
  { id: 15, name: '7Up', brand_id: 5, unit_id: 3, price: 12000, image: '🥤' },
  { id: 16, name: 'Pepsi', brand_id: 5, unit_id: 2, price: 144000, image: '📦' },
  { id: 17, name: 'ເສື້ອ Nike Air', brand_id: 6, unit_id: 4, price: 850000, image: '👕' },
  { id: 18, name: 'ເກີບ Nike Air Max', brand_id: 6, unit_id: 7, price: 1200000, image: '👟' },
  { id: 19, name: 'ເສື້ອ Adidas Original', brand_id: 7, unit_id: 4, price: 750000, image: '👕' },
  { id: 20, name: 'ເກີບ Adidas Superstar', brand_id: 7, unit_id: 7, price: 950000, image: '👟' },
  { id: 21, name: 'Coca-Cola', brand_id: 8, unit_id: 3, price: 13000, image: '🥤' },
  { id: 22, name: 'Coca-Cola', brand_id: 8, unit_id: 2, price: 156000, image: '📦' },
  { id: 23, name: 'Sprite', brand_id: 8, unit_id: 3, price: 13000, image: '🥤' },
  { id: 24, name: 'Fanta', brand_id: 8, unit_id: 3, price: 13000, image: '🥤' }
];

// Mock bills data for ViewBillsPage
export const mockBills = [
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
    status: 'ຊຳລະແລ້ວ'
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
    status: 'ລໍຖ້າຊຳລະ'
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
    status: 'ຊຳລະແລ້ວ'
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
    status: 'ຊຳລະແລ້ວ'
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
    status: 'ລໍຖ້າຊຳລະ'
  }
];

// Sales statistics
export const mockSalesStats = {
  today: {
    sales: 2156000,
    transactions: 8,
    avgTransaction: 269500
  },
  thisWeek: {
    sales: 15680000,
    transactions: 42,
    avgTransaction: 373333
  },
  thisMonth: {
    sales: 98536000,
    transactions: 156,
    avgTransaction: 631641
  },
  bestSellingProducts: [
    { id: 1, name: 'ນ້ຳໃຫຍ່', brand: 'ຫົວເສືອ', totalSold: 245, revenue: 3675000 },
    { id: 5, name: 'Beer Lao ແດງ', brand: 'Beer Lao', totalSold: 189, revenue: 4725000 },
    { id: 14, name: 'Pepsi', brand: 'Pepsi', totalSold: 167, revenue: 2004000 },
    { id: 21, name: 'Coca-Cola', brand: 'Coca-Cola', totalSold: 234, revenue: 3042000 },
    { id: 8, name: 'iPhone 15', brand: 'Apple', totalSold: 12, revenue: 600000000 }
  ]
};