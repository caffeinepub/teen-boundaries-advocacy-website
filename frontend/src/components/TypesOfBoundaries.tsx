import { Hand, Brain, Smartphone } from 'lucide-react';

interface BoundaryCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    examples: string[];
    colorClass: string;
    bgClass: string;
    borderClass: string;
    badgeClass: string;
}

function BoundaryCard({
    icon,
    title,
    subtitle,
    description,
    examples,
    colorClass,
    bgClass,
    borderClass,
    badgeClass,
}: BoundaryCardProps) {
    return (
        <div className={`${bgClass} ${borderClass} border-2 rounded-3xl p-8 sm:p-10 flex flex-col hover:shadow-card-hover transition-all duration-300 group`}>
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl ${badgeClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>

            {/* Title */}
            <div className="mb-4">
                <span className={`text-xs font-bold uppercase tracking-widest ${colorClass} mb-1 block`}>
                    {subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                    {title}
                </h3>
            </div>

            {/* Description */}
            <p className="text-foreground/70 leading-relaxed mb-6 text-sm sm:text-base flex-grow">
                {description}
            </p>

            {/* Examples */}
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Examples include:
                </p>
                <ul className="space-y-2">
                    {examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${badgeClass}`} />
                            {ex}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function TypesOfBoundaries() {
    const boundaries = [
        {
            icon: <Hand className="w-8 h-8 text-coral-500" />,
            title: 'Physical Boundaries',
            subtitle: 'Type 1',
            description:
                'Physical boundaries are about your personal space and body. You have the right to decide who can touch you, how, and when. No one should ever pressure you into physical contact that makes you uncomfortable — and that includes hugs, holding hands, or anything more.',
            examples: [
                'Deciding who can hug or touch you',
                'Saying no to physical contact you\'re not comfortable with',
                'Choosing how close someone can stand to you',
                'Setting limits on physical affection in a relationship',
            ],
            colorClass: 'text-coral-500',
            bgClass: 'bg-coral-50',
            borderClass: 'border-coral-200',
            badgeClass: 'bg-coral-100',
        },
        {
            icon: <Brain className="w-8 h-8 text-teal-500" />,
            title: 'Emotional Boundaries',
            subtitle: 'Type 2',
            description:
                'Emotional boundaries protect your feelings, privacy, and sense of self. They help you stay true to who you are without feeling responsible for managing someone else\'s emotions. Healthy emotional boundaries mean you can share feelings without being manipulated or guilted.',
            examples: [
                'Not sharing personal feelings before you\'re ready',
                'Refusing to take blame for someone else\'s emotions',
                'Keeping some thoughts and experiences private',
                'Saying "I need space" when you feel overwhelmed',
            ],
            colorClass: 'text-teal-500',
            bgClass: 'bg-teal-50',
            borderClass: 'border-teal-200',
            badgeClass: 'bg-teal-100',
        },
        {
            icon: <Smartphone className="w-8 h-8 text-coral-400" />,
            title: 'Digital Boundaries',
            subtitle: 'Type 3',
            description:
                'Digital boundaries cover your online life — your social media, messages, photos, and privacy. In today\'s world, healthy relationships respect your digital space just as much as your physical one. No partner should demand access to your accounts or pressure you to share private content.',
            examples: [
                'Keeping your passwords and accounts private',
                'Deciding what photos or messages you share',
                'Not feeling obligated to respond instantly',
                'Blocking or muting content that makes you uncomfortable',
            ],
            colorClass: 'text-coral-400',
            bgClass: 'bg-cream-200',
            borderClass: 'border-coral-100',
            badgeClass: 'bg-coral-100',
        },
    ];

    return (
        <section id="types" className="py-20 sm:py-28 bg-cream-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-teal-100 text-teal-600 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                        Know Your Limits
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Three Types of{' '}
                        <span className="text-gradient">Boundaries</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Boundaries aren't just about saying "no" — they're about knowing yourself and
                        communicating your needs clearly. Here are the three key types every teen should know.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {boundaries.map((b) => (
                        <BoundaryCard key={b.title} {...b} />
                    ))}
                </div>

                {/* Source note */}
                <p className="text-center text-muted-foreground text-sm mt-10">
                    Content based on guidance from{' '}
                    <a
                        href="https://blumebh.com/teen-dating"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coral-500 hover:underline font-medium"
                    >
                        BLume Behavioral Health
                    </a>
                </p>
            </div>
        </section>
    );
}
