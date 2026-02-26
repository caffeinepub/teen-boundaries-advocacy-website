import { MessageCircle, Users, CheckCircle, AlertTriangle } from 'lucide-react';

export default function TrustHealthyRelationships() {
    const pillars = [
        {
            icon: <MessageCircle className="w-6 h-6 text-coral-500" />,
            title: 'Open Communication',
            description:
                'Healthy relationships are built on honest, two-way communication. You should feel safe expressing your feelings, needs, and concerns without fear of judgment or retaliation.',
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-teal-500" />,
            title: 'Consent & Respect',
            description:
                'Consent means freely and enthusiastically agreeing to something. In healthy relationships, both people respect each other\'s "yes" and "no" — every single time.',
        },
        {
            icon: <Users className="w-6 h-6 text-coral-400" />,
            title: 'Mutual Respect',
            description:
                'Respect means valuing each other\'s feelings, opinions, and boundaries. It means never pressuring, manipulating, or belittling your partner — and expecting the same in return.',
        },
        {
            icon: <AlertTriangle className="w-6 h-6 text-teal-400" />,
            title: 'Recognizing Warning Signs',
            description:
                'Unhealthy behaviors include jealousy, controlling actions, pressure, and dismissing your feelings. Recognizing these early helps you make choices that protect your safety and self-worth.',
        },
    ];

    return (
        <section id="trust" className="py-20 sm:py-28 bg-cream-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-teal-100 text-teal-600 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                        Building Together
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Trust &amp; Healthy{' '}
                        <span className="text-gradient">Relationships</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Trust is the foundation of every healthy relationship. When you and your partner
                        both practice trust-building behaviors, you create something meaningful and lasting.
                    </p>
                </div>

                {/* Expert quote — featured */}
                <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden">
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <div className="text-white/40 text-8xl font-display leading-none mb-2 select-none" aria-hidden="true">
                            "
                        </div>
                        <blockquote>
                            <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed italic mb-6">
                                Encouraging youth to reflect on and practice trust-building behaviors
                                can help them create healthier, more meaningful romantic relationships.
                            </p>
                            <footer className="text-white/80 text-sm font-medium">
                                —{' '}
                                <a
                                    href="https://possibilitiesforchange.org/how-to-teach-youth-about-healthy-romantic-relationships/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white underline hover:text-white/90"
                                >
                                    Possibilities for Change
                                </a>
                                , How to Teach Youth About Healthy Romantic Relationships
                            </footer>
                        </blockquote>
                    </div>
                </div>

                {/* Four pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="bg-white border-2 border-cream-300 rounded-3xl p-7 flex gap-5 hover:shadow-card transition-shadow duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-cream-200 flex items-center justify-center flex-shrink-0">
                                {pillar.icon}
                            </div>
                            <div>
                                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing paragraph */}
                <div className="mt-12 text-center max-w-2xl mx-auto">
                    <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
                        Trust makes teens feel safe, respected, and valued. It sets the foundation for
                        strong relationships not just now, but throughout your entire life. When you
                        practice trust-building, you're investing in your own future happiness.
                    </p>
                </div>
            </div>
        </section>
    );
}
