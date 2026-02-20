'use client';

import Step from "@/shared/ui/components/step.ui";
import { usePathname } from "next/navigation";



export default function SellerAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const steps = [
    { label: "Identity verification", key: "identity" },
    { label: "Store setup", key: "store" },
    { label: "Account setup", key: "account" },
    { label: "Verify  & Submit", key: "verify" },
  ];

  const currentIndex = steps.findIndex((step) =>
    pathname?.includes(step.key)
  );


  return (
    <div className="h-screen grid lg:grid-cols-[43%_57%] overflow-hidden">
      {/* LEFT SIDE */}
      <div className="bg-[#DDFFF4] px-10 xl:px-20 py-20 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-black">
            Setup your account
          </h1>

          <p className="mt-2 text-sm text-gray-700">
            Let’s get you up and running immediately.
            <br />
            Kindly proceed to verify and setup your store
          </p>

          <div className="mt-12 space-y-10">
            {steps.map((step, index) => {
              let status: "current" | "completed" | "upcoming" = "upcoming";

              if (index < currentIndex) status = "completed";
              if (index === currentIndex) status = "current";

              return (
                <Step
                  key={step.key}
                  label={step.label}
                  status={status}
                />
              );
            })}
          </div>

        </div>

        <div className="bg-[#003625] text-white p-6 rounded-[20px]">
          <p className="text-sm">
            Verified sellers make 10x more sales than unverified sellers.
            <br />
            You can boost a product to get even better visibility and more sales.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white overflow-y-auto flex justify-center pt-20">
        <div className="w-full px-10 xl:px-30">
          {children}
        </div>
      </div>

    </div>

  );
}
