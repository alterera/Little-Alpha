import Blogs from "@/components/Blogs";
import Curriculum from "@/components/Curriculum";
import Gallery from "@/components/Gallery";
import Growth from "@/components/Growth";
import Hero from "@/components/Hero/Hero";
import Learner from "@/components/Learner";
import Quote from "@/components/Quote";
import Testimonials from "@/components/Testimonials";
import Topbar from "@/components/Topbar";
import Video from "@/components/Video";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Hero />
      <Welcome />
      <Curriculum />
      <Quote />
      <Growth />
      <Learner />
      <Video />
      <Testimonials />
      <Blogs />
      <Gallery />
    </div>
  );
}
