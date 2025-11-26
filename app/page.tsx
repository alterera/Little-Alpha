import Blogs from "@/components/Blogs";
import Campus from "@/components/Campus";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CTA from "@/components/CTA";
import Curriculum from "@/components/Curriculum";
import Facilities from "@/components/Facilities";
import Featured from "@/components/Featured";
import Growth from "@/components/Growth";
import Hero from "@/components/Hero/Hero";
import Learner from "@/components/Learner";
import Quote from "@/components/Quote";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Featured /> */}
      <Welcome />
      <Curriculum />
      <Facilities />
      <Quote />
      <Campus />
      <Growth />
      <Learner />
      <Video />
      <CTA />
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
}
