export default function PopUp({msg}: {msg: string}) {
    return (
        <div className=" py-2 px-3 border border-white bg-rose3 text-rose1 z-99 rounded-xl font-bold text-nowrap">
            {msg}
        </div>
    )
}