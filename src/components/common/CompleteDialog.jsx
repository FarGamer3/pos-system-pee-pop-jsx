// src/components/Common/CompleteDialog.jsx

import React from 'react';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  X, 
  Home, 
  RefreshCw,
  Eye,
  Plus
} from 'lucide-react';

// Success Dialog Component
export const SuccessDialog = ({ 
  isOpen, 
  onClose, 
  title = "ບັນທຶກສຳເລັດ", 
  message = "ຂໍ້ມູນຂອງທ່ານໄດ້ຖືກບັນທຶກສຳເລັດແລ້ວ",
  primaryAction,
  secondaryAction
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="relative p-6 pb-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>

          {/* Message */}
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            {message}
          </p>

          {/* Actions */}
          <div className="space-y-3">
            {primaryAction && (
              <button
                onClick={primaryAction.onClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {primaryAction.icon}
                {primaryAction.label}
              </button>
            )}
            
            {secondaryAction && (
              <button
                onClick={secondaryAction.onClick}
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {secondaryAction.icon}
                {secondaryAction.label}
              </button>
            )}

            {!primaryAction && !secondaryAction && (
              <button
                onClick={onClose}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-medium transition-colors text-sm sm:text-base"
              >
                ຕົກລົງ
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Error Dialog Component
export const ErrorDialog = ({ 
  isOpen, 
  onClose, 
  title = "ເກີດຂໍ້ຜິດພາດ", 
  message = "ຂໍອະໄພ, ເກີດຂໍ້ຜິດພາດໃນການດຳເນີນງານ",
  primaryAction,
  secondaryAction
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="relative p-6 pb-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 text-center">
          {/* Error Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>

          {/* Message */}
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            {message}
          </p>

          {/* Actions */}
          <div className="space-y-3">
            {primaryAction && (
              <button
                onClick={primaryAction.onClick}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {primaryAction.icon}
                {primaryAction.label}
              </button>
            )}
            
            {secondaryAction && (
              <button
                onClick={secondaryAction.onClick}
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {secondaryAction.icon}
                {secondaryAction.label}
              </button>
            )}

            {!primaryAction && !secondaryAction && (
              <button
                onClick={onClose}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl font-medium transition-colors text-sm sm:text-base"
              >
                ຕົກລົງ
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Warning Dialog Component
export const WarningDialog = ({ 
  isOpen, 
  onClose, 
  title = "ແຈ້ງເຕືອນ", 
  message = "ກະລຸນາກວດສອບຂໍ້ມູນຂອງທ່ານອີກຄັ້ງ",
  primaryAction,
  secondaryAction
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="relative p-6 pb-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 text-center">
          {/* Warning Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>

          {/* Message */}
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            {message}
          </p>

          {/* Actions */}
          <div className="space-y-3">
            {primaryAction && (
              <button
                onClick={primaryAction.onClick}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {primaryAction.icon}
                {primaryAction.label}
              </button>
            )}
            
            {secondaryAction && (
              <button
                onClick={secondaryAction.onClick}
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {secondaryAction.icon}
                {secondaryAction.label}
              </button>
            )}

            {!primaryAction && !secondaryAction && (
              <button
                onClick={onClose}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-xl font-medium transition-colors text-sm sm:text-base"
              >
                ຕົກລົງ
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading Dialog Component
export const LoadingDialog = ({ 
  isOpen, 
  title = "ກຳລັງດຳເນີນການ", 
  message = "ກະລຸນາລໍຖ້າສັກຄູ່..."
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 overflow-hidden">
        {/* Content */}
        <div className="p-6 text-center">
          {/* Loading Spinner */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-blue-500"></div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>

          {/* Message */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

// Confirmation Dialog Component
export const ConfirmDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm,
  title = "ຢືນຢັນການດຳເນີນງານ", 
  message = "ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການດຳເນີນການນີ້?",
  confirmText = "ຢືນຢັນ",
  cancelText = "ຍົກເລີກ",
  type = "default" // default, danger, warning
}) => {
  if (!isOpen) return null;

  const getTypeConfig = () => {
    switch (type) {
      case 'danger':
        return {
          icon: <XCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />,
          bgColor: 'bg-red-100',
          buttonColor: 'bg-red-500 hover:bg-red-600'
        };
      case 'warning':
        return {
          icon: <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
          bgColor: 'bg-yellow-100',
          buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
        };
      default:
        return {
          icon: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
          bgColor: 'bg-blue-100',
          buttonColor: 'bg-blue-500 hover:bg-blue-600'
        };
    }
  };

  const typeConfig = getTypeConfig();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="relative p-6 pb-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 text-center">
          {/* Icon */}
          <div className={`w-16 h-16 sm:w-20 sm:h-20 ${typeConfig.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
            {typeConfig.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>

          {/* Message */}
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            {message}
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              {cancelText}
            </button>
            
            <button
              onClick={onConfirm}
              className={`flex-1 ${typeConfig.buttonColor} text-white py-3 px-4 rounded-xl font-medium transition-colors text-sm sm:text-base`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom hook for managing dialogs
export const useDialog = () => {
  const [dialogs, setDialogs] = React.useState({
    success: false,
    error: false,
    warning: false,
    loading: false,
    confirm: false
  });

  const showSuccess = () => setDialogs(prev => ({ ...prev, success: true }));
  const showError = () => setDialogs(prev => ({ ...prev, error: true }));
  const showWarning = () => setDialogs(prev => ({ ...prev, warning: true }));
  const showLoading = () => setDialogs(prev => ({ ...prev, loading: true }));
  const showConfirm = () => setDialogs(prev => ({ ...prev, confirm: true }));

  const hideSuccess = () => setDialogs(prev => ({ ...prev, success: false }));
  const hideError = () => setDialogs(prev => ({ ...prev, error: false }));
  const hideWarning = () => setDialogs(prev => ({ ...prev, warning: false }));
  const hideLoading = () => setDialogs(prev => ({ ...prev, loading: false }));
  const hideConfirm = () => setDialogs(prev => ({ ...prev, confirm: false }));

  const hideAll = () => setDialogs({
    success: false,
    error: false,
    warning: false,
    loading: false,
    confirm: false
  });

  return {
    dialogs,
    showSuccess,
    showError,
    showWarning,
    showLoading,
    showConfirm,
    hideSuccess,
    hideError,
    hideWarning,
    hideLoading,
    hideConfirm,
    hideAll
  };
};

// Example usage components
export const ExampleUsage = () => {
  const { dialogs, showSuccess, showError, showWarning, showConfirm, hideAll } = useDialog();

  const handleSaveSuccess = () => {
    showSuccess();
  };

  const handleSaveError = () => {
    showError();
  };

  const handleDelete = () => {
    // Show confirmation first
    showConfirm();
  };

  return (
    <div className="p-4 space-y-4">
      <button 
        onClick={handleSaveSuccess}
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Test Success Dialog
      </button>
      
      <button 
        onClick={handleSaveError}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Test Error Dialog
      </button>

      {/* Success Dialog */}
      <SuccessDialog
        isOpen={dialogs.success}
        onClose={hideAll}
        title="ບັນທຶກສິນຄ້າສຳເລັດ"
        message="ສິນຄ້າໃໝ່ຂອງທ່ານໄດ້ຖືກເພີ່ມເຂົ້າໃນລະບົບແລ້ວ"
        primaryAction={{
          label: "ເບິ່ງສິນຄ້າ",
          icon: <Eye size={18} />,
          onClick: () => {
            hideAll();
            // Navigate to products list
          }
        }}
        secondaryAction={{
          label: "ເພີ່ມສິນຄ້າອື່ນ",
          icon: <Plus size={18} />,
          onClick: () => {
            hideAll();
            // Reset form for new product
          }
        }}
      />

      {/* Error Dialog */}
      <ErrorDialog
        isOpen={dialogs.error}
        onClose={hideAll}
        title="ບັນທຶກບໍ່ສຳເລັດ"
        message="ເກີດຂໍ້ຜິດພາດໃນການເຊື່ອມຕໍ່ເຄືອຂ່າຍ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ"
        primaryAction={{
          label: "ລອງໃໝ່",
          icon: <RefreshCw size={18} />,
          onClick: () => {
            hideAll();
            // Retry save operation
          }
        }}
        secondaryAction={{
          label: "ກັບໜ້າຫຼັກ",
          icon: <Home size={18} />,
          onClick: () => {
            hideAll();
            // Navigate to home
          }
        }}
      />
    </div>
  );
};

export default {
  SuccessDialog,
  ErrorDialog,
  WarningDialog,
  LoadingDialog,
  ConfirmDialog,
  useDialog,
  ExampleUsage
};