import Image from "next/image";
import RevealOnScroll from "./reveal-on-scroll";
import { services } from "./services";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cav.ng/#organization",
        name: "CAV Brand",
        alternateName: "Chas Able Ventures",
        url: "https://cav.ng",
        logo: "https://cav.ng/logo.svg",
        email: "hello@cav.ng",
        telephone: "+2348161305358",
        sameAs: [
          "https://www.instagram.com/cavshotit?igsh=MXFpbmV0cXFjaHFmdQ%3D%3D&utm_source=qr",
          "https://www.tiktok.com/@cav.shotit?_r=1&_t=ZS-96s9woTo4nd",
          "https://youtube.com/@cav_brand?si=o6DAdrO0TmsJnLlx",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://cav.ng/#website",
        url: "https://cav.ng",
        name: "CAV Brand",
        publisher: {
          "@id": "https://cav.ng/#organization",
        },
        inLanguage: "en-NG",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://cav.ng/#service",
        name: "CAV Brand",
        description:
          "Video production, content strategy, event coverage, and social-media-ready branded content for businesses, creators, and organizations.",
        url: "https://cav.ng",
        areaServed: "Nigeria",
        provider: {
          "@id": "https://cav.ng/#organization",
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-(--cav-bg) text-(--cav-text)">
      <RevealOnScroll />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(246,200,53,0.15),transparent_26%),radial-gradient(circle_at_88%_85%,rgba(157,98,20,0.14),transparent_28%),linear-gradient(180deg,#0b0c0c_0%,#0d0e0e_52%,#0b0c0c_100%)]" />
        <div className="cav-drift cav-drift-a absolute -left-20 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(246,200,53,0.2)_0%,rgba(246,200,53,0)_72%)]" />
        <div className="cav-drift cav-drift-b absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(157,98,20,0.18)_0%,rgba(157,98,20,0)_72%)]" />
      </div>
      <main className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-12">
        <section data-reveal>
          <div className="mb-14 flex items-center justify-between gap-4">
              <div className="relative h-14 w-30">
                <Image
                  src="/logo.svg"
                  alt="CAV logo"
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
            <a
              href="#services"
              className="inline-flex h-11 items-center justify-center rounded-full border border-(--cav-border) bg-(--cav-surface) px-5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-(--cav-text) transition-all duration-200 hover:border-(--cav-gold) hover:text-[#f6c835] active:translate-y-px"
            >
              View Services
            </a>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#d6b45c]">
                Premium Content Partner
              </p>
              <h1 className="max-w-4xl font-mono text-3xl leading-tighter tracking-tighter text-(--cav-text) sm:text-5xl lg:text-5xl font-semibold">
                Content That Gets Attention. Videos That Drive Results.
              </h1>
              <p className="max-w-2xl font-sans text-base leading-8 text-[#c8c4bf] sm:text-lg">
                CAV Brand helps individuals, businesses, and organizations
                create compelling video content that attracts audiences, builds
                credibility, and grows brands.
              </p>
              <p className="max-w-2xl font-sans text-base leading-8 text-[#c8c4bf] sm:text-lg">
                From event coverage and branded marketing videos to content
                strategy, training, and speaking engagements, we help you tell
                stories that people remember and share.
              </p>
              <p className="font-sans text-base text-(--cav-text)">
                Ready to create content that works for your brand?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://bookings.cav.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 min-w-55 items-center justify-center rounded-full bg-(--cav-gold) px-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-[#dba314] active:translate-y-px active:bg-[#9A5E08]"
                >
                  Book a Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 min-w-55 items-center justify-center rounded-full border border-(--cav-border) bg-(--cav-surface) px-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-(--cav-text) transition-all duration-200 hover:border-[#ba8b0b] hover:text-[#f6c835] active:translate-y-px"
                >
                  View Our Services
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-(--cav-border) bg-[linear-gradient(160deg,rgba(18,19,19,0.92),rgba(18,19,19,0.72))] p-6 shadow-[0_22px_50px_rgba(0,0,0,0.3)]">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d6b45c]">
                Trusted by Brands, Creators & Organizations
              </p>
              <p className="mt-4 font-sans text-sm leading-7 text-[#cbc7c2]">
                Whether you are launching a product, hosting an event, growing a
                personal brand, or building an online community, CAV Brand
                provides the strategy, creativity, and execution needed to create
                content that delivers measurable impact.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Professional Video Production",
                  "Social Media Content Creation",
                  "Brand Storytelling",
                  "Event Coverage",
                  "Content Strategy Consulting",
                  "Training & Education",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-sans text-sm text-(--cav-text)"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#ba8b0b] text-[11px] text-[#f6c835]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section
          id="about"
          data-reveal
          data-reveal-delay="60"
          className="mt-20 rounded-2xl border border-(--cav-border) bg-(--cav-surface)/80 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.26)] sm:p-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#d6b45c]">
            About Us
          </p>
          <h2 className="mt-3 max-w-4xl font-mono text-3xl leading-tight tracking-[-0.02em] sm:text-4xl">
            We Don&apos;t Just Create Content. We Create Influence.
          </h2>
          <div className="mt-6 space-y-5 font-sans text-base leading-8 text-[#ccc8c3]">
            <p>
              At CAV Brand (Chas Able Ventures), we believe that every brand
              has a story worth telling.
            </p>
            <p>
              Our mission is to help businesses, professionals, creators, and
              organizations communicate their value through strategic video
              content and engaging digital storytelling.
            </p>
            <p>
              In today&apos;s fast-moving digital world, attention is one of the
              most valuable assets a brand can earn. We help you capture that
              attention through videos and content designed specifically for
              modern audiences.
            </p>
            <p>
              Whether you&apos;re looking to increase visibility, strengthen your
              personal brand, market a product, educate an audience, or document
              an important event, our team provides the expertise and creativity
              to bring your vision to life.
            </p>
          </div>
        </section>

        <section id="services" data-reveal data-reveal-delay="90" className="mt-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#d6b45c]">
                Services
              </p>
              <h2 className="mt-3 font-mono text-3xl tracking-[-0.02em] sm:text-4xl">
                Our Services
              </h2>
            </div>
            <a
              href="https://bookings.cav.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-(--cav-border) bg-(--cav-surface) px-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-(--cav-text) transition-all duration-200 hover:border-[#ba8b0b] hover:text-[#f6c835]"
            >
              Schedule a Discovery Call
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                data-reveal
                data-reveal-delay={120 + index * 70}
                className="group flex h-full flex-col rounded-2xl border border-(--cav-border) bg-[linear-gradient(175deg,rgba(18,19,19,0.9),rgba(18,19,19,0.72))] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.28)] transition-all duration-200 hover:border-[#2a2b2b] hover:shadow-[0_24px_52px_rgba(0,0,0,0.34)]"
                style={{ "--reveal-delay": `${120 + index * 70}ms` } as React.CSSProperties}
              >
                <h3 className="font-mono text-xl leading-snug text-(--cav-text)">
                  {service.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-7 text-[#d2ceca]">
                  {service.subtitle}
                </p>
                <p className="mt-3 font-sans text-sm leading-7 text-[#beb9b4]">
                  {service.description}
                </p>

                {service.startingFrom ? (
                  <p className="mt-4 font-mono text-sm font-semibold tracking-wide text-[#f6c835]">
                    {service.startingFrom}
                  </p>
                ) : null}

                <ul className="mt-4 space-y-2">
                  {service.bullets.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 font-sans text-sm text-[#d5d1cd]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#ba8b0b]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {service.idealFor ? (
                  <div className="mt-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#aaa49f]">
                      Ideal For
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {service.idealFor.map((audience) => (
                        <span
                          key={audience}
                          className="rounded-full border border-[#2d2e2e] bg-[#101111] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#d1cdc8]"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {service.packages ? (
                  <div className="mt-5 rounded-xl border border-[#222323] bg-[#0f1010]/70 p-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#d5b75f]">
                      Packages
                    </p>
                    <div className="mt-3 space-y-2">
                      {service.packages.map((pkg) => (
                        <div
                          key={pkg.name}
                          className="rounded-lg border border-[#1f2020] bg-[#111212] px-3 py-2"
                        >
                          <p className="font-mono text-xs uppercase tracking-widest text-(--cav-text)">
                            {pkg.name}
                          </p>
                          {pkg.description ? (
                            <p className="mt-1 font-sans text-xs text-[#aaa6a2]">
                              {pkg.description}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-auto pt-4">
                  <a
                    href="https://bookings.cav.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[#2a2b2b] bg-[#121313] font-mono text-xs font-semibold uppercase tracking-[0.14em] text-(--cav-text) transition-all duration-200 hover:border-[#ba8b0b] hover:text-[#f6c835] active:translate-y-px"
                  >
                    {service.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-5 lg:grid-cols-2">
          <div
            data-reveal
            data-reveal-delay="110"
            className="rounded-2xl border border-(--cav-border) bg-(--cav-surface)/80 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.24)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#d6b45c]">
              Why Choose CAV Brand
            </p>
            <h2 className="mt-3 font-mono text-3xl leading-tight tracking-[-0.02em]">
              Why Clients Work With Us
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                [
                  "Strategy First",
                  "We don't just create videos. We create content with a purpose and measurable goals.",
                ],
                [
                  "Social Media Focused",
                  "Every piece of content is optimized for how people consume media today.",
                ],
                [
                  "Professional Quality",
                  "From planning to delivery, we maintain high production standards.",
                ],
                [
                  "Fast Turnaround",
                  "We understand the speed of modern marketing and content cycles.",
                ],
                [
                  "Personalized Service",
                  "Every project is tailored to your unique goals and audience.",
                ],
                [
                  "End-to-End Support",
                  "From concept development to final delivery, we guide you through the entire process.",
                ],
              ].map(([title, detail]) => (
                <li key={title} className="rounded-xl border border-[#232424] bg-[#111212]/70 p-4">
                  <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#f6c835]">
                    {title}
                  </p>
                  <p className="mt-2 font-sans text-sm leading-7 text-[#c8c4bf]">{detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-reveal
            data-reveal-delay="170"
            className="rounded-2xl border border-(--cav-border) bg-(--cav-surface)/80 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.24)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#d6b45c]">
              How We Work
            </p>
            <h2 className="mt-3 font-mono text-3xl leading-tight tracking-[-0.02em]">
              Process That Keeps Content Moving
            </h2>
            <div className="mt-6 space-y-4">
              {[
                [
                  "Step 1: Discovery",
                  "We understand your goals, audience, and content needs.",
                ],
                [
                  "Step 2: Strategy",
                  "We develop a content approach designed to achieve your objectives.",
                ],
                [
                  "Step 3: Production",
                  "We create, film, edit, and refine your content.",
                ],
                [
                  "Step 4: Delivery",
                  "You receive polished, ready-to-publish content optimized for your platforms.",
                ],
              ].map(([title, detail], index) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-xl border border-[#242525] bg-[#101111] px-4 py-3"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#ba8b0b] font-mono text-xs text-[#f6c835]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-mono text-sm uppercase tracking-[0.08em] text-(--cav-text)">
                      {title}
                    </p>
                    <p className="mt-1 font-sans text-sm leading-7 text-[#c6c2bd]">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          data-reveal
          data-reveal-delay="140"
          className="mt-20 rounded-2xl border border-(--cav-border) bg-[linear-gradient(150deg,rgba(18,19,19,0.88),rgba(12,13,13,0.95))] p-6 shadow-[0_18px_46px_rgba(0,0,0,0.3)] sm:p-8"
        >
          <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#d6b45c]">
                Trust & Payment
              </p>
              <h2 className="mt-3 font-mono text-3xl leading-tight tracking-[-0.02em]">
                Booking Is Clear. Payment Is Secure.
              </h2>
              <p className="mt-4 font-sans text-base leading-8 text-[#cbc7c2]">
                Confirm your booking in minutes, receive clear project timelines,
                and get transparent deliverables before production starts.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Instant booking confirmation",
                "Transparent project milestones",
                "Secure payment processing",
                "Dedicated delivery support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#242525] bg-[#101111] p-4"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-[#f6c835]">
                    Verified
                  </p>
                  <p className="mt-2 font-sans text-sm leading-6 text-[#d1cdc8]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-reveal data-reveal-delay="160" className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#d6b45c]">
            Testimonials
          </p>
          <h2 className="mt-3 font-mono text-3xl tracking-[-0.02em] sm:text-4xl">
            What Clients Say
          </h2>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {[
              "CAV Brand transformed our event into weeks of engaging social media content.",
              "The consultation session gave us a clear content strategy that increased our online engagement significantly.",
              "Professional, creative, and easy to work with. The videos exceeded our expectations.",
            ].map((quote) => (
              <blockquote
                key={quote}
                className="rounded-2xl border border-(--cav-border) bg-(--cav-surface)/80 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
              >
                <p className="font-sans text-base leading-8 text-[#d3cfca]">&quot;{quote}&quot;</p>
              </blockquote>
            ))}
          </div>
        </section>

        <section
          data-reveal
          data-reveal-delay="190"
          className="mt-20 rounded-2xl border border-(--cav-border) bg-(--cav-surface)/80 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.24)] sm:p-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#d6b45c]">
            Frequently Asked Questions
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "How do I book a service?",
                "Simply click any booking button on the website, select your preferred service, and schedule a session.",
              ],
              [
                "Do you work with businesses outside my city?",
                "Yes. Many of our consultation, training, and strategy services can be delivered remotely.",
              ],
              [
                "How long does content production take?",
                "Delivery timelines vary depending on the project scope, but timelines are discussed before work begins.",
              ],
              [
                "Can I request custom content packages?",
                "Absolutely. We can create customized solutions based on your goals and budget.",
              ],
              [
                "Do you provide social media strategy in addition to content creation?",
                "Yes. Our consultation services help clients build effective content and communication strategies.",
              ],
              [
                "What types of businesses do you work with?",
                "We work with entrepreneurs, startups, corporate organizations, nonprofits, educational institutions, personal brands, and content creators.",
              ],
              [
                "Do you offer team training?",
                "Yes. We provide training sessions for individuals and teams looking to improve their content creation capabilities.",
              ],
            ].map(([question, answer]) => (
              <article
                key={question}
                className="rounded-xl border border-[#232424] bg-[#101111]/75 p-4"
              >
                <h3 className="font-mono text-sm uppercase tracking-[0.08em] text-(--cav-text)">
                  {question}
                </h3>
                <p className="mt-2 font-sans text-sm leading-7 text-[#cbc7c2]">
                  {answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          data-reveal
          data-reveal-delay="220"
          className="mt-20 rounded-2xl border border-[#272828] bg-[linear-gradient(150deg,rgba(18,19,19,0.94),rgba(11,12,12,1))] p-7 shadow-[0_26px_56px_rgba(0,0,0,0.34)] sm:p-10"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#d6b45c]">
            Let's get started
          </p>
          <h2 className="mt-3 max-w-4xl font-mono text-3xl leading-tight tracking-[-0.02em] sm:text-4xl lg:text-4xl">
            Ready to Build a Stronger Brand Through Content?
          </h2>
          <p className="mt-5 max-w-4xl font-sans text-base leading-8 text-[#cbc7c2] sm:text-lg">
            Whether you need content strategy, professional videos, event
            coverage, training, or marketing campaigns, CAV Brand is ready to
            help you create content that connects, engages, and delivers
            results.
          </p>
          <p className="mt-3 font-sans text-base text-(--cav-text) sm:text-lg">
            Let&apos;s Create Something Remarkable Together.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://bookings.cav.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-w-55 items-center justify-center rounded-full bg-(--cav-gold) px-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:bg-[#dba314] active:translate-y-px active:bg-[#9A5E08]"
            >
              Book a Consultation
            </a>
            <a
              href="https://bookings.cav.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-w-55 items-center justify-center rounded-full border border-(--cav-border) bg-(--cav-surface) px-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-(--cav-text) transition-all duration-200 hover:border-[#ba8b0b] hover:text-[#f6c835] active:translate-y-px"
            >
              Schedule a Discovery Call
            </a>
            <a
              href="#services"
              className="inline-flex h-12 min-w-55 items-center justify-center rounded-full border border-(--cav-border) bg-(--cav-surface) px-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-(--cav-text) transition-all duration-200 hover:border-[#ba8b0b] hover:text-[#f6c835] active:translate-y-px"
            >
              View Services
            </a>
          </div>

          <p className="mt-10 border-t border-[#232424] pt-5 font-mono text-xs uppercase tracking-[0.18em] text-[#f6c835]">
            CAV Brand - Creating Content. Building Influence. Driving Results.
          </p>
        </section>

        <footer
          data-reveal
          data-reveal-delay="260"
          className="mt-10 border-t border-(--cav-border) py-7"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com/@cav_brand?si=o6DAdrO0TmsJnLlx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-8 w-8 items-center justify-center text-[#f6c835] transition-colors duration-200 hover:text-[#dba314]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M23.5 7.1a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.5A3 3 0 0 0 .5 7.1 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-4.9ZM9.6 15.5v-7l6.4 3.5-6.4 3.5Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cavshotit?igsh=MXFpbmV0cXFjaHFmdQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-8 w-8 items-center justify-center text-[#f6c835] transition-colors duration-200 hover:text-[#dba314]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.9a3.9 3.9 0 0 0-3.9 3.9v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8Zm9.3 1.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@cav.shotit?_r=1&_t=ZS-96s9woTo4nd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex h-8 w-8 items-center justify-center text-[#f6c835] transition-colors duration-200 hover:text-[#dba314]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M14.2 2c.5 2.4 1.9 3.8 4.3 4v2.8a8.1 8.1 0 0 1-4.2-1.3v6.6a6.1 6.1 0 1 1-6-6.1c.4 0 .8 0 1.2.1v3A3.2 3.2 0 1 0 11.3 14V2h2.9Z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col items-start gap-2 font-sans text-sm text-[#cbc7c2] sm:items-end">
              <a
                href="mailto:hello@cav.ng"
                className="transition-colors duration-200 hover:text-[#f6c835]"
              >
                hello@cav.ng
              </a>
              <a
                href="tel:+2348161305358"
                className="transition-colors duration-200 hover:text-[#f6c835]"
              >
                +234 816 130 5358
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
