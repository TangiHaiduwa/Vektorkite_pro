// components/Modal.jsx
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          {/* Content */}
          <div className="overflow-y-auto p-6 prose prose-blue max-w-none" style={{ maxHeight: 'calc(90vh - 80px)' }}>
            {children}
          </div>
          
          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
            <button
              onClick={onClose}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all"
            >
              Close & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;