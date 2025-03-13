"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PricingPlans from "./components/PricingPlan";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import { ProcessAccordion } from "./components/ProcessAccordion";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <PricingPlans />
      <ProcessAccordion />
      <Blog />
      <Footer />
    </div>
  );
}
