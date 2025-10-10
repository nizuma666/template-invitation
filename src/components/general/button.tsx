interface ButtonProps {
    label: string;
    onClick: () => void
}
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="rounded-lg bg-gradient-to-r from-[#DC667E] via-[#E09EAC] to-[#DC667E] px-6 py-4 text-subheading2 font-bold">{label}</button>
    )
}

export default Button