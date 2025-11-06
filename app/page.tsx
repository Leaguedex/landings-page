import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Users, Zap, Github } from "lucide-react";

// Discord Icon Component
function DiscordIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 -ml-2"
            aria-label="Leaguedex Home"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={32}
              height={32}
              className="w-8 h-8"
              aria-hidden="true"
            />
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              Leaguedex
            </span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="https://github.com/donnyroufs/leaguedex.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md p-1.5"
              aria-label="View Leaguedex on GitHub"
            >
              <Github size={20} aria-hidden="true" />
            </Link>
            <Link
              href="https://discord.gg/ycFJxnVvMZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md p-1.5"
              aria-label="Join Leaguedex Discord community"
            >
              <DiscordIcon size={20} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="main-content"
        className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary"
      >
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight tracking-tight">
              Your <span className="text-accent">Virtual Coach</span> for League
              of Legends
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Create custom cues to build better habits, sharpen your skills,
              and stay mentally sharp. Get TTS reminders based on time or
              in-game state.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 text-base px-8"
            >
              <a
                href="https://github.com/donnyroufs/leaguedex.app/releases/latest/download/Leaguedex-setup.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={20} aria-hidden="true" />
                Download Now (Windows)
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-accent text-accent hover:!bg-transparent hover:!text-accent hover:underline font-semibold text-base bg-transparent px-8"
            >
              <a
                href="https://github.com/donnyroufs/leaguedex.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} aria-hidden="true" />
                View on GitHub
              </a>
            </Button>
          </div>

          <div className="pt-12 sm:pt-16">
            <div className="relative mx-auto max-w-5xl">
              {/* Multiple layered glow effects for 3D depth */}
              <div className="absolute inset-0 -inset-8 bg-accent/30 blur-3xl rounded-3xl opacity-60"></div>
              <div className="absolute inset-0 -inset-4 bg-accent/20 blur-2xl rounded-2xl opacity-40"></div>
              <div className="absolute inset-0 -inset-2 bg-accent/10 blur-xl rounded-xl opacity-30"></div>

              {/* Main container with 3D transforms and layered shadows */}
              <div className="relative overflow-hidden rounded-lg border border-accent/20 shadow-[0_0_60px_rgba(0,217,255,0.3),0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm bg-background/40 transform perspective-1000 rotate-x-[2deg]">
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-background/20 pointer-events-none z-10"></div>
                <Image
                  src="/leaguedex-view.png"
                  alt="Leaguedex application interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto -mx-0.5 -my-0.25 scale-x-[1.01] scale-y-[1.005] relative z-0"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 sm:mb-16 text-center">
            Core Features - Always Free
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-200 p-6 sm:p-8 space-y-4 h-full">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Zap className="text-accent" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Manual Cue Creation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Create cues based on time or in-game state. Set reminders for
                anything you want to improve on or stay sharp about.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-200 p-6 sm:p-8 space-y-4 h-full">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Users className="text-accent" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Share Cuepacks
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Build cuepacks and share them with your team or the community.
                Help others form better habits and improve their gameplay.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-200 p-6 sm:p-8 space-y-4 h-full sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Zap className="text-accent" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Voice Reminders
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get TTS reminders that keep you focused. Listen while you
                play—no need to check your screen.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start md:items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                What You Can Create
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      Habit Reminders
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      "Check your minimap" at 1:00, 2:00, 3:00... Build
                      consistency and awareness.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-chart-2 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      Skill Development
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Cues to practice specific skills: positioning, trading,
                      resource management, whatever you need to sharpen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      Time-Based Cues
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Reminders at specific timestamps or intervals to keep you
                      engaged and focused throughout the game.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-chart-2 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      State-Based Triggers
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Create cues that trigger based on game events like
                      objectives spawning or specific in-game conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-lg border border-border p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full bg-destructive"
                    aria-hidden="true"
                  ></div>
                  <span className="text-sm text-muted-foreground font-medium">
                    Active Pack
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="bg-secondary rounded p-4 space-y-2 border-l-2 border-accent">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                      OBJECTIVE
                    </p>
                    <p className="text-foreground font-semibold">
                      Prepare for dragon!
                    </p>
                    <p className="text-xs text-muted-foreground">
                      90 seconds before Dragon spawns
                    </p>
                  </div>
                  <div className="bg-secondary rounded p-4 space-y-2 border-l-2 border-chart-2">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                      EVENT
                    </p>
                    <p className="text-foreground font-semibold">
                      Watch out for gank
                    </p>
                    <p className="text-xs text-muted-foreground">
                      At 3:45 (time based)
                    </p>
                  </div>
                  <div className="bg-secondary rounded p-4 space-y-2 border-l-2 border-accent">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                      OBJECTIVE
                    </p>
                    <p className="text-foreground font-semibold">
                      Baron is up!
                    </p>
                    <p className="text-xs text-muted-foreground">
                      When Baron spawns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              For Coaches & Content Creators
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Interested in integrating Leaguedex into your coaching workflow?
              Let's talk about how we can help your students improve.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 px-8"
          >
            <Link
              href="https://discord.gg/ycFJxnVvMZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon size={18} />
              Join Discord to Discuss
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Improve Your Game?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start using Leaguedex today. Core features are always free, and it's
            open source.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 text-base px-8"
            >
              <a
                href="https://github.com/donnyroufs/leaguedex.app/releases/latest/download/Leaguedex-setup.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={20} aria-hidden="true" />
                Download for Windows
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 mb-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 -ml-2 w-fit"
                aria-label="Leaguedex Home"
              >
                <Image
                  src="/logo.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  aria-hidden="true"
                />
                <span className="font-bold text-foreground">Leaguedex</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your virtual coach for League of Legends
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="https://discord.gg/ycFJxnVvMZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-sm px-1"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/donnyroufs/leaguedex.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-sm px-1"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/donnyroufs/leaguedex.app/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-sm px-1"
                  >
                    Issues
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="https://github.com/donnyroufs/leaguedex.app/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-sm px-1"
                  >
                    Releases
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 Leaguedex. Open source & core features free forever.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/donnyroufs/leaguedex.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md p-1.5"
                aria-label="View Leaguedex on GitHub"
              >
                <Github size={20} aria-hidden="true" />
              </Link>
              <Link
                href="https://discord.gg/ycFJxnVvMZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md p-1.5"
                aria-label="Join Leaguedex Discord community"
              >
                <DiscordIcon size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
