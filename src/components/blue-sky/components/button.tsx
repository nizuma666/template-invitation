interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border border-white bg-blue-sky cursor-pointer px-5  py-2 text-subheading2 font-bold text-white flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
