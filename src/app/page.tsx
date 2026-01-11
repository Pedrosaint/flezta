import { homeRoute } from "@/core/routes/routeNames";
import { redirect } from "next/navigation";


const RootPage = () => {
    redirect(homeRoute);
}

export default RootPage;
