import SettingsPage from "@/modules/setting/page/settings.page";
import { Suspense } from "react";


const Page = () => {
  return (
    <div>
      <Suspense>
        <SettingsPage />
      </Suspense>
    </div>
  );
}

export default Page;