import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, Leaf, ShieldCheck, Smile, Wind, HeartPulse, Microscope,
  CheckCircle2, Star, Clock, Lock, MessageCircle,
  Menu, X, ArrowRight,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import bottleImg from "@/assets/prodentim-bottle.jpg";
import depoMariana from "@/assets/depo-mariana.jpg";
import depoCarlos from "@/assets/depo-carlos.jpg";
import depoFernanda from "@/assets/depo-fernanda.jpg";

const AFFILIATE_URL = "https://prodentim24.com/text.php#aff=raelandrade200791c8";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProDentim — Oral Probiotic for Healthy Gums & Fresh Breath" },
      { name: "description", content: "Tired of bad breath, sensitive gums and dental worries? ProDentim is a chewable oral probiotic that helps restore your mouth's natural balance — naturally." },
      { property: "og:title", content: "ProDentim — Oral Probiotic for Healthy Gums & Fresh Breath" },
      { property: "og:description", content: "Chewable oral probiotic. Daily support for healthy gums and fresh breath." },
    ],
  }),
  component: Index,
});

const BRAND = {
  green: "#2F7D59",
  greenLight: "#DFF4E7",
  blue: "#7FB8D9",
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function PrimaryCTA({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <a
      id={id}
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener sponsored"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[#2F7D59] px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-[#2F7D59]/25 transition-all hover:-translate-y-0.5 hover:bg-[#266a4a] hover:shadow-xl active:translate-y-0 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center" data-reveal>
      {eyebrow && (
        <span className="inline-block rounded-full bg-[#DFF4E7] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2F7D59]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-slate-600 sm:text-lg">{sub}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#benefits", label: "Benefits" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#ingredients", label: "Ingredients" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[#DFF4E7] bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F7D59] text-white shadow-md">
            <Smile className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">ProDentim</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-[#2F7D59]">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={AFFILIATE_URL}
          target="_blank"
          rel="noopener sponsored"
          className="hidden rounded-full bg-[#2F7D59] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#266a4a] md:inline-flex"
        >
          Get ProDentim
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
          className="rounded-lg p-2 text-slate-700 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#DFF4E7] bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-[#DFF4E7]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener sponsored"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#2F7D59] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get ProDentim
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3FAF5] via-white to-white">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#DFF4E7] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-blue-100 opacity-50 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-14 md:py-20 lg:grid-cols-2 lg:py-24">
        <div data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#DFF4E7] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2F7D59]">
            <Leaf className="h-3.5 w-3.5" /> Natural probiotic formula
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Reclaim your <span className="text-[#2F7D59]">confident smile</span> — naturally.
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
            ProDentim is a doctor-formulated chewable probiotic that helps restore the
            balance of good bacteria in your mouth — supporting healthy gums, strong
            teeth and fresh breath, every single day.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              "Supports fresh breath",
              "Helps healthy gums",
              "Chewable & easy to use",
              "Simple daily routine",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#2F7D59]" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <PrimaryCTA>Get ProDentim Now</PrimaryCTA>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Trusted by 95,000+ customers</span>
            </div>
          </div>
        </div>

        <div className="relative" data-reveal>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#DFF4E7] to-blue-100" />
            <img
              src={bottleImg}
              alt="ProDentim bottle — chewable oral probiotic supplement"
              width={1200}
              height={1200}
              className="relative h-full w-full rounded-[2.5rem] object-cover shadow-2xl shadow-[#2F7D59]/20"
            />
            {/* floating badges */}
            <div className="absolute -left-3 top-8 hidden rounded-2xl bg-white px-3 py-2 shadow-lg ring-1 ring-[#DFF4E7] sm:flex items-center gap-2">
              <Microscope className="h-5 w-5 text-[#2F7D59]" />
              <span className="text-xs font-semibold text-slate-800">3.5 Billion Probiotics</span>
            </div>
            <div className="absolute -right-3 top-1/3 hidden rounded-2xl bg-white px-3 py-2 shadow-lg ring-1 ring-[#DFF4E7] sm:flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#2F7D59]" />
              <span className="text-xs font-semibold text-slate-800">Daily Use</span>
            </div>
            <div className="absolute -bottom-3 left-1/4 hidden rounded-2xl bg-white px-3 py-2 shadow-lg ring-1 ring-[#DFF4E7] sm:flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-[#2F7D59]" />
              <span className="text-xs font-semibold text-slate-800">Oral Health Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const items = [
    "Persistent bad breath",
    "Bleeding or sensitive gums",
    "Dry mouth and discomfort",
    "Yellowing or weakening teeth",
    "Feeling self-conscious when you smile or speak",
  ];
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="The hidden problem"
          title="Brushing and flossing alone may not be enough"
          sub="Even with the best dental routine, millions of people still struggle with bad breath, gum sensitivity and weak teeth. New research points to one root cause: an imbalanced oral microbiome — too few of the good bacteria your mouth needs to stay healthy."
        />
        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2" data-reveal>
          {items.map((i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50/50 px-5 py-4 text-slate-700"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                ✕
              </span>
              <span className="text-sm font-medium">{i}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-base text-slate-700" data-reveal>
          The good news? You don't have to live with it. ProDentim was designed to address
          the real cause — not just mask the symptoms.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Leaf, title: "Rebalances your oral flora", desc: "3.5 billion selected probiotic strains help repopulate your mouth with the good bacteria it needs." },
    { icon: ShieldCheck, title: "Strengthens gums & teeth", desc: "Supports healthy gum tissue and the natural defense of your teeth against everyday wear." },
    { icon: Wind, title: "Restores fresh breath", desc: "A balanced microbiome means lasting fresh breath — and the confidence that comes with it." },
  ];
  return (
    <section id="how-it-works" className="bg-[#F3FAF5] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="How it works" title="The natural way to a healthier smile — in 3 simple steps" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              data-reveal
              className="relative rounded-3xl border border-[#DFF4E7] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -top-4 left-7 rounded-full bg-[#2F7D59] px-3 py-1 text-xs font-bold text-white shadow">
                Step {idx + 1}
              </div>
              <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DFF4E7] text-[#2F7D59]">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center" data-reveal>
          <PrimaryCTA>Start Your Routine Today</PrimaryCTA>
        </div>
      </div>
    </section>
  );
}

function Ingredients() {
  const list = [
    { name: "Lactobacillus Paracasei", desc: "Supports gum health and a balanced oral environment." },
    { name: "B. Lactis BL-04", desc: "Helps maintain a healthy mouth and immune response." },
    { name: "Lactobacillus Reuteri", desc: "Promotes a healthy inflammatory response in the mouth." },
    { name: "Inulin", desc: "A natural prebiotic that feeds the good bacteria." },
    { name: "Peppermint", desc: "Provides a natural, long-lasting fresh breath sensation." },
    { name: "Malic Acid", desc: "Helps maintain tooth whiteness and supports saliva." },
  ];
  return (
    <section id="ingredients" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="What's inside"
          title="A clean, science-backed formula"
          sub="Each chewable tablet delivers a unique blend of probiotics, prebiotics and natural plant-based ingredients — chosen for one purpose: a healthier mouth."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((i) => (
            <div
              key={i.name}
              data-reveal
              className="group rounded-3xl border border-[#DFF4E7] bg-gradient-to-br from-white to-[#F3FAF5] p-6 transition-all hover:-translate-y-1 hover:border-[#2F7D59]/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F7D59] text-white shadow-md">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{i.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Wind, title: "All-day fresh breath" },
    { icon: ShieldCheck, title: "Healthier gums" },
    { icon: Sparkles, title: "Whiter, stronger teeth" },
    { icon: Leaf, title: "100% natural ingredients" },
    { icon: Clock, title: "Just 1 tablet a day" },
    { icon: HeartPulse, title: "Made in an FDA-registered facility" },
  ];
  return (
    <section id="benefits" className="bg-[#F3FAF5] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Benefits" title="Why thousands choose ProDentim every day" />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((b) => (
            <div
              key={b.title}
              data-reveal
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#DFF4E7] text-[#2F7D59]">
                <b.icon className="h-5 w-5" />
              </div>
              <p className="font-semibold leading-snug text-slate-800">{b.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Mary", age: 42, img: depoMariana,
      text: "After a few weeks I noticed my breath was fresher and my gums felt healthier. I finally smile without feeling self-conscious.",
    },
    {
      name: "Charles", age: 51, img: depoCarlos,
      text: "I've tried everything for my dental health. ProDentim is the only thing that fits into my day — one tablet and I'm done.",
    },
    {
      name: "Jennifer", age: 37, img: depoFernanda,
      text: "It's part of my morning routine now. My dentist even commented on how much healthier my gums look at my last visit.",
    },
  ];
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Real reviews" title="Loved by people who got their smile back" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              data-reveal
              className="rounded-3xl border border-[#DFF4E7] bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-slate-700">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={t.img} alt={t.name} width={512} height={512} loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-[#DFF4E7]"
                />
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.age} years old · Verified customer</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-14 grid grid-cols-1 gap-4 rounded-3xl bg-gradient-to-r from-[#2F7D59] to-[#3a9469] p-8 text-white sm:grid-cols-3" data-reveal>
          <div className="text-center">
            <p className="text-3xl font-bold">95,000+</p>
            <p className="text-sm text-white/80">happy customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">4.9 / 5</p>
            <p className="text-sm text-white/80">average rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">98%</p>
            <p className="text-sm text-white/80">would recommend to a friend</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F3FAF5] to-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#DFF4E7] bg-white p-8 shadow-xl sm:p-12" data-reveal>
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#DFF4E7] opacity-60 blur-3xl" />
          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#DFF4E7] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2F7D59]">
                <Sparkles className="h-3.5 w-3.5" /> Available today
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Take the first step toward a healthier smile.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Visit the official ProDentim store to see today's pricing,
                bundle savings and the manufacturer's money-back guarantee.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#2F7D59]" /> 100% natural formula</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#2F7D59]" /> Manufacturer's satisfaction guarantee</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#2F7D59]" /> Secure checkout on the official site</li>
              </ul>
              <div className="mt-8">
                <PrimaryCTA>Visit the Official Site</PrimaryCTA>
                <p className="mt-3 text-xs text-slate-500">
                  You'll be redirected to the official ProDentim store to complete your order.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#DFF4E7] to-blue-100" />
              <img
                src={bottleImg}
                alt="ProDentim chewable oral probiotic"
                width={800} height={800} loading="lazy"
                className="relative h-full w-full rounded-[2rem] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600" data-reveal>
          <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-[#2F7D59]" /> 100% Secure</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#2F7D59]" /> Money-back Guarantee</span>
          <span className="inline-flex items-center gap-2"><HeartPulse className="h-4 w-4 text-[#2F7D59]" /> Trusted Worldwide</span>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  const items = [
    { icon: Lock, title: "Secure checkout", desc: "Your information is protected with end-to-end encryption on the official store." },
    { icon: ShieldCheck, title: "Satisfaction guarantee", desc: "ProDentim is backed by the manufacturer's money-back guarantee. Try it risk-free." },
    { icon: MessageCircle, title: "Real customer support", desc: "A friendly team ready to help you with any question, before or after your purchase." },
  ];
  return (
    <section id="guarantee" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Your peace of mind" title="Try ProDentim with complete confidence" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((g) => (
            <div key={g.title} data-reveal className="flex gap-4 rounded-3xl border border-[#DFF4E7] bg-[#F3FAF5]/60 p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[#2F7D59] shadow-sm">
                <g.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{g.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What exactly is ProDentim?", a: "ProDentim is a chewable oral probiotic supplement that combines 3.5 billion probiotic strains with natural ingredients to support healthy gums, fresh breath and a balanced oral microbiome." },
    { q: "How do I take it?", a: "Simply chew one tablet slowly every morning, ideally after brushing your teeth. No water, no pills to swallow, no complicated routine." },
    { q: "When will I notice results?", a: "Every body is different. Most customers report fresher breath within the first few weeks. For best long-term results, consistent daily use is recommended." },
    { q: "Is it safe for daily use?", a: "Yes. ProDentim is made from natural ingredients in an FDA-registered, GMP-certified facility and is designed for daily use." },
    { q: "Is there a guarantee?", a: "Yes. ProDentim is backed by a manufacturer's money-back satisfaction guarantee, so you can try it with no risk." },
  ];
  return (
    <section id="faq" className="bg-[#F3FAF5] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle eyebrow="FAQ" title="Everything you need to know" />
        <div className="mt-10" data-reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i} value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-[#DFF4E7] bg-white px-5"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#2F7D59] to-[#3a9469] p-8 text-center text-white shadow-xl" data-reveal>
          <h3 className="text-2xl font-bold sm:text-3xl">Ready to take back your smile?</h3>
          <p className="mt-2 text-white/90">Start your daily ProDentim routine today and feel the difference.</p>
          <div className="mt-6 flex justify-center">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold uppercase tracking-wide text-[#2F7D59] shadow-lg transition hover:-translate-y-0.5"
            >
              Get ProDentim Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#DFF4E7] bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#2F7D59] text-white">
            <Smile className="h-4 w-4" />
          </div>
          <span className="font-bold text-slate-900">ProDentim</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <a href="#" className="hover:text-[#2F7D59]">Privacy Policy</a>
          <a href="#" className="hover:text-[#2F7D59]">Terms of Use</a>
          <a href="#" className="hover:text-[#2F7D59]">Contact</a>
          <a href="#" className="hover:text-[#2F7D59]">Disclaimer</a>
        </nav>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} ProDentim. All rights reserved.</p>
      </div>
      <p className="mx-auto mt-6 max-w-3xl px-4 text-center text-[11px] leading-relaxed text-slate-400">
        This page contains affiliate links. We may earn a commission from qualifying purchases, at no extra cost to you.
        ProDentim is a dietary supplement and is not intended to diagnose, treat, cure or prevent any disease.
        Statements have not been evaluated by the FDA. Consult your healthcare professional before starting any supplement.
      </p>
    </footer>
  );
}

function Index() {
  const ref = useReveal();
  return (
    <div ref={ref} className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Ingredients />
        <Benefits />
        <Testimonials />
        <GetStarted />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
