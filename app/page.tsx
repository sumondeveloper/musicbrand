import FeaturedCourses from "@/components/FeaturedCourses";
import FeaturedSection from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import Webminers from "@/components/Webminers";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCard />
      <Webminers />
    </main>
  );
};
export default Home;
