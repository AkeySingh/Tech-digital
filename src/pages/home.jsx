// src/pages/Home.jsx
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeServicesPreview from "../components/HomeServicesPreview";
import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HomeServicesPreview />
      <Testimonials />
      <CallToAction />
    </>
  );
}
