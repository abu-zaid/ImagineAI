import Navbar from "@/components/navabar";
import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Imagine AI",
  description: "You are only limited by your imagination!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-full overflow-y-auto">
      <div className="hidden md:flex md:flex-row w-64">
        <Sidebar />
      </div>
      <div className="flex-1 bg-gradient-to-b from-blue-500 to-purple-600">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
