
const Step = ({
    label,
    status,
}: {
    label: string;
    status: "current" | "completed" | "upcoming";
}) => {
    return (
        <div className="flex items-center gap-6">
            {/* Circle */}
            <div
                className={`w-6 h-6 rounded-full flex items-center justify-center
        ${status === "current"
                        ? "border-[1px] border-[#0D3B2E] bg-[#CFEFE6]"
                        : status === "completed"
                            ? "border-[1px] border-[#0D3B2E] bg-[#CFEFE6]"
                            : "border-[1px] border-[#D9D9D9]"
                    }`}
            >
                <div
                    className={`w-4 h-4 rounded-full ${status === "current"
                        ? "bg-[#CFCFCF]"
                        : status === "completed"
                            ? "bg-[#0D3B2E]"
                            : "bg-[#CFCFCF]"
                        }`}
                />
            </div>

            {/* Label */}
            <span
                className={`text-xl ${status === "current"
                    ? "text-black font-medium"
                    : status === "completed"
                        ? "text-black font-medium"
                        : "text-black"
                    }`}
            >
                {label}
            </span>
        </div>
    );
}

export default Step;
