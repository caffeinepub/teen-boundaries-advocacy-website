interface StatCardProps {
    stat: string;
    description: string;
    source: string;
    sourceUrl: string;
    accent: 'coral' | 'teal';
    note?: string;
}

function StatCard({ stat, description, source, sourceUrl, accent, note }: StatCardProps) {
    const accentStyles = {
        coral: {
            bg: 'bg-coral-500',
            text: 'text-coral-500',
            light: 'bg-coral-50',
            border: 'border-coral-200',
            badge: 'bg-coral-100 text-coral-600',
        },
        teal: {
            bg: 'bg-teal-500',
            text: 'text-teal-500',
            light: 'bg-teal-50',
            border: 'border-teal-200',
            badge: 'bg-teal-100 text-teal-600',
        },
    };

    const styles = accentStyles[accent];

    return (
        <div className={`${styles.light} ${styles.border} border-2 rounded-3xl p-8 flex flex-col hover:shadow-card-hover transition-all duration-300`}>
            {/* Big stat number */}
            <div className={`font-display text-5xl sm:text-6xl font-bold ${styles.text} mb-3 leading-none`}>
                {stat}
            </div>

            {/* Description */}
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed mb-4 flex-grow font-medium">
                {description}
            </p>

            {/* Note */}
            {note && (
                <p className="text-foreground/60 text-sm leading-relaxed mb-4 italic">
                    {note}
                </p>
            )}

            {/* Source */}
            <div className={`inline-flex items-center gap-2 ${styles.badge} rounded-full px-3 py-1.5 text-xs font-bold self-start`}>
                <span>Source:</span>
                <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    {source}
                </a>
            </div>
        </div>
    );
}

export default function StatisticsThatMatter() {
    const stats: StatCardProps[] = [
        {
            stat: '72%',
            description: 'of Americans find it challenging to establish healthy family boundaries, often due to feelings of guilt or obligation.',
            source: 'HelpGuide',
            sourceUrl: 'https://www.helpguide.org/relationships/social-connection/setting-healthy-boundaries-in-relationships',
            accent: 'coral',
        },
        {
            stat: '78%',
            description: 'of people intended to focus on setting healthy boundaries in 2023 — showing how widely recognized this need has become.',
            note: 'Research also links blurring work-life boundaries to emotional exhaustion and lower happiness.',
            source: 'HelpGuide',
            sourceUrl: 'https://www.helpguide.org/relationships/social-connection/setting-healthy-boundaries-in-relationships',
            accent: 'teal',
        },
        {
            stat: '25%+',
            description: 'of teens aged 14–20 confuse controlling behaviours — including forced physical touch — as a "healthy boundary."',
            note: 'New data released June 3, 2025.',
            source: 'Our Watch',
            sourceUrl: 'https://www.ourwatch.org.au',
            accent: 'coral',
        },
        {
            stat: '22%',
            description: 'of teens feel completely confident taking action when they are uncomfortable, feel unsafe, or are disrespected in a relationship.',
            note: 'This means nearly 4 in 5 teens lack full confidence to act when they need to.',
            source: 'Our Watch',
            sourceUrl: 'https://www.ourwatch.org.au',
            accent: 'teal',
        },
    ];

    return (
        <section id="statistics" className="py-20 sm:py-28 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-coral-100 text-coral-600 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                        The Data
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Statistics That{' '}
                        <span className="text-gradient">Matter</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        The numbers tell a clear story: teens need better tools and education around
                        healthy boundaries. Here's what the research shows.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {stats.map((stat) => (
                        <StatCard key={stat.stat + stat.source} {...stat} />
                    ))}
                </div>

                {/* Bottom callout */}
                <div className="mt-12 bg-gradient-to-r from-coral-50 to-teal-50 border border-coral-100 rounded-3xl p-8 text-center">
                    <p className="text-foreground/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        These statistics show that boundary confusion is widespread — but it's not
                        inevitable. With the right education and support, every teen can learn to
                        recognize, set, and maintain healthy boundaries.
                    </p>
                </div>
            </div>
        </section>
    );
}
