import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Download,
  Github,
  Mic,
  Share2,
  Sparkles,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const DOWNLOAD_URL =
  "https://github.com/donnyroufs/leaguedex.app/releases/latest/download/Leaguedex-setup.exe";
const REPO_URL = "https://github.com/donnyroufs/leaguedex.app";
const DISCORD_URL = "https://discord.gg/ycFJxnVvMZ";
const ISSUES_URL = "https://github.com/donnyroufs/leaguedex.app/issues";
const RELEASES_URL = "https://github.com/donnyroufs/leaguedex.app/releases/latest";

function DiscordIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 71 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.0157 50.6037 51.233 52.5702 52.5959 54.4352C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Feature = { num: string; icon: LucideIcon; title: string; desc: string };
const FEATURES: Feature[] = [
  {
    num: "01",
    icon: Clock,
    title: "Timer cues",
    desc: "Fire reminders at specific timestamps or repeating intervals. The clock, but opinionated.",
  },
  {
    num: "02",
    icon: Target,
    title: "State triggers",
    desc: "Cues that react to in-game events: objectives, resources, cooldowns. Context-aware by default.",
  },
  {
    num: "03",
    icon: Mic,
    title: "Voice reminders",
    desc: "Text-to-speech speaks your cues out loud so your eyes stay on the map, not on an overlay.",
  },
  {
    num: "04",
    icon: Share2,
    title: "Shareable cuepacks",
    desc: "Package your cues, hand them to your team or the community. Import, remix, iterate.",
  },
  {
    num: "05",
    icon: Sparkles,
    title: "Open source",
    desc: "MIT-licensed. Read the source, file an issue, ship a PR. No telemetry, no accounts.",
  },
  {
    num: "06",
    icon: Download,
    title: "Runs locally",
    desc: "Tiny Windows app that lives in your tray. Zero latency, no cloud round-trip, no subscription.",
  },
];

type Cue = { trigger: string; kind: "TIMER" | "STATE"; message: string; tag: string };
const CUES: Cue[] = [
  { kind: "TIMER", trigger: "every 00:30", message: "Check your minimap.", tag: "habit" },
  { kind: "STATE", trigger: "dragon_spawn - 00:30", message: "Ward the pit, prep rotation.", tag: "objective" },
  { kind: "TIMER", trigger: "at 14:00", message: "Herald in one minute.", tag: "habit" },
  { kind: "STATE", trigger: "low_mana && lane_pushed", message: "Back to base?", tag: "resource" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Decorative background grid */}
      <div
        className="pointer-events-none fixed inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_20%,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 group rounded-md -ml-1 px-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Leaguedex Home"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
              aria-hidden="true"
            />
            <span className="font-semibold tracking-tight text-[15px]">leaguedex</span>
            <span className="hidden sm:inline-flex items-center font-mono text-[10px] leading-none uppercase text-muted-foreground border border-border rounded px-1.5 py-1 ml-1">
              v1.0 · beta
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted"
            >
              <Github size={14} aria-hidden="true" />
              GitHub
            </Link>
            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted"
            >
              <DiscordIcon size={14} />
              Discord
            </Link>
            <Link
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="sm:hidden text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted"
            >
              <Github size={16} aria-hidden="true" />
            </Link>
            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="sm:hidden text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted"
            >
              <DiscordIcon size={16} />
            </Link>
            <Button
              asChild
              size="sm"
              className="ml-1.5 h-8 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-[13px] rounded-md gap-1.5 px-3"
            >
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                Download
                <ArrowRight size={13} aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-36 sm:pt-40 pb-20 px-4 sm:px-6">
          <div className="relative mx-auto max-w-5xl text-center">
            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.05s" }}
            >
              <Link
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-accent/60 transition-colors"
              >
                <span className="relative inline-flex">
                  <span className="absolute inset-0 rounded-full bg-accent/60 blur-[3px] animate-pulse-soft" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
                </span>
                Open source · Free forever
                <ArrowUpRight
                  size={12}
                  className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <h1
              className="mt-8 text-[44px] leading-[1.02] sm:text-6xl lg:text-[76px] font-semibold tracking-[-0.035em] text-balance opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              Your virtual coach,
              <br />
              <span className="text-muted-foreground">whispering in your ear.</span>
            </h1>

            <p
              className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed text-balance opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              Leaguedex fires custom voice cues on timers or in-game state. Build habits,
              sharpen skills, stay mentally sharp, without ever looking away from the map.
            </p>

            <div
              className="mt-9 flex flex-col sm:flex-row gap-2.5 justify-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.35s" }}
            >
              <Button
                asChild
                size="lg"
                className="group h-11 px-5 gap-2 rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_0_0_1px_rgba(0,0,0,0.1)]"
              >
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Download size={16} aria-hidden="true" />
                  Download for Windows
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="opacity-60 group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 px-5 gap-2 rounded-md font-medium bg-transparent border-border text-foreground hover:bg-muted hover:text-foreground hover:border-border"
              >
                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                  <Github size={16} aria-hidden="true" />
                  View source
                </a>
              </Button>
            </div>

            <p
              className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.45s" }}
            >
              Windows 10+ &nbsp;·&nbsp; ~12&nbsp;MB &nbsp;·&nbsp; No account
            </p>

            {/* Video preview */}
            <div
              className="relative mt-16 sm:mt-20 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.55s" }}
            >
              <div
                className="pointer-events-none absolute -inset-x-24 -top-16 h-[420px] aura opacity-70 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative mx-auto max-w-4xl rounded-xl border border-border bg-card/70 backdrop-blur-sm p-1.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.02)_inset]">
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    preview · 1080p
                  </span>
                </div>
                <div className="relative aspect-video rounded-md overflow-hidden border border-border bg-background">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/SL_V0_jrz7c"
                    title="Leaguedex App Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="relative border-y border-border bg-card/40 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 divide-x divide-border [&>*:nth-child(n+3)]:border-t sm:[&>*:nth-child(n+3)]:border-t-0">
            <TrustItem label="License" value="MIT" />
            <TrustItem label="Platform" value="Windows 10+" />
            <TrustItem label="Install size" value="~12 MB" />
            <TrustItem label="Price" value="Free" accent />
          </div>
        </section>

        {/* Features */}
        <section className="relative px-4 sm:px-6 py-24 sm:py-28">
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-2xl mb-14 sm:mb-16">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
                ◆ &nbsp;Features
              </p>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.025em] leading-[1.05] text-balance">
                Built for players who want to{" "}
                <span className="text-muted-foreground">improve deliberately.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
              {FEATURES.map((f) => (
                <FeatureTile key={f.num} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* Cue examples */}
        <section className="relative border-t border-border bg-gradient-to-b from-background to-card/30 px-4 sm:px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
                  ▸ &nbsp;Examples
                </p>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.025em] leading-[1.05] text-balance">
                  Turn any habit into a cue.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Compose cues like you&apos;d compose a build path. Ping yourself at a
                  timestamp, react to a state change, or chain conditions together. Save them
                  as a cuepack, share them with your team, iterate until it clicks.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Habit loops", "Objective prep", "Resource checks", "Wave states", "Cooldown reminders"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center font-mono text-[11px] text-muted-foreground border border-border rounded-full px-2.5 py-1"
                      >
                        {chip}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="grid gap-3">
                {CUES.map((c, i) => (
                  <CueCard key={i} {...c} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coaches */}
        <section className="relative border-t border-border px-4 sm:px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <div
                className="absolute inset-0 bg-dots opacity-40 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative p-8 sm:p-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div className="max-w-xl">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
                    ◇ &nbsp;For coaches & creators
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.1]">
                    Package your system. Ship it to your students.
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Turn your coaching notes into cuepacks. Share them in one click. Help the
                    habits stick even when you&apos;re not on the call.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
                  <Button
                    asChild
                    size="lg"
                    className="h-11 px-5 gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                  >
                    <Link href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                      <DiscordIcon size={16} />
                      Talk on Discord
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-11 px-5 gap-2 rounded-md bg-transparent border-border hover:bg-muted hover:text-foreground hover:border-border font-medium"
                  >
                    <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                      <Github size={16} aria-hidden="true" />
                      Read the docs
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative border-t border-border px-4 sm:px-6 py-24 sm:py-28 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-full bg-dots opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
              ◉ &nbsp;Ready when you are
            </p>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
              Install once. <span className="text-muted-foreground">Climb for the rest of the season.</span>
            </h2>
            <div className="mt-9 flex flex-col sm:flex-row gap-2.5 justify-center">
              <Button
                asChild
                size="lg"
                className="group h-11 px-5 gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Download size={16} aria-hidden="true" />
                  Download Leaguedex
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="opacity-60 group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 px-5 gap-2 rounded-md bg-transparent border-border hover:bg-muted hover:text-foreground hover:border-border font-medium"
              >
                <Link href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                  <DiscordIcon size={16} />
                  Join the Discord
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 sm:px-6 py-12 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-3 w-fit" aria-label="Leaguedex Home">
                <Image src="/logo.svg" alt="" width={22} height={22} aria-hidden="true" />
                <span className="font-semibold tracking-tight">leaguedex</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                Your virtual coach for League of Legends. Open source, runs locally, free forever.
              </p>
            </div>

            <FooterColumn title="Product">
              <FooterLink href={DOWNLOAD_URL}>Download</FooterLink>
              <FooterLink href={RELEASES_URL}>Releases</FooterLink>
              <FooterLink href={REPO_URL}>Source code</FooterLink>
            </FooterColumn>

            <FooterColumn title="Community">
              <FooterLink href={DISCORD_URL}>Discord</FooterLink>
              <FooterLink href={REPO_URL}>GitHub</FooterLink>
              <FooterLink href={ISSUES_URL}>Issues</FooterLink>
            </FooterColumn>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <span>© {new Date().getFullYear()} leaguedex</span>
              <span className="text-border">/</span>
              <span>MIT License</span>
            </div>
            <div className="flex items-center gap-1">
              <Link
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted"
              >
                <Github size={16} aria-hidden="true" />
              </Link>
              <Link
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted"
              >
                <DiscordIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TrustItem({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 px-4 py-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      <span
        className={`text-sm font-semibold tracking-tight ${accent ? "text-accent" : "text-foreground"}`}
      >
        {value}
      </span>
    </div>
  );
}

function FeatureTile({ num, icon: Icon, title, desc }: Feature) {
  return (
    <div className="group relative bg-card p-7 flex flex-col gap-4 hover:bg-card/60 transition-colors">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-md border border-border bg-background/60 flex items-center justify-center group-hover:border-accent/60 group-hover:text-accent transition-colors">
          <Icon size={18} aria-hidden="true" />
        </div>
        <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground group-hover:text-accent transition-colors">
          {num}
        </span>
      </div>
      <div>
        <h3 className="text-[17px] font-semibold tracking-tight text-foreground mb-1.5">
          {title}
        </h3>
        <p className="text-[14px] text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function CueCard({ kind, trigger, message, tag }: Cue) {
  const isState = kind === "STATE";
  return (
    <div className="group relative rounded-lg border border-border bg-card p-4 sm:p-5 hover:border-accent/40 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded border ${
            isState
              ? "text-accent border-accent/30 bg-accent/5"
              : "text-muted-foreground border-border"
          }`}
        >
          {kind}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          #{tag}
        </span>
      </div>
      <div className="font-mono text-[13px] text-muted-foreground mb-3 flex items-start gap-2 min-w-0">
        <span className="text-accent shrink-0 select-none">▸</span>
        <span className="truncate min-w-0">{trigger}</span>
      </div>
      <p className="text-[15px] sm:text-base text-foreground leading-snug">
        &ldquo;{message}&rdquo;
      </p>
    </div>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
