export const OrangeButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    className={`inline-flex items-center gap-2 bg-[#FF4E26] hover:bg-[#e8401e] text-white text-[15px] font-medium px-6 py-3 rounded-full hover:cursor-pointer transition-colors ${className}`}
  >
    {children}
  </button>
);