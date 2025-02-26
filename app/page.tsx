//import { About } from "@/components/sections/about";
//import { Footer } from "@/components/sections/footer";
import AboutCommunity from "@/components/sections/home/about-community";
import MainHome from "@/components/sections/home/main";
import SocialLinks from "@/components/sections/home/social-links";
//import { ParticlesHome } from "@/components/sections/particles-home";
//import { UsefulLinksHome } from "@/components/sections/useful-links-home";

export default function Home() {
  return (
    <div className="w-full h-full">
      <MainHome/>
      <AboutCommunity/>
      <SocialLinks/>
      {/*<ParticlesHome />

      <div className="relative z-10 p-4 bg-white md:p-10">
        <About />
        <UsefulLinksHome />
        <Footer />
      </div>
      */}
    </div>
  );
}
