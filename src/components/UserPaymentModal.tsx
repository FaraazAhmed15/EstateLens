export default function UserPaymentModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">

        <h2 className="text-xl font-bold text-[#6D1B1C] mb-4">
          Complete Payment
        </h2>

        <p className="text-[#1F3A2E] mb-6">
          Scan the QR code or proceed with payment.
        </p>

        {/* Dummy payment button (replace later with real gateway) */}
        <button
          onClick={onSuccess}
          className="bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516]"
        >
          Confirm Payment
        </button>

        <button
          onClick={onClose}
          className="ml-4 bg-gray-300 text-[#1F3A2E] px-6 py-2 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}