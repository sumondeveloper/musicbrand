import FeaturedCourses from "@/components/FeaturedCourses";
import FeaturedSection from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
};
export default Home;
