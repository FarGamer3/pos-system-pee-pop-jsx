// src/utils/formatters.js

/**
 * ຟອແມັດລາຄາເງິນ
 * @param {number} price - ລາຄາ
 * @returns {string} - ລາຄາທີ່ຟອແມັດແລ້ວ
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('lo-LA').format(price);
};

/**
 * ຟອແມັດວັນທີ
 * @param {Date} date - ວັນທີ
 * @returns {string} - ວັນທີທີ່ຟອແມັດແລ້ວ
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('lo-LA');
};

/**
 * ຟອແມັດເວລາ
 * @param {Date} date - ວັນທີເວລາ
 * @returns {string} - ເວລາທີ່ຟອແມັດແລ້ວ
 */
export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('lo-LA');
};

/**
 * ຟອແມັດວັນທີເວລາ
 * @param {Date} date - ວັນທີເວລາ
 * @returns {string} - ວັນທີເວລາທີ່ຟອແມັດແລ້ວ
 */
export const formatDateTime = (date) => {
  return new Date(date).toLocaleString('lo-LA');
};

/**
 * ສ້າງເລກບິນ
 * @returns {string} - ເລກບິນ
 */
export const generateBillNumber = () => {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2);
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  
  return `B${year}${month}${day}${random}`;
};