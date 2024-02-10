import FeatureSection from "@/components/featuresection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-blue-500 to-purple-600 min-h-screen overflow-scroll">
      <Header />
      <Hero />
      <FeatureSection />
      <Footer />
    </div>
  );
}
