export default function PopUp({msg}: {msg: string}) {
    return (
        <div className="py-2 px-3 border border-white bg-[#5A7759] text-white z-99 rounded-xl font-bold text-nowrap">
            {msg}
        </div>
    )
}