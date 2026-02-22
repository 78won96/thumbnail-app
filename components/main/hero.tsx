"use client";

import React, { useState, useEffect } from "react";

export function Web3HeroAnimated() {
    // Symmetric pillar heights (percent). Tall at edges, low at center.
    const pillars = [92, 84, 78, 70, 62, 54, 46, 34, 18, 34, 46, 54, 62, 70, 78, 84, 92];

    // State to trigger animations once the component is mounted.
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <style>
                {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes subtlePulse {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.03);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
            </style>

            <section className="relative isolate h-screen overflow-hidden bg-black text-white">
                {/* ================== BACKGROUND ================== */}
                <div
                    aria-hidden
                    className="absolute inset-0 -z-30"
                    style={{
                        backgroundImage: [
                            "radial-gradient(80% 55% at 50% 52%, rgba(255,50,50,0.25) 0%, rgba(214,76,82,0.3) 27%, rgba(61,36,47,0.38) 47%, rgba(39,38,67,0.45) 60%, rgba(8,8,12,0.92) 78%, rgba(0,0,0,1) 88%)",
                            "radial-gradient(85% 60% at 14% 0%, rgba(255,100,100,0.45) 0%, rgba(233,109,99,0.3) 30%, rgba(48,24,28,0.0) 64%)",
                            "radial-gradient(70% 50% at 86% 22%, rgba(88,112,255,0.30) 0%, rgba(16,18,28,0.0) 55%)",
                            "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0) 40%)",
                        ].join(","),
                        backgroundColor: "#000",
                    }}
                />

                <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(140%_120%_at_50%_0%,transparent_60%,rgba(0,0,0,0.85))]" />

                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-30"
                    style={{
                        backgroundImage: [
                            "repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0 1px, transparent 1px 96px)",
                            "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 24px)",
                            "repeating-radial-gradient(80% 55% at 50% 52%, rgba(255,255,255,0.08) 0 1px, transparent 1px 120px)"
                        ].join(","),
                        backgroundBlendMode: "screen",
                    }}
                />

                {/* Header removed and replaced by global Navbar */}

                {/* ================== COPY ================== */}
                <div className="relative z-10 mx-auto grid w-full max-w-5xl place-items-center px-6 py-16 md:py-24 lg:py-28 text-center">
                    <div className={`${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> AI YouTube Toolkit
                        </span>

                        {/* Visual SVG Element */}
                        <div className="mt-8 flex justify-center animate-float">
                            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="116" height="76" rx="8" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                                <path d="M50 30L75 40L50 50V30Z" fill="white" fillOpacity="0.8" />
                                <circle cx="20" cy="20" r="4" fill="white" fillOpacity="0.4" />
                                <rect x="30" y="18" width="40" height="4" rx="2" fill="white" fillOpacity="0.2" />
                                <rect x="18" y="58" width="84" height="6" rx="3" fill="white" fillOpacity="0.3" />
                            </svg>
                        </div>

                        <h1 style={{ animationDelay: '200ms' }} className={`mt-6 text-4xl font-bold tracking-tight md:text-6xl ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                            Create Viral YouTube <br />
                            <span className="text-red-500">Thumbnails</span> with AI
                        </h1>
                        <p style={{ animationDelay: '300ms' }} className={`mx-auto mt-6 max-w-2xl text-balance text-white/80 md:text-lg ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                            Thumbnail-AI uses advanced deep learning to generate high-CTR thumbnails <br className="hidden md:block" />
                            specifically optimized for your video niche. Boost your views in seconds.
                        </p>
                        <div style={{ animationDelay: '400ms' }} className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                            <a href="#" className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-500">Start Generating</a>
                            <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:border-white/40">View Showcase</a>
                        </div>
                    </div>
                </div>

                {/* ================== FOOTER / BRANDS ================== */}
                <div className="relative z-10 mx-auto mt-10 w-full max-w-6xl px-6 pb-24">
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50 grayscale contrast-125">
                        {["YouTube", "Twitch", "Adobe", "Premiere", "DaVinci", "Canva"].map((brand) => (
                            <div key={brand} className="text-xs uppercase tracking-widest font-bold text-white/80">{brand}</div>
                        ))}
                    </div>
                </div>

                {/* ================== FOREGROUND EFFECTS ================== */}
                <div
                    className="pointer-events-none absolute bottom-[128px] left-1/2 z-0 h-36 w-28 -translate-x-1/2 rounded-md bg-gradient-to-b from-red-500/30 via-red-200/10 to-transparent"
                    style={{ animation: 'subtlePulse 6s ease-in-out infinite' }}
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[54vh]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-px px-[2px]">
                        {pillars.map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-black transition-height duration-1000 ease-in-out"
                                style={{
                                    height: isMounted ? `${h}%` : '0%',
                                    transitionDelay: `${Math.abs(i - Math.floor(pillars.length / 2)) * 60}ms`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
