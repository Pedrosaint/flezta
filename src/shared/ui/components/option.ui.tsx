import React from 'react';

interface OptionItemProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    destructive?: boolean;
}

const OptionItem = ({
    icon,
    label,
    onClick,
    destructive = false,
}: OptionItemProps) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-200 group cursor-pointer `}
        >
            <span className={`transition-transform duration-200 group-hover:scale-110 
                ${destructive ? 'text-red-500' : 'text-gray-900'}`}>
                {icon}
            </span>
            <span className="text-base font-medium">{label}</span>
        </button>
    );
};

export default OptionItem;