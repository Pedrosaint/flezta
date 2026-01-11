/* eslint-disable react-hooks/exhaustive-deps */
"use client";


import useAppLayoutHook from "@/shared/ui/hooks/app_layout.hook";
import { useEffect } from "react";

const DashboardView = () => {
  const { handleProtectedRoutes } = useAppLayoutHook();

  useEffect(() => {
    handleProtectedRoutes();
  }, []);

  return (
    <div className="text-4xl bg-amber-400 font-bold">
      My name is Jude Nwaolisa Pedro
    </div>
  );
};

export default DashboardView;
