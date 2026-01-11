'use client';

import { usePathname } from "next/navigation";
import LoginAvatar from "@/assets/vectors/login_vector.png";
import TopRightDecor from "@/assets/images/Top.png";
import BottomLeftDecor from "@/assets/images/Bottom.png";
import Avatar from "@/assets/vectors/Forgot password.png";
import { loginRoute } from "@/core/routes/routeNames";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isLoginPage = pathname === loginRoute;

    const avatarToShow = isLoginPage ? LoginAvatar : Avatar;

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/*=== LEFT SIDE ===*/}
            <div className="bg-[#04241A] p-12 text-white relative overflow-hidden rounded-[70px] m-5 xl:m-10 hidden lg:block">
                {/* === TOP-RIGHT DECORATION === */}
                <img
                    src={TopRightDecor.src}
                    className="absolute top-0 right-0 pointer-events-none"
                />

                {/* === BOTTOM-LEFT DECORATION === */}
                <img
                    src={BottomLeftDecor.src}
                    className="absolute bottom-0 left-0  pointer-events-none"
                />

                {/* === TEXT === */}
                <div className="mb-8 relative z-10 p-5">
                    <h1 className="text-4xl xl:text-5xl font-bold mb-4">
                        Start Shopping Today
                    </h1>
                    <p className="text-lg xl:text-xl">
                        Get personalized shopping experience on FLEZTA
                        <br />
                        when you sign in to your account.
                    </p>
                </div>

                {/* === AVATAR === */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
                    <img
                        src={avatarToShow.src}
                        alt="Shopping Avatar"
                        className="w-[600px] max-w-[500px] xl:max-w-[900px] h-auto object-contain"
                    />
                </div>
            </div>

            {/* === RIGHT (AUTH FORMS) === */}
            <div className="flex items-center justify-center xl:p-6">
                {children}
            </div>
        </div>
    );
}
