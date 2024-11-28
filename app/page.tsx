import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
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
      <Instructor />
    </main>
  );
};
export default Home;
