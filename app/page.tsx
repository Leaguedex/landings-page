import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Users, Zap, Github, MessageCircle } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-border">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/leaguedex-logo.png"
                            alt="Leaguedex"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        <span className="font-bold text-lg text-foreground hidden sm:inline">
                            Leaguedx
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link
                            href="https://github.com/donnyroufs/leaguedx.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                        >
                            <Github size={20} />
                        </Link>
                        <Link
                            href="https://discord.gg/leaguedx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                        >
                            <MessageCircle size={20} />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background via-background to-secondary">
                <div className="max-w-7xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-7xl font-bold text-foreground text-balance leading-tight">
                            Your{" "}
                            <span className="text-accent">Virtual Coach</span>{" "}
                            for League of Legends
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                            Create custom cues to build better habits, sharpen
                            your skills, and stay mentally sharp. Get TTS
                            reminders based on time or in-game state.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 text-base"
                        >
                            <Download size={20} />
                            Download Now (Windows)
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-accent text-accent hover:bg-accent/10 font-semibold text-base bg-transparent"
                        >
                            <Github size={20} />
                            View on GitHub
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 border-t border-border bg-background">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
                        Core Features - Always Free
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <Card className="bg-card border-border hover:border-accent/50 transition-colors p-8 space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Zap className="text-accent" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                                Manual Cue Creation
                            </h3>
                            <p className="text-muted-foreground">
                                Create cues based on time or in-game state. Set
                                reminders for anything you want to improve on or
                                stay sharp about.
                            </p>
                        </Card>

                        {/* Feature 2 */}
                        <Card className="bg-card border-border hover:border-accent/50 transition-colors p-8 space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Users className="text-accent" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                                Share Cuepacks
                            </h3>
                            <p className="text-muted-foreground">
                                Build cuepacks and share them with your team or
                                the community. Help others form better habits
                                and improve their gameplay.
                            </p>
                        </Card>

                        {/* Feature 3 */}
                        <Card className="bg-card border-border hover:border-accent/50 transition-colors p-8 space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Zap className="text-accent" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                                Voice Reminders
                            </h3>
                            <p className="text-muted-foreground">
                                Get TTS reminders that keep you focused. Listen
                                while you play—no need to check your screen.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Showcase Section */}
            <section className="py-20 px-4 bg-secondary">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-foreground">
                                What You Can Create
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-1 bg-accent rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">
                                            Habit Reminders
                                        </h4>
                                        <p className="text-muted-foreground">
                                            "Check your minimap" at 1:00, 2:00,
                                            3:00... Build consistency and
                                            awareness.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1 bg-chart-2 rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">
                                            Skill Development
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Cues to practice specific skills:
                                            positioning, trading, resource
                                            management, whatever you need to
                                            sharpen.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1 bg-accent rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">
                                            Time-Based Cues
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Reminders at specific timestamps or
                                            intervals to keep you engaged and
                                            focused throughout the game.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1 bg-chart-2 rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">
                                            State-Based Triggers
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Create cues that trigger based on
                                            game events like objectives spawning
                                            or specific in-game conditions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-card rounded-lg border border-border p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                                    <span className="text-sm text-muted-foreground">
                                        Active Pack
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-secondary rounded p-4 space-y-2 border-l-2 border-accent">
                                        <p className="text-sm text-muted-foreground">
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
                                        <p className="text-sm text-muted-foreground">
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
                                        <p className="text-sm text-muted-foreground">
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
            <section className="py-20 px-4 border-t border-border bg-background">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-foreground">
                            For Coaches & Content Creators
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Interested in integrating Leaguedx into your
                            coaching workflow? Let's talk about how we can help
                            your students improve.
                        </p>
                    </div>

                    <Link
                        href="https://discord.gg/leaguedx"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2">
                            <MessageCircle size={18} />
                            Join Discord to Discuss
                        </Button>
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-secondary border-t border-border">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold text-foreground">
                        Ready to Improve Your Game?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Start using Leaguedx today. Core features are always
                        free, and it's open source.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 text-base"
                        >
                            <Download size={20} />
                            Download for Windows
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-border text-foreground hover:bg-card font-semibold text-base bg-transparent"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border py-12 px-4 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Image
                                    src="/leaguedx-logo.png"
                                    alt="Leaguedx"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                                <span className="font-bold text-foreground">
                                    Leaguedx
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Your virtual coach for League of Legends
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-4">
                                Community
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link
                                        href="https://discord.gg/leaguedx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-accent transition-colors"
                                    >
                                        Discord
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://github.com/donnyroufs/leaguedx.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-accent transition-colors"
                                    >
                                        GitHub
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-accent transition-colors"
                                    >
                                        Issues
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-4">
                                More
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-accent transition-colors"
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-accent transition-colors"
                                    >
                                        Status
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-accent transition-colors"
                                    >
                                        Roadmap
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © 2025 Leaguedx. Open source & core features free
                            forever.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link
                                href="https://github.com/donnyroufs/leaguedx.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent transition-colors"
                            >
                                <Github size={20} />
                            </Link>
                            <Link
                                href="https://discord.gg/leaguedx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent transition-colors"
                            >
                                <MessageCircle size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
