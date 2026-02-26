import { Lightbulb, MessageSquare, Eye, ThumbsUp, BookOpen, ArrowRight } from 'lucide-react';

interface ActionStepProps {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

function ActionStep({ number, icon, title, description }: ActionStepProps) {
    return (
        <div className="flex gap-5 group">
            {/* Number + icon */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-coral-500 text-white flex items-center justify-center font-bold text-lg shadow-card group-hover:bg-coral-600 transition-colors">
                    {number}
                </div>
                <div className="w-0.5 flex-grow bg-coral-100 last:hidden" />
            </div>

            {/* Content */}
            <div className="pb-8">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-coral-400">{icon}</span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                        {title}
                    </h3>
                </div>
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function ActionStepsForTeens() {
    const steps: ActionStepProps[] = [
        {
            number: '01',
            icon: <Lightbulb className="w-5 h-5" />,
            title: 'Know Your Values & Limits',
            description:
                'Take time to reflect on what matters most to you — your values, your comfort zones, and your non-negotiables. You can\'t communicate your boundaries clearly if you haven\'t identified them first. Journaling or talking with a trusted adult can help.',
        },
        {
            number: '02',
            icon: <MessageSquare className="w-5 h-5" />,
            title: 'Communicate Clearly & Directly',
            description:
                'Use "I" statements to express your needs: "I feel uncomfortable when..." or "I need us to..." Clear, direct communication removes confusion and shows respect for both yourself and your partner. Remember: you don\'t need to apologize for having boundaries.',
        },
        {
            number: '03',
            icon: <Eye className="w-5 h-5" />,
            title: 'Recognize Warning Signs Early',
            description:
                'Learn to spot behaviors that signal an unhealthy relationship: jealousy, controlling behavior, pressure to change, dismissing your feelings, or making you feel guilty for saying no. Trust your instincts — if something feels wrong, it probably is.',
        },
        {
            number: '04',
            icon: <ThumbsUp className="w-5 h-5" />,
            title: 'Feel Empowered to Say No',
            description:
                '"No" is a complete sentence. You never need to justify, explain, or apologize for saying no to something that makes you uncomfortable. A partner who truly respects you will honor your "no" without pressure, guilt, or manipulation.',
        },
        {
            number: '05',
            icon: <ArrowRight className="w-5 h-5" />,
            title: 'Revisit & Revise Your Boundaries',
            description:
                'Boundaries can change as you grow and as relationships evolve. It\'s okay to update them. When you do, communicate the change clearly so both people understand the new expectations. Healthy relationships adapt together.',
        },
    ];

    return (
        <section id="action-steps" className="py-20 sm:py-28 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-coral-100 text-coral-600 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                        Take Action
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Action Steps{' '}
                        <span className="text-gradient">for Teens</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Knowing about boundaries is the first step — but putting them into practice
                        is where real change happens. Here's how to start today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
                    {/* Steps */}
                    <div className="lg:col-span-1">
                        {steps.map((step) => (
                            <ActionStep key={step.number} {...step} />
                        ))}
                    </div>

                    {/* Workshop callout + extra content */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Workshop callout */}
                        <div className="bg-gradient-to-br from-coral-500 to-coral-600 rounded-3xl p-8 text-white sticky top-24">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
                                    School Workshops
                                </span>
                            </div>
                            <h3 className="font-display text-2xl font-bold mb-4">
                                Bring Boundary Education to Your School
                            </h3>
                            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                                Schools should implement workshops on boundary-setting. These workshops
                                are essential for equipping teens with:
                            </p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    'The confidence to set boundaries',
                                    'The ability to recognize warning signs',
                                    'Skills to foster healthier relationships',
                                    'A safe space to ask questions',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                                        <span className="w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-white/70 text-xs leading-relaxed">
                                Based on research from{' '}
                                <a
                                    href="https://possibilitiesforchange.org/how-to-teach-youth-about-healthy-romantic-relationships/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white underline"
                                >
                                    Possibilities for Change
                                </a>
                            </p>
                        </div>

                        {/* Remember card */}
                        <div className="bg-teal-50 border-2 border-teal-200 rounded-3xl p-8">
                            <h3 className="font-display text-xl font-bold text-foreground mb-4">
                                Remember This 💙
                            </h3>
                            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                                Setting boundaries isn't selfish — it's self-care. It's not about
                                pushing people away; it's about creating space for genuine connection
                                built on mutual respect. The right people will honor your boundaries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
