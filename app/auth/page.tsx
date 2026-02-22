"use client";

import React, { useState, useEffect } from "react";

export default function AuthPage() {
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

            <section className="relative isolate h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center">
                {/* ================== BACKGROUND ================== */}
                <div
                    aria-hidden
                    className="absolute inset-0 -z-30"
                    style={{
                        backgroundImage: [
                            "radial-gradient(80% 55% at 50% 52%, rgba(255,50,50,0.15) 0%, rgba(214,76,82,0.2) 27%, rgba(61,36,47,0.25) 47%, rgba(39,38,67,0.3) 60%, rgba(8,8,12,0.8) 78%, rgba(0,0,0,1) 88%)",
                            "radial-gradient(85% 60% at 14% 0%, rgba(255,100,100,0.25) 0%, rgba(233,109,99,0.15) 30%, rgba(48,24,28,0.0) 64%)",
                        ].join(","),
                        backgroundColor: "#000",
                    }}
                />

                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-20"
                    style={{
                        backgroundImage: [
                            "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 96px)",
                            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 24px)",
                        ].join(","),
                    }}
                />

                {/* ================== CONTENT ================== */}
                <div className={`relative z-10 w-full max-w-md px-6 text-center ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                    <div className="mb-12 flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-4">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
                            </svg>
                            <span className="text-2xl font-bold tracking-tight">Thumbnail-AI</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-white/60">Continue with Google to start creating.</p>
                    </div>

                    <div className="grid gap-4">
                        <button
                            className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition-all hover:bg-white/90 active:scale-[0.98]"
                            onClick={() => console.log("Google Login clicked")}
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Continue with Google
                        </button>
                    </div>

                    <p className="mt-8 text-xs text-white/40">
                        By continuing, you agree to our <a href="#" className="underline hover:text-white/60">Terms of Service</a> and <a href="#" className="underline hover:text-white/60">Privacy Policy</a>.
                    </p>
                </div>

                {/* ================== FOREGROUND EFFECTS ================== */}
                <div
                    className="pointer-events-none absolute bottom-1/4 left-1/2 z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]"
                    style={{ animation: 'subtlePulse 8s ease-in-out infinite' }}
                />
            </section>
        </>
    );
}
