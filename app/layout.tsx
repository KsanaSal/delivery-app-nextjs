import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./component/Header";
import Sidebar from "./component/shop/Sidebar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="flex flex-col gap-2">
                <Header />
                <main>
                    <div className="grow-full w-full">{children}</div>
                </main>
            </body>
        </html>
    );
}
