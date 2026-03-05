"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="font-figtree text-[16px] font-bold text-black transition-colors tracking-[2%]">
    {children}
  </a>
);

const OrangeButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    className={`inline-flex items-center gap-2 bg-[#FF4E26] hover:bg-[#e8401e] text-white text-[15px] font-medium px-6 py-3 rounded-full hover:cursor-pointer transition-colors ${className}`}
  >
    {children}
  </button>
);


const mediaLogos = [
  { src: "/AP_news.svg", alt: "AP News" },
  { src: "/Forbes.svg", alt: "Forbes" },
  { src: "/yahoo_news.svg", alt: "Yahoo News" },
  { src: "/business_insider.svg", alt: "Business Insider" },
  { src: "/Newsmax.svg", alt: "Newsmax" },
  { src: "/apple_news.svg", alt: "Apple News" },
  { src: "/inc.svg", alt: "Inc." },
  { src: "/entrepreneur.svg", alt: "Entrepreneur" },
];


const podcastepisodes = [
  {
    img: "/podcast1.png",
    title: "How BJJ teaches resilience, focus, and problem-solving",
    id: 1,
    date: "Nov 24, 2025",
    hasPlay: true,
  },
  {
    img: "/podcast2.png",
    title: "How Predictable Scaling can Help Grow, Scale and Automate your Business in 2026",
    id: 2,
    date: "Nov 24, 2025",
    hasPlay: false,
  },
  {
    img: "/podcast3.png",
    title: "Full Marketing Strategy for Business Growth in 2026",
    id: 2,
    date: "Nov 24, 2025",
    hasPlay: false,
  },
];


const PodcastEpisodesCard = ({
  img,
  title,
  id,
  date,
  hasPlay,
}: {
  img: string;
  title: string;
  id: number,
  date: string;
  hasPlay: boolean;
}) => {

  const textColorClass = hasPlay ? 'text-white' : 'text-black';
  const textContainerClass = hasPlay ? 'absolute bottom-0 left-0 right-0 p-6 z-20' : 'mt-4'; 

  return (
    <a
      href="#"
      className={`flex flex-col group cursor-pointer relative overflow-hidden rounded-2xl ${textColorClass}`}
    >

      <div className={`relative w-full aspect-video bg-black rounded-2xl overflow-hidden ${hasPlay ? 'relative h-86.75' : 'aspect-video'}`}>
        <Image
          src={img}
          alt={title}
          width={380}
          height={hasPlay ? 347 : 212}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {hasPlay && (
          <>
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />      
          </>
        )}
      </div>

      <div className={textContainerClass}>
        <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
          EPISODE # {id} | {date}
        </p>
        <h3 className="text-2xl font-bold leading-tight">
          {title}
        </h3>
      </div>
    </a>
  );
};

export default function DavidKauzlaricWebsite() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Figtree&family=Inter:wght@400;500;600;700&display=swap');
        .font-anton { font-family: 'Anton', sans-serif; }
        .font-figtree { font-family: 'Figtree', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* NAV */}
      <header className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 h-23 flex items-center justify-between gap-8">
    
          <nav className="hidden md:flex items-center gap-13.5">
            <NavLink>Podcast</NavLink>
            <NavLink>Speaking</NavLink>
            <NavLink>Coaching</NavLink>
          </nav>

          
          <div className="shrink-0 mx-auto md:mx-0">
            <Image src="/header.svg" alt="David Kauzlaric Logo" width={110} height={54} />
          </div>

   
          <nav className="hidden md:flex items-center gap-7">
            <NavLink>Books</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
            <button aria-label="Search" className="text-black hover:cursor-pointer">
              <Image src="/search-icon.svg" alt="Search Icon" width={50} height={50} />
            </button>
          </nav>

          <button className="md:hidden flex flex-col gap-1.5" aria-label="Menu">
            <span className="w-6 h-0.5 bg-black block" />
            <span className="w-6 h-0.5 bg-black block" />
            <span className="w-6 h-0.5 bg-black block" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden min-h-115 md:min-h-130 px-6 md:px-20">
        <div className="bg-[#111111] max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 items-center gap-0 min-h-115 md:min-h-130 rounded-[54px]">
          <div className="py-14 md:py-20 z-10 relative">
            <h1 className="font-anton text-white text-[52px] md:text-[128px] leading-[100%] tracking-wide uppercase mb-5">
              DAVID{" "}
              <span className="relative inline-block">
                <Image src="/favicon.svg" alt="David Logo" width={230} height={200} className="inline-block -ml-4 -translate-y-1 max-w-3/6 md:max-w-full"/>
              </span>
              <br />
              KAUZLARIC
            </h1>
            <p className="text-white font-inter text-[16px] md:text-[21px] leading-[132%] max-w-[95%] my-6.75">
              Helping business owners navigate the journey from <strong>"stressed operator" to "wealthy owner"</strong> through strategy, acquisitions and digital dominance.
            </p>
            <OrangeButton>
              Work with Me <ArrowRight className="w-4 h-4" />
            </OrangeButton>
          </div>

         
          <div className="relative hidden sm:flex justify-end items-end h-full min-h-130">
            <Image src="/David-hero.png" width={519} height={400} alt="David Kauzlaric" className="absolute bottom-0 right-0 w-129.75 object-contain object-bottom"/>
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS BAR */}
      <section className="bg-white py-5 px-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between flex-wrap gap-6">
          {mediaLogos.map((logo) => (
            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={110} height={25} className="h-5 md:h-6 object-contain opacity-65 grayscale hover:opacity-100 hover:grayscale-0 transition-all"/>
          ))}
        </div>
      </section>

      {/* FEATURED EPISODES  */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-10">
            <h2 className="font-anton text-[42px] md:text-[62px] text-black leading-none">
              Featured Episodes
            </h2>
              <button className="hidden md:flex items-center gap-2 text-[15px] font-bold py-3.5 px-6 rounded-[44px] bg-[#F5F5F4] text-black hover:text-[#FF4E26] hover:cursor-pointer transition-colors">
                Find an Episode <ArrowRight className="w-6 h-6" />
              </button>
            </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full bg-[#F5F5F4] flex items-center justify-center hover:cursor-pointer transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  aria-label="Next"
                  className="w-10 h-10 rounded-full bg-[#F5F5F4] flex items-center justify-center hover:cursor-pointer transition-colors"
                >
                  <ArrowRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {podcastepisodes.map((ep, i) => (
              <PodcastEpisodesCard key={i} {...ep} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOK SECTION  */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-figtree text-[32px] font-semibold text-black tracking-[-2%] mb-2">
              My Books
            </p>
            <h2 className="font-anton text-[42px] md:text-[66px] text-black leading-[108%] tracking-[-1%] mb-5">
              Your Path to<br />Predictive Success
            </h2>
            <p className="font-inter text-[16px] md:text-[18px] text-black leading-[132%] tracking-[-1%] mb-8 max-w-lg">
              David Kauzlaric introduces Predictive Success, a deeply personal guide designed to help entrepreneurs streamline systems, create predictable growth, reclaim their time, and build a business that supports long-term freedom and retirement. 
            </p>
            <OrangeButton>
              Get My Book <ArrowRight className="w-4 h-4" />
            </OrangeButton>
          </div>

         
          <div className="flex justify-center md:justify-end relative">
            <Image src="/book.svg" alt="Predictive Success Book" width={260} height={320} className="h-full w-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="bg-[#F5F5F4] pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full h-full">
            <Image src="/David-about-me.png" alt="David Kauzlaric About me" width={600} height={800} className="w-full h-full rounded-2xl object-cover"/>
          </div>

          <div className="pb-16 md:pb-20">
            <p className="font-figtree text-[28px] font-bold text-black tracking-[-2%] mb-3">
              About Me
            </p>
            <h2 className="font-anton text-[42px] md:text-[60px] text-black leading-[108%] tracking-[-1%] mb-5">
              Helped 1,000+ Home Service Businesses Grow & Scale
            </h2>
            <p className="font-inter text-[16px] md:text-[19px] text-black leading-[132%] tracking-[-1%] mb-8 max-w-lg">
              I’m a serial entrepreneur, SEO strategist, Author and a <br></br>Co-founder of multiple performance-driven agencies. Whether it’s building a team, scaling operations, or dialing in your acquisition funnel, I help Home Service Business Owners grow with quiet precision and ruthless execution.
            </p>
            <button className="inline-flex items-center gap-3 text-[15px] font-bold bg-white text-black px-6 py-3 rounded-full hover:cursor-pointer transition-colors">
              Discover my story <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* COACHING PROGRAM */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="font-figtree text-[30px] font-semibold text-black tracking-[-2%] mb-3">
              My Coaching Program
            </p>
            <h2 className="font-anton text-[42px] md:text-[60px] text-black leading-[108%] tracking-[-1%] mb-5">
              A Program for<br />Predictable Scaling
            </h2>
            <p className="font-inter text-[16px] md:text-[18px] text-black leading-[132%] mb-8 max-w-lg">
              A comprehensive 12+ month coaching program designed for Home Service Business Owners who want to grow, scale, and automate their operations. This program helps entrepreneurs streamline systems, create predictable growth, reclaim their time, and build a business that supports long-term freedom and retirement. Delivered through the CIRCLE platform and integrated directly with your website for a seamless coaching experience.
            </p>
            <OrangeButton>
              Join the Program <ArrowRight className="w-6 h-6" />
            </OrangeButton>
          </div>

       
          <div className="flex justify-center md:justify-end">
            <Image width={100} height={100} src="/coaching-program.svg" alt="Predictable Scaling Coaching Program" className="w-65 md:w-full drop-shadow-2xl rounded-2xl" />
          </div>
        </div>
      </section>


      {/* FROM CTA */}
      <section className="bg-[#F5F5F4] flex justify-between w-full px-6  md:py-20 xl:px-0">
        <div id="form" className="relative bg-black z-0 w-full max-w-7xl mx-auto items-center min-h-115 md:min-h-130 rounded-[54px] overflow-hidden flex">
          <Image 
            src="/form-background.png" 
            alt="Form Background" 
            fill 
            quality={100}
            className="object-cover object-center z-0 hidden lg:block"
          />

          
          <div className="relative z-10 w-full px-4 py-12 lg:px-22 flex justify-center md:justify-end items-center">

            <div className="text-white w-full max-w-2xl text-center md:text-left">
              <p className="font-figtree text-[22px] font-semibold tracking-widest mb-3">
                Join Our Community
              </p>
              <h2 className="font-anton text-[48px] md:text-[64px] leading-[1.1] mb-4">
                1 Life-Changing<br />Newsletter.
              </h2>
              <p className="font-inter text-[16px] text-[#E0E3EC] mb-8">
                Weekly Simple, inspiring and direct Newsletter from David
              </p>
              
              <div className="flex flex-col lg:flex-row gap-3 justify-center lg:justify-start lg:max-w-full">
                <input
                  type="text"
                  placeholder="Name"
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}
                  className="flex-1 max-w-full lg:max-w-42 bg-white text-black placeholder:text-[#808080] px-5 py-3 rounded-full text-[15px] transition-colors backdrop-blur-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 max-w-full lg:max-w-42 bg-white text-black placeholder:text-[#808080] px-5 py-3 rounded-full text-[15px] transition-colors backdrop-blur-sm"
                />
                <button className="bg-[#FF4E26] hover:bg-[#e8401e] hover:cursor-pointer text-white px-8 py-3 rounded-full font-semibold text-[15px] transition-colors whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col bg:flex-row gap-8 bg:space-x-40">
        
          <div className="footer-left flex-col ">
            <Image width={32 } height={32} src="/footer-logo.svg" alt="David Kauzlaric" className="w-4/6"/>
            <p className="font-inter text-[12px] text-[#AAAAAA] text-nowrap mb-2 max-w-45">
              Copyright © 2026    David Kauzlaric.    All Rights Reserved.
            </p>
            <p className="font-inter text-[12px] text-[#AAAAAA] font-semibold text-nowrap  mb-5 max-w-45">
              Terms & Conditions    /   Privacy Policy   /  Sitemap
            </p>
            <div className="flex items-center gap-3">
              {["facebook", "linkedin", "x", "instagram", "spotify", "youtube"].map((s) => (
                <Image
                  alt={s}
                  width={24}
                  height={24}
                  key={s}
                  src={`/${s}.svg`}
                  aria-label={s}
                  className="w-6 h-6 rounded-full opacity-80 hover:opacity-100 hover:cursor-pointer transition-colors flex items-center justify-center"
                />
              ))}
            </div>
          </div>

          <div className="footer-sections flex flex-column gap-3 sm:gap-4 lg:gap-20 lg:flex-row md:gap-22">
            <div>
              <p className="font-figtree text-[13px] font-extrabold text-black mb-4">
                About David
              </p>
              <ul className="space-y-1">
                {["About David", "Podcasts", "Coaching", "Speaking", "Consulting", "Contact", "Sponsorship"].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-inter text-[13px] text-black opacity-80 hover:opacity-100 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

        
            <div>
              <p className="font-figtree text-[13px] font-extrabold text-black mb-4">
                David's Podcast
              </p>
              <ul className="space-y-1">
                {["Top Episodes", "Mindset", "Scalling", "Growth", "Automation", "Marketing", "Motivation"].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-inter text-[13px] text-black opacity-80 hover:opacity-100 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          
            <div>
              <p className="font-figtree text-[13px] font-extrabold text-black mb-4">
                Community
              </p>
              <ul className="space-y-1">
                {["Books", "PredictableSacling.com"].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-inter text-[13px] text-black opacity-80 hover:opacity-100 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}