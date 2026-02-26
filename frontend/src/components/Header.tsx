import { Heart } from 'lucide-react';

export default function Header() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-coral-100 shadow-xs">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                            <img
                                src="/assets/generated/site-logo.dim_200x200.png"
                                alt="BoundaryStrong Logo"
                                className="w-full h-full object-contain rounded-full"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const fallback = target.nextElementSibling as HTMLElement;
                                    if (fallback) fallback.style.display = 'flex';
                                }}
                            />
                            <div
                                className="hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coral-100 items-center justify-center"
                                aria-hidden="true"
                            >
                                <Heart className="w-5 h-5 text-coral-500 fill-coral-300" />
                            </div>
                        </div>
                        <div>
                            <span className="font-display font-bold text-lg sm:text-xl text-coral-600 leading-tight block">
                                BoundaryStrong
                            </span>
                            <span className="text-xs text-muted-foreground hidden sm:block">
                                Healthy Relationships for Teens
                            </span>
                        </div>
                    </div>

                    {/* Nav links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {[
                            { label: 'Why It Matters', id: 'why-matters' },
                            { label: 'Types', id: 'types' },
                            { label: 'Statistics', id: 'statistics' },
                            { label: 'Trust', id: 'trust' },
                            { label: 'Action Steps', id: 'action-steps' },
                            { label: '🎮 Play the Game', id: 'game' },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={
                                    item.id === 'game'
                                        ? 'px-3 py-2 text-sm font-bold text-coral-500 hover:text-coral-600 rounded-lg hover:bg-coral-50 transition-colors'
                                        : 'px-3 py-2 text-sm font-semibold text-foreground/70 hover:text-coral-500 rounded-lg hover:bg-coral-50 transition-colors'
                                }
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile CTA */}
                    <button
                        onClick={() => scrollToSection('game')}
                        className="md:hidden px-4 py-2 bg-coral-500 text-white text-sm font-bold rounded-full hover:bg-coral-600 transition-colors"
                    >
                        Play Game
                    </button>
                </div>
            </div>
        </header>
    );
}
