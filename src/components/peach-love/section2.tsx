/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section2({ content }: { content: any }) {
    return (
        <div className="px-4 py-10 w-full">
            <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-heading1 font-bold text-color-rose4">{content.title}</p>
                    <p className="">{content.desc}</p>
                </div>
            </div>
        </div>
    )
}