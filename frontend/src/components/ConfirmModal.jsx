import { AlertTriangle } from "lucide-react";

function ConfirmModal({ isOpen, onClose, onConfirm, title, message, loading }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-base-100 rounded-2xl shadow-xl w-full max-w-md p-6 animate-in fade-in zoom-in">
        {/* ICON */}
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 rounded-full bg-red-100">
            <AlertTriangle className="text-red-500 w-6 h-6" />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-lg font-semibold text-center mb-2">
          {title || "Are you sure?"}
        </h2>

        {/* MESSAGE */}
        <p className="text-sm text-base-content/70 text-center mb-6">
          {message || "This action cannot be undone."}
        </p>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg border border-base-300 hover:bg-base-200 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
