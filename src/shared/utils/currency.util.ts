/**
 * Formats a number or string as a Naira currency string
 * @param amount - The value to format
 * @returns Formatted string (e.g., ₦1,000.00)
 */
export const formatNaira = (amount: number | string): string => {
    const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;

    if (isNaN(numericAmount)) {
        return "₦0.00";
    }

    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        currencyDisplay: "symbol",
    })
        .format(numericAmount)
        .replace("NGN", "₦");
};

/**
 * Formats a number or string as a Dollar currency string
 * @param amount - The value to format
 * @returns Formatted string (e.g., $1,000.00)
 */
export const formatDollar = (amount: number | string): string => {
    const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;

    if (isNaN(numericAmount)) {
        return "$0.00";
    }

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format(numericAmount);
};
