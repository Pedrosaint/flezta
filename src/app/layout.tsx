/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from "next";
import  Providers  from "./providers";
import "../index.css";
import { Outfit } from "next/font/google";
import { Toaster } from "sonner";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Flezta Web",
    description: "Flezta Web Application",
    icons: {
        icon: "/favicon.png",
    },
};

const RootLayout =({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
      <html lang="en">
        <body
          className={`${outfit.className} bg-[#F9FAFB]`}
          suppressHydrationWarning
        >
          <Toaster richColors position="top-right" />
          <Providers>{children}</Providers>
        </body>
      </html>
    );
}


export default RootLayout;