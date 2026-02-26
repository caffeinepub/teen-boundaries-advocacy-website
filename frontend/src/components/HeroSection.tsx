import { ArrowDown, Shield } from 'lucide-react';

export default function HeroSection() {
    const scrollToNext = () => {
        const el = document.getElementById('why-matters');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/generated/hero-bg.dim_1440x600.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                    }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 gradient-hero" />
            </div>

            {/* Decorative circles */}
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-coral-300/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-teal-300/20 blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
                    <Shield className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold tracking-wide uppercase">
                        PBL Project · Teen Relationship Health
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    Your Boundaries.{' '}
                    <span className="text-coral-200">Your Power.</span>
                    <br />
                    Your Relationships.
                </h1>

                {/* Mission statement */}
                <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
                    Learning to set and respect boundaries is one of the most important skills
                    you can build as a teen. Healthy boundaries protect your emotional well-being,
                    build your confidence, and create relationships based on respect — not pressure.
                </p>

                {/* Our Watch Statistic callout */}
                <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-3xl p-6 sm:p-8 mb-10 max-w-2xl mx-auto text-left">
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                        📊 New Research · Our Watch, June 2025
                    </p>
                    <p className="text-white text-base sm:text-lg font-semibold leading-relaxed">
                        Over <span className="text-coral-200 font-extrabold text-xl">1 in 4</span> teens aged 14–20 confuse
                        controlling behaviours — including forced physical touch — as a "healthy boundary."
                    </p>
                    <p className="text-white/80 text-sm mt-3">
                        Yet only <span className="text-coral-200 font-bold">22%</span> feel completely confident
                        taking action when they feel unsafe or disrespected in a relationship.
                    </p>
                </div>

                {/* CTA */}
                <button
                    onClick={scrollToNext}
                    className="group inline-flex items-center gap-3 bg-white text-coral-600 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-coral-50 transition-all duration-300"
                >
                    Discover Why Boundaries Matter
                    <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
                        fill="oklch(0.98 0.01 80)"
                    />
                </svg>
            </div>
        </section>
    );
}
