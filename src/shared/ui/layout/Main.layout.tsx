import { Link, Outlet } from "react-router";
// import HeaderComponent from "../components/header.component";
import { Toaster } from "sonner";
// import SidebarComponent from "../components/sidebar.component";

const AppLayout = () => {
  return (
    <main className="min-h-screen w-full bg-gray-50" >

        <title>Flezta</title>
        <meta
            name="description"
            content="
                Campus Shelf is a digital textbook platform for Nigerian universities 
                where lecturers can upload and sell course-linked books and handouts, 
                while students can securely purchase, verify, and read them offline within 
                the app.
            "
        />
        <meta
            name="keywords"
            content="
                Campus Shelf,
                digital textbooks Nigeria,
                university e-learning platform,
                lecturers upload books,
                lecturers handouts platform,
                sell handouts online,
                digital course materials,
                academic publishing platform,
                student book marketplace,
                course-based digital books,
                e-handouts for Nigerian universities,
                buy university textbooks online,
                secure offline reading app,
                student course resources,
                digital receipts for book purchases,
                institution-based e-library,
                non-shareable academic books,
                course-linked learning materials,
                lecturer content monetization,
                student digital learning portal,
                affordable academic materials,
                Nigerian university app,
                digital education platform,
                secure academic book sales
            "
        />
        <meta
            name="author"
            content="Osondu Tochukwu (tosolife@yahoo.com, +234 8036802243)"
        />
        <link rel="author" href="https://www.linkedin.com/in/osondu-tochukwu-81359a96/" />

        <section className="h-screen w-full relative overflow-hidden bg-appBackground-light">

            {/*==== Header ====*/}
            <header>
                {/* <HeaderComponent /> */}
            </header>

            <div className="h-full pt-20 flex">
                {/*==== Side Bar ====*/}
                <aside className="h-full w-full md:w-[300px] hidden lg:block bg-appBackground-light shadow">
                    {/* <SidebarComponent /> */}
                </aside>

                {/*==== Content Area ====*/}
                <section className="w-full lg:w-[calc(100%-300px)] pt-10 overflow-y-scroll
                [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-200">
                    <div className="min-h-[calc(100%-100px)] ">
                        <Outlet  />
                    </div>

                    {/*==== Footer ====*/}
                    <footer className="mt-10">
                        <div className="w-full bg-appBackground-dark py-5 text-center text-sm">
                            <p className="text-white">
                                &copy; 2025 CampusShelf. All rights reserved. |{' '}
                                <Link to="#" className="text-white/50 hover:text-blue-400">
                                    Privacy Policy
                                </Link>{' '}
                                |{' '}
                                <Link to="#" className="text-white/50 hover:text-blue-400">
                                    Terms of Service
                                </Link>
                            </p>
                        </div>
                    </footer>
                </section>
            </div>

            <Toaster position="top-right" richColors />
        </section>
    </main>
  );
};

export default AppLayout;