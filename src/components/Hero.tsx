import React from "react";

export default function Hero() {
  return (
    <main className="mx-auto w-full max-w-[820px] px-6 pb-24 pt-16 sm:px-8 sm:pt-20">
      {/* Profile */}
      <div className="mb-12">
        <img
          src="/avatar1.png"
          alt="Profile"
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>

      {/* Introduction */}
    <section>
  <h1 className="animate-hero-title font-serif text-[42px] leading-[1.1] tracking-[-0.03em] dark:text-white text-neutral-950 sm:text-[48px]">
    Hi, I’m Supriya Maurya 👋
  </h1>

  <p className="mt-8 text-[16px] font-sans leading-[1.55] text-neutral-500 sm:text-[23px] animate-hero-description">
    I’m a UX/UI & Product Designer who turns complex problems into simple,
    intuitive digital experiences.
  </p>

  <div className="mt-8 space-y-7 text-[18px] leading-[1.65] text-neutral-500 sm:text-[20px] animate-hero-description">
    <p>
      I take ownership of the end-to-end design process — from understanding
      user needs and business goals to creating wireframes, design systems,
      prototypes, and developer-ready interfaces.
    </p>

    <p>
      Over the past year, I’ve worked across enterprise dashboards,
      AI-powered products, SaaS platforms, and mobile experiences,
      simplifying complex workflows into clear, scalable, and user-friendly
      products.
    </p>

    <p>
      Currently exploring <strong>Product Design, AI, FinTech, SaaS, and Data & Analytics.</strong>
    </p>

    <p>
      I’m always exploring new ideas, building small things, and learning how
      technology can create better product experiences.
    </p>
  </div>
</section>

    
    </main>
  );
}
