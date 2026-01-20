export default function PaymentSuccessModal({
  isOpen,
  userId,
}: {
  isOpen: boolean;
  userId: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl text-center">
        <h2 className="text-xl font-bold text-green-600">
          Payment Successful 🎉
        </h2>
        <p className="mt-2">Your User ID: {userId}</p>
        <a href="/home-user-subscribed" className="mt-4 inline-block bg-[#6D1B1C] text-white px-6 py-2 rounded-md">
          Go to Subscribed Home
        </a>
      </div>
    </div>
  );
}