interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-gradient-to-r from-[#DC667E] via-[#E09EAC] to-[#DC667E] cursor-pointer px-6 py-3 text-subheading2 font-bold text-white flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
