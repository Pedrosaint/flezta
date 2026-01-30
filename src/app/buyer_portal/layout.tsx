import PortalHeader from "@/shared/ui/layout/portal_header";
import PortalSidebar from "@/shared/ui/layout/portal_sidebar";
import WebsiteHeaderComponent from "@/shared/ui/layout/website_header.layout";

export default function BuyerPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Global Website Header */}
            <WebsiteHeaderComponent />

            {/* Portal-specific header */}
            <PortalHeader />

            {/* Portal body */}
            <div className="flex flex-1 py-8 mx-auto container">
                {/* Sidebar */}
                <PortalSidebar />

                {/* Page Content */}
                <main className="flex-1 ml-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
