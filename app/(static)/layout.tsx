import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-purple-600 h-full overflow-scroll" >
      <Header />
      {children}
    </div>
  );
}
