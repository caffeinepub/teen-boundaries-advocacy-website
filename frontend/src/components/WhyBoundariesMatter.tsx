import { Heart, Star, Shield } from 'lucide-react';

export default function WhyBoundariesMatter() {
    const pillars = [
        {
            icon: <Heart className="w-6 h-6 text-coral-500" />,
            title: 'Emotional Well-Being',
            description:
                'Boundaries protect your feelings and mental health. When you know your limits, you can communicate them clearly and avoid situations that leave you feeling drained, pressured, or hurt.',
            bg: 'bg-coral-50',
            border: 'border-coral-200',
        },
        {
            icon: <Star className="w-6 h-6 text-teal-500" />,
            title: 'Self-Esteem & Confidence',
            description:
                'Setting boundaries is an act of self-respect. Every time you honor your own limits, you reinforce that your feelings and needs matter — and that builds real confidence over time.',
            bg: 'bg-teal-50',
            border: 'border-teal-200',
        },
        {
            icon: <Shield className="w-6 h-6 text-coral-400" />,
            title: 'Safe & Respectful Choices',
            description:
                'Boundaries help you recognize what feels right and what doesn\'t. They give you a framework for making choices that align with your values and keep you safe in relationships.',
            bg: 'bg-cream-200',
            border: 'border-coral-100',
        },
    ];

    return (
        <section id="why-matters" className="py-20 sm:py-28 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-coral-100 text-coral-600 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                        Why It Matters
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Why Boundaries Matter{' '}
                        <span className="text-gradient">for Teens</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        For many teens, romantic relationships are a first experience with close emotional
                        connections. Without clear boundaries, it's easy to feel confused, pressured, or
                        unsure about what's healthy.
                    </p>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className={`${pillar.bg} ${pillar.border} border-2 rounded-3xl p-8 hover:shadow-card-hover transition-shadow duration-300`}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center mb-5">
                                {pillar.icon}
                            </div>
                            <h3 className="font-display text-xl font-bold text-foreground mb-3">
                                {pillar.title}
                            </h3>
                            <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Main content */}
                <div className="bg-cream-200 rounded-3xl p-8 sm:p-12 mb-10">
                    <p className="text-foreground/80 text-base sm:text-lg leading-relaxed mb-6">
                        According to{' '}
                        <a
                            href="https://blumebh.com/teen-dating"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-coral-500 font-semibold hover:underline"
                        >
                            BLume Behavioral Health
                        </a>
                        , boundary setting helps protect emotional well-being, self-esteem, and safe
                        choices in teen dating. When teens learn how to establish strong boundaries,
                        they are more likely to recognize unhealthy behaviors early and make choices
                        that support their safety and self-worth.
                    </p>
                    <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
                        Teaching youth about healthy romantic relationships means helping them understand
                        communication, consent, mutual respect, and personal limits. This is often their
                        first experience with close romantic connections — and getting it right sets the
                        foundation for all future relationships.
                    </p>
                </div>

                {/* Expert quote */}
                <div className="relative bg-white border-l-4 border-coral-400 rounded-r-3xl rounded-tl-3xl p-8 sm:p-10 shadow-card">
                    <div className="absolute -top-4 -left-2 text-coral-300 text-7xl font-display leading-none select-none" aria-hidden="true">
                        "
                    </div>
                    <blockquote className="relative z-10">
                        <p className="text-foreground text-lg sm:text-xl font-semibold leading-relaxed italic mb-4">
                            Communication is important as you reevaluate and revise your boundaries.
                            You want the other person to be clear on the change and the reason behind it.
                        </p>
                        <footer className="text-muted-foreground text-sm font-medium">
                            — Sheldon Reid &amp; Health Guild,{' '}
                            <a
                                href="https://www.helpguide.org/relationships/social-connection/setting-healthy-boundaries-in-relationships"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-500 hover:underline"
                            >
                                HelpGuide.org
                            </a>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
