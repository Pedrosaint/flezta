'use client';

import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Shared base types
// ─────────────────────────────────────────────────────────────────────────────

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

interface BaseButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: ButtonType;
    disabled?: boolean;
    className?: string;
    size?: ButtonSize;
    fullWidth?: boolean;
    id?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Size map helpers
// ─────────────────────────────────────────────────────────────────────────────

const sizeMap: Record<ButtonSize, string> = {
    sm: 'py-2.5 text-[10.5px]',
    md: 'py-3 text-sm',
    lg: 'py-4 text-base',
};

const innerRadiusMap: Record<ButtonSize, string> = {
    sm: 'rounded-[13px]',
    md: 'rounded-[14px]',
    lg: 'rounded-[14px]',
};

// ─────────────────────────────────────────────────────────────────────────────
// PrimaryButton (Green)
// Solid #003625 with flipping hover to light green
// ─────────────────────────────────────────────────────────────────────────────

export const PrimaryButton = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    size = 'lg',
    fullWidth = false,
    id,
}: BaseButtonProps) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`group p-0.5 border border-[#003625] backdrop-blur-[10px] rounded-[18px] cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed transition-all
                ${fullWidth ? 'w-full' : ''}
                ${className}`}
        >
            <div className={`relative w-full ${innerRadiusMap[size]} overflow-hidden bg-[#003625] ${sizeMap[size]}`}>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#DDFFF4] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-[#003625] flex gap-2 items-center px-4">
                        {children}
                    </span>
                </div>

                {/* Default State */}
                <div className="relative z-10 flex gap-2 items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0 px-4">
                    {children}
                </div>
            </div>
        </button>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// GradientButton (Orange)
// Orange gradient with flipping hover to light orange
// ─────────────────────────────────────────────────────────────────────────────

interface GradientButtonProps extends BaseButtonProps {
    borderVariant?: 'orange' | 'green';
}

export const GradientButton = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    size = 'lg',
    fullWidth = false,
    borderVariant = 'orange',
    id,
}: GradientButtonProps) => {
    const borderColor = borderVariant === 'orange' ? 'border-[#FDA106]' : 'border-[#003625]';

    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`group p-0.5 border ${borderColor} backdrop-blur-[10px] rounded-[18px] cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed transition-all
                ${fullWidth ? 'w-full' : ''}
                ${className}`}
        >
            <div className={`relative w-full ${innerRadiusMap[size]} overflow-hidden bg-gradient ${sizeMap[size]}`}>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-[#FDA106] font-semibold flex gap-2 items-center px-4">
                        {children}
                    </span>
                </div>

                {/* Default State */}
                <div className="relative z-10 font-semibold flex gap-2 items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0 px-4">
                    {children}
                </div>
            </div>
        </button>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// SecondaryButton (Light Green Ghost)
// Light green with flip to solid green
// ─────────────────────────────────────────────────────────────────────────────

export const SecondaryButton = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    size = 'lg',
    fullWidth = false,
    id,
}: BaseButtonProps) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`group p-0.5 border border-[#003625] backdrop-blur-[10px] rounded-[18px] cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed transition-all
                ${fullWidth ? 'w-full' : ''}
                ${className}`}
        >
            <div className={`relative w-full ${innerRadiusMap[size]} overflow-hidden bg-[#DDFFF4] ${sizeMap[size]}`}>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#003625] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white font-semibold flex gap-2 items-center px-4">
                        {children}
                    </span>
                </div>

                {/* Default State */}
                <div className="relative z-10 font-semibold flex gap-2 items-center justify-center text-[#003625] transition-opacity duration-300 group-hover:opacity-0 px-4">
                    {children}
                </div>
            </div>
        </button>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// WarningButton (Light Orange Ghost)
// Light orange with flip to solid orange
// ─────────────────────────────────────────────────────────────────────────────

export const WarningButton = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    size = 'lg',
    fullWidth = false,
    id,
}: BaseButtonProps) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`group p-0.5 border border-[#FDA106] backdrop-blur-[10px] rounded-[18px] cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed transition-all
                ${fullWidth ? 'w-full' : ''}
                ${className}`}
        >
            <div className={`relative w-full ${innerRadiusMap[size]} overflow-hidden bg-[#FFF4EA] ${sizeMap[size]}`}>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#FDA106] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white font-semibold flex gap-2 items-center px-4">
                        {children}
                    </span>
                </div>

                {/* Default State */}
                <div className="relative z-10 font-semibold flex gap-2 items-center justify-center text-[#FDA106] transition-opacity duration-300 group-hover:opacity-0 px-4">
                    {children}
                </div>
            </div>
        </button>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// DarkButton (Grey/Black)
// Solid grey with flip to light grey or emerald
// ─────────────────────────────────────────────────────────────────────────────

export const DarkButton = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    size = 'lg',
    fullWidth = false,
    id,
}: BaseButtonProps) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`group p-0.5 border border-[#FDA106] backdrop-blur-[10px] rounded-[18px] cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed transition-all
                ${fullWidth ? 'w-full' : ''}
                ${className}`}
        >
            <div className={`relative w-full ${innerRadiusMap[size]} overflow-hidden bg-[#263238] ${sizeMap[size]}`}>
                {/* Hover Overlay */}
                {/* <div className="absolute inset-0 bg-emerald-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-[#052214] font-semibold flex gap-2 items-center px-4">
                        {children}
                    </span>
                </div> */}

                {/* Default State */}
                <div className="relative z-10 font-semibold flex gap-2 items-center justify-center text-white transition-opacity duration-300 px-4">
                    {children}
                </div>
            </div>
        </button>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// DangerButton (Red Ghost)
// Red outline with red text, flip to solid red
// ─────────────────────────────────────────────────────────────────────────────

export const DangerButton = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    size = 'lg',
    fullWidth = false,
    id,
}: BaseButtonProps) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`group p-0.5 border border-red-500 backdrop-blur-[10px] rounded-[18px] cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed transition-all
                ${fullWidth ? 'w-full' : ''}
                ${className}`}
        >
            <div className={`relative w-full ${innerRadiusMap[size]} overflow-hidden bg-white ${sizeMap[size]}`}>
                {/* Hover Overlay */}
                {/* <div className="absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white font-semibold flex gap-2 items-center px-4">
                        {children}
                    </span>
                </div> */}

                {/* Default State */}
                <div className="relative z-10 font-semibold flex gap-2 items-center justify-center text-red-500 transition-opacity duration-300 px-4">
                    {children}
                </div>
            </div>
        </button>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// GradientOutlineButton
// Amber gradient outlined button with corner accents — used for Download Receipt
// ─────────────────────────────────────────────────────────────────────────────

export const GradientOutlineButton = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    fullWidth = false,
    id,
}: BaseButtonProps) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`rounded-[14px] border border-[#FDA106] bg-[#FFF4EA] py-4 text-sm font-semibold
                flex items-center justify-center cursor-pointer relative
                before:content-[''] before:absolute before:top-0 before:left-2 before:w-6 before:h-2
                before:border-t before:border-[#FDA106] before:border-l before:rounded-tl-[4px]
                after:content-[''] after:absolute after:bottom-0 after:right-2 after:w-6 after:h-2
                after:border-b after:border-[#FDA106] after:border-r after:rounded-br-[4px]
                disabled:opacity-50 disabled:cursor-not-allowed transition-all
                ${fullWidth ? 'w-full' : ''}
                ${className}`}
        >
            <span className="gradient-text">{children}</span>
        </button>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// IconCloseButton
// Small close (X) icon button – used in modal headers
// ─────────────────────────────────────────────────────────────────────────────

interface IconCloseButtonProps {
    onClick: () => void;
    className?: string;
    id?: string;
}

export const IconCloseButton = ({ onClick, className = '', id }: IconCloseButtonProps) => {
    return (
        <button
            id={id}
            type="button"
            onClick={onClick}
            className={`w-10 h-10 flex items-center justify-center text-gray-500
                hover:text-gray-700 transition-colors cursor-pointer ${className}`}
            aria-label="Close"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </button>
    );
};
