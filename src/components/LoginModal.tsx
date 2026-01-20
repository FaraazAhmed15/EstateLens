'use client';

type LoginModalProps = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: LoginModalProps) {
  return (
    <>
      {/*overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}/>

      {/* modal*/}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-[#F4F1EC] w-[520px] rounded-xl shadow-2xl p-6 relative">

          {/* closing button */}
          <div className="flex justify-end  mt-6">

          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-[#6D1B1C] text-xl">
            ✕
          </button>
            </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-5">

            <LoginCard
              title="User Login"
              subtitle="Buyers / Renters"
              href="/login/user" />

            <LoginCard
              title="Owner Login"
              subtitle="Property Owners"
              href="/login/owner" />

            <LoginCard
              title="Developer Login"
              subtitle="Builders & Firms"
              href="/login/developer"/>

            <LoginCard
              title="Admin Login"
              subtitle="Platform Control"
              href="/login/admin" />

          </div>
        </div>
      </div>
    </>
  );
}

function LoginCard({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        bg-[#6D1B1C]
        text-white
        rounded-lg
        h-[110px]
        flex flex-col items-center justify-center
        gap-1
        transition
        hover:bg-[#561417]
        hover:scale-[1.03]
        shadow
      "
    >
      <span className="text-lg font-semibold">{title}</span>
      <span className="text-sm opacity-90">{subtitle}</span>
    </a>
  );
}