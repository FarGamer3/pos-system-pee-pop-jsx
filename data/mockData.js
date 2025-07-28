// src/data/mockData.js

export const mockBrands = [
  { id: 1, name: 'ຫົວເສືອ' },
  { id: 2, name: 'Beer Lao' },
  { id: 3, name: 'Apple' },
  { id: 4, name: 'Samsung' },
  { id: 5, name: 'Pepsi' }
];

export const mockUnits = [
  { id: 1, name: 'ແກັດ' },
  { id: 2, name: 'ແພັດ' },
  { id: 3, name: 'ບອດ' },
  { id: 4, name: 'ລູກ' },
  { id: 5, name: 'ກິໂລ' },
  { id: 6, name: 'ແຫຼມ' }
];

export const mockCustomers = [
  { id: 1, name: 'ລູກຄ້າທົ່ວໄປ', phone: '' },
  { id: 2, name: 'ສົມຊາຍ', phone: '020-1234567' },
  { id: 3, name: 'ນາງສີ', phone: '020-7654321' },
  { id: 4, name: 'ທ້າວບຸນມີ', phone: '020-9876543' }
];

export const mockProducts = [
  { id: 1, name: 'ນ້ຳໃຫຍ່', brand_id: 1, unit_id: 1, price: 15000, image: '🥤' },
  { id: 2, name: 'ນ້ຳໃຫຍ່', brand_id: 1, unit_id: 2, price: 180000, image: '📦' },
  { id: 3, name: 'ນ້ຳເຢັນ', brand_id: 1, unit_id: 1, price: 12000, image: '🥤' },
  { id: 4, name: 'ນ້ຳເຢັນ', brand_id: 1, unit_id: 2, price: 150000, image: '📦' },
  { id: 5, name: 'Beer Lao ແດງ', brand_id: 2, unit_id: 3, price: 25000, image: '🍺' },
  { id: 6, name: 'Beer Lao ດຳ', brand_id: 2, unit_id: 3, price: 28000, image: '🍺' },
  { id: 7, name: 'iPhone 15', brand_id: 3, unit_id: 4, price: 50000000, image: '📱' },
  { id: 8, name: 'iPhone 15 Pro', brand_id: 3, unit_id: 4, price: 60000000, image: '📱' },
  { id: 9, name: 'Galaxy S24', brand_id: 4, unit_id: 4, price: 45000000, image: '📱' },
  { id: 10, name: 'Galaxy S24 Ultra', brand_id: 4, unit_id: 4, price: 55000000, image: '📱' },
  { id: 11, name: 'Pepsi', brand_id: 5, unit_id: 3, price: 12000, image: '🥤' },
  { id: 12, name: '7Up', brand_id: 5, unit_id: 3, price: 12000, image: '🥤' }
];