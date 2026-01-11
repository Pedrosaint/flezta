import WebsiteFooterLayout from "@/shared/ui/layout/website_footer.layout";
import WebsiteHeaderLayout from "@/shared/ui/layout/website_header.layout";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <WebsiteHeaderLayout />

            {/* Main Content Area */}
            <main className="flex-1">
                {children}
            </main>

            <WebsiteFooterLayout />
        </div>
    );
}

export default WebsiteLayout;

