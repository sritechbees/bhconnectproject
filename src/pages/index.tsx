import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Hero from "@/home/herosection";
import ProductSection from "@/home/productsection";
import AboutSection from "@/home/aboutsection";
import PurposeSection from "@/home/purposesection";
import PhilosophySection from "@/home/philosophysection";
import CommitmentSection from "@/home/commitmentsection";
import ValuesSection from "@/home/valuessection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header/>
            <Hero/>
          <AboutSection/>
            <PhilosophySection/>
            <PurposeSection/>
            <CommitmentSection/>
            <ProductSection/>
            <ValuesSection/>
      <Footer/>
    </div>
  );
}
