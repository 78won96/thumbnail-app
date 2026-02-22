"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"
                }`}
        >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-8">
                {/* Left: Logo + Text */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform group-hover:scale-110">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
                        </svg>
                        <div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-white">Thumbnail-AI</span>
                </Link>

                {/* Center: Navigation Links */}
                <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
                    <Link href="#features" className="transition-colors hover:text-white">Features</Link>
                    <Link href="#pricing" className="transition-colors hover:text-white">Pricing</Link>
                    <Link href="#contact" className="transition-colors hover:text-white">Contact</Link>
                </nav>

                {/* Right: Get Started Button */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/auth"
                        className="hidden rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white md:block"
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/auth"
                        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:bg-white/90 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
