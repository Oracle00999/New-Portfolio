import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Braces, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import {
  SiExpress,
  SiFramer,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const works = [
  {
    title: "Pingbase",
    description:
      "A lightweight API monitoring platform for tracking uptime, latency, incidents, and webhook alerts with workspaces, scheduled checks, authentication, and a clean dashboard.",
    github: "https://github.com/Oracle00999/API-Monitoring-Platform.git",
    live: "https://pingbase-inky.vercel.app/",
  },
  {
    title: "Aether",
    description:
      "A modern, responsive landing page for a sustainable clothing brand with curated product showcases, collection highlights, and an elegant newsletter section.",
    github: "https://github.com/Oracle00999/Aether.git",
    live: "https://aetherclothing.vercel.app/",
  },
  {
    title: "Briefly AI",
    description:
      "An AI-powered content summarization app that uses OpenAI to turn user-provided text into concise summaries with a smooth web experience.",
    github: "https://github.com/Oracle00999/content-summarizer-frontend.git",
    live: "https://content-summarizer-frontend.vercel.app/",
  },
  {
    title: "SDK Enterprise",
    description:
      "A responsive landing page implementation built from a provided design, translating the static concept into a polished React and Tailwind experience.",
    github: "https://github.com/Oracle00999/figma-design.git",
    live: "https://figma-design-0.vercel.app/",
  },
  {
    title: "Movie Database App",
    description:
      "A responsive movie search app that lets users find movies and view detailed information using modern React patterns and API integration.",
    github: "https://github.com/Oracle00999/ALX_CAPSTONE_PROJECT.git",
    live: "https://movie-database-57i3.vercel.app/",
  },
];

const buttonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-current px-6 text-[0.95rem] font-semibold leading-none no-underline transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper";

const primaryButtonClass = `${buttonClass} bg-transparent text-paper hover:bg-paper/10 hover:text-paper`;
const secondaryButtonClass = `${buttonClass} bg-transparent text-paper hover:bg-paper/10 hover:text-paper`;
const contactIconClass =
  "group relative inline-flex size-14 items-center justify-center rounded-full border border-current text-xl no-underline transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-paper/10 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:nwazotachibuike@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/Oracle00999",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nwazotaanthony",
    Icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://x.com/i_amtony_",
    Icon: FaXTwitter,
  },
];

const techStack = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Prisma", Icon: SiPrisma },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Git", Icon: SiGit },
  { name: "REST APIs", Icon: Braces },
  { name: "Framer Motion", Icon: SiFramer },
];

const easeOut = [0.22, 1, 0.36, 1];

const pageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

function App() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(() => !prefersReducedMotion);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!isLoading) {
      return undefined;
    }

    const timer = window.setTimeout(
      () => setIsLoading(false),
      prefersReducedMotion ? 0 : 950,
    );

    return () => window.clearTimeout(timer);
  }, [isLoading, prefersReducedMotion]);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-ink text-paper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <motion.div
              className="grid place-items-center gap-5"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <div className="relative grid size-20 place-items-center rounded-full border border-paper font-display text-2xl font-bold leading-none text-paper">
                <span className="absolute inset-2 rounded-full border border-paper/25" />
                <span className="absolute right-3 top-0 size-2.5 rounded-full bg-paper" />
                <span className="relative z-10">
                  A<span className="-ml-0.5 italic">N</span>
                </span>
              </div>
              <motion.div
                className="h-px w-40 origin-left bg-paper"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.75, ease: easeOut }}
              />
              <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Loading portfolio
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        className="fixed left-0 top-0 z-40 h-1 w-full origin-left bg-paper"
        style={{ scaleX: scrollProgress }}
        aria-hidden="true"
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
        <div className="absolute -left-28 top-36 size-80 rounded-full border border-paper/10" />
        <div className="absolute -left-12 top-52 size-44 rounded-full border border-paper/15" />
        <div className="absolute left-[8%] bottom-24 size-52 rounded-full border border-paper/8 max-sm:-left-20" />
        <div className="absolute left-[18%] bottom-40 size-24 rounded-full border border-paper/10" />
        <div className="absolute right-10 top-28 size-56 rounded-full border border-paper/15 max-sm:-right-20 max-sm:size-44" />
        <div className="absolute right-24 top-44 size-24 rounded-full border border-paper/20 max-sm:right-4 max-sm:top-40" />
        <div className="absolute bottom-32 right-[-70px] size-72 rounded-full border border-paper/10 max-sm:size-52" />
        <div className="absolute right-[24%] top-[48%] size-36 rounded-full border border-paper/8" />
        <div className="absolute left-[48%] top-16 h-[70vh] w-px bg-paper/10" />
        <div className="absolute inset-x-0 top-[42%] h-px bg-paper/5" />
      </div>

      <motion.main
        className="portfolio-split-content relative z-10 mx-auto w-[min(calc(100%_-_32px),1060px)] pb-14 pt-[72px] max-sm:w-[min(calc(100%_-_24px),1060px)] max-sm:pt-10"
        variants={prefersReducedMotion ? undefined : pageVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={isLoading ? "hidden" : "show"}
      >
        <motion.header
          variants={prefersReducedMotion ? undefined : revealVariants}
          className="flex items-start justify-between gap-5 pb-8 text-sm leading-snug text-muted max-sm:pb-6"
          aria-label="Availability"
        >
          <div className="grid gap-1 font-body">
            <span className="font-semibold text-ink before:mr-2 before:inline-block before:size-2 before:rounded-full before:bg-[#1f8f4d] before:content-['']">
              Available For Work
            </span>
            <span>Building worldwide</span>
          </div>

          <div
            className="relative grid size-[58px] place-items-center rounded-full border border-current bg-transparent font-display text-[1.34rem] font-bold leading-none tracking-[-0.01em] max-sm:size-[52px]"
            aria-hidden="true"
          >
            <span className="absolute inset-[7px] rounded-full border border-current opacity-25" />
            <span className="absolute right-[7px] top-[-3px] size-2 rounded-full bg-current" />
            <span className="relative z-10">
              A<span className="-ml-0.5 italic">N</span>
            </span>
          </div>
        </motion.header>

        <motion.section
          variants={prefersReducedMotion ? undefined : revealVariants}
          className="flex min-h-[82vh] flex-col justify-center border-b border-line max-sm:min-h-[76vh]"
          aria-labelledby="intro-title"
        >
          <p className="mb-[18px] font-body text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Full-stack developer
          </p>
          <h1
            id="intro-title"
            className="max-w-[900px] font-display text-[clamp(4.35rem,11vw,9.6rem)] font-bold leading-[0.96] tracking-[-0.02em] text-ink"
          >
            Anthony Nwazota builds useful web products.
          </h1>
          <p className="mt-[30px] max-w-[660px] font-body text-[clamp(1.12rem,2vw,1.45rem)] leading-[1.55] text-body">
            I am a full-stack developer who enjoys turning ideas into dependable
            web products. I design and ship reliable interfaces, APIs,
            dashboards, and tools with a focus on clarity, performance, and the
            small details that make software feel good to use.
          </p>
          <div
            className="mb-12 mt-[38px] flex flex-wrap gap-3"
            aria-label="Primary links"
          >
            <a className={primaryButtonClass} href="#works">
              Works
            </a>
            <a
              className={secondaryButtonClass}
              href="https://github.com/Oracle00999"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className={secondaryButtonClass} href="#contact">
              Contact
            </a>
          </div>
        </motion.section>

        <motion.section
          className="border-b border-line py-24 max-sm:py-[70px]"
          id="works"
          aria-labelledby="works-title"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.18 }}
          variants={revealVariants}
        >
          <div className="mb-12 grid grid-cols-[minmax(150px,0.32fr)_1fr] items-start gap-6 max-sm:grid-cols-1">
            <p className="mb-[18px] font-body text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              Selected works
            </p>
            <h2
              id="works-title"
              className="max-w-[900px] font-display text-[clamp(3rem,6.6vw,6.6rem)] font-bold leading-[0.96] tracking-[-0.02em] text-ink"
            >
              Simple things, built properly.
            </h2>
          </div>

          <div className="border-t border-ink">
            {works.map((work, index) => (
              <motion.article
                className="grid grid-cols-[1fr_auto] gap-7 border-b border-line py-[30px] max-sm:grid-cols-1"
                key={work.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: easeOut,
                }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <div>
                  <h3 className="mb-2.5 font-display text-[clamp(1.35rem,2.4vw,2rem)] font-bold tracking-[-0.01em] text-ink">
                    {work.title}
                  </h3>
                  <p className="max-w-[700px] font-body text-base leading-[1.7] text-[#54514b]">
                    {work.description}
                  </p>
                </div>
                <div className="flex items-start justify-end gap-2 font-body text-[0.95rem] text-muted max-sm:justify-start">
                  <a
                    className="inline-flex min-h-[38px] items-center justify-center rounded-full border border-ink px-4 text-[0.86rem] font-semibold leading-none text-ink no-underline transition duration-200 ease-out hover:-translate-y-0.5 hover:text-ink hover:shadow-[0_10px_22px_rgba(17,17,15,0.1)] active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    href={work.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="inline-flex min-h-[38px] items-center justify-center rounded-full border border-ink px-4 text-[0.86rem] font-semibold leading-none text-ink no-underline transition duration-200 ease-out hover:-translate-y-0.5 hover:text-ink hover:shadow-[0_10px_22px_rgba(17,17,15,0.1)] active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    href={work.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="border-b border-line py-24 max-sm:py-[70px]"
          aria-labelledby="stack-title"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.22 }}
          variants={revealVariants}
        >
          <div className="mb-12 grid grid-cols-[minmax(150px,0.32fr)_1fr] items-start gap-6 max-sm:grid-cols-1">
            <p className="mb-[18px] font-body text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              Tech stack
            </p>
            <h2
              id="stack-title"
              className="max-w-[900px] font-display text-[clamp(3rem,6.6vw,6.6rem)] font-bold leading-[0.96] tracking-[-0.02em] text-ink"
            >
              Tools I use to build reliable products.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-ink pt-8">
            {techStack.map(({ name, Icon }, index) => (
              <motion.span
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-current bg-transparent py-1.5 pl-2 pr-5 font-body text-sm font-semibold transition duration-200 hover:-translate-y-0.5"
                key={name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                transition={{
                  duration: 0.45,
                  delay: index * 0.035,
                  ease: easeOut,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="grid size-9 place-items-center rounded-full border border-current bg-transparent text-lg">
                  <Icon
                    aria-hidden="true"
                    size={name === "REST APIs" ? 18 : undefined}
                  />
                </span>
                {name}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/*
        <motion.section
          className="overflow-hidden border-b border-line py-24 max-sm:py-[70px]"
          aria-labelledby="github-title"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.22 }}
          variants={revealVariants}
        >
          <div className="mb-12 grid grid-cols-[minmax(150px,0.32fr)_1fr] items-start gap-6 max-sm:grid-cols-1">
            <p className="mb-[18px] font-body text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              GitHub contribution
            </p>
            <h2
              id="github-title"
              className="max-w-[900px] font-display text-[clamp(3rem,6.6vw,6.6rem)] font-bold leading-[0.96] tracking-[-0.02em] text-ink"
            >
              Consistency over noise.
            </h2>
          </div>

          <a
            className="block w-full overflow-x-auto py-[18px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            href="https://github.com/Oracle00999"
            aria-label="View Oracle00999 on GitHub"
          >
            <img
              className="block h-auto w-full min-w-[720px] grayscale max-sm:min-w-[640px]"
              src="https://ghchart.rshah.org/111111/Oracle00999"
              alt="Oracle00999 GitHub contribution graph"
            />
          </a>
        </motion.section>
        */}

        <motion.section
          className="flex min-h-[62vh] flex-col justify-center py-24 pb-6"
          id="contact"
          aria-labelledby="contact-title"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
          variants={revealVariants}
        >
          <p className="mb-[18px] font-body text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Contact
          </p>
          <h2
            id="contact-title"
            className="max-w-[900px] font-display text-[clamp(3rem,6.6vw,6.6rem)] font-bold leading-[0.96] tracking-[-0.02em] text-ink"
          >
            Tell me what you are building.
          </h2>
          <div
            className="mt-[38px] flex flex-wrap gap-3 font-body"
            aria-label="Contact links"
          >
            {contactLinks.map(({ label, href, Icon }) => (
              <a
                className={contactIconClass}
                href={href}
                key={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={label}
                title={label}
              >
                <Icon
                  aria-hidden="true"
                  size={label === "Email" ? 21 : undefined}
                />
                <span className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 rounded-full border border-current bg-ink px-3 py-1 text-xs font-semibold opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {label}
                </span>
              </a>
            ))}
          </div>
          <a
            className="mt-8 inline-flex w-fit font-body text-[clamp(1.05rem,2vw,1.35rem)] font-semibold text-ink underline decoration-line underline-offset-8 transition duration-200 hover:text-muted hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            href="mailto:nwazotachibuike@gmail.com"
          >
            nwazotachibuike@gmail.com
          </a>
        </motion.section>

        <motion.footer
          className="flex items-center justify-between gap-5 border-t border-line py-8 font-body text-sm text-muted max-sm:flex-col max-sm:items-start"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOut }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative grid size-10 place-items-center rounded-full border border-current bg-transparent font-display text-base font-bold leading-none tracking-[-0.01em]">
            <span className="absolute inset-1.5 rounded-full border border-current opacity-25" />
            <span className="absolute right-1.5 top-[-2px] size-1.5 rounded-full bg-current" />
            <span className="relative z-10">
              A<span className="-ml-0.5 italic">N</span>
            </span>
          </div>
          <p>Anthony Nwazota · Available For Work.</p>
        </motion.footer>
      </motion.main>
    </>
  );
}

export default App;
