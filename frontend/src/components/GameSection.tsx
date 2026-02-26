import { useState, useRef } from 'react';
import { Gamepad2, ExternalLink, Maximize2, Minimize2, AlertCircle } from 'lucide-react';

const GAME_URL =
    'https://www.figma.com/make/2G9H9FkHp10em4HtzI1AXl/Boundary-Setting-Game-for-Teens?t=U3cianwoGcEygXpy-20&fullscreen=1';

export default function GameSection() {
    const [iframeError, setIframeError] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {
                // Fullscreen not supported, open in new tab instead
                window.open(GAME_URL, '_blank', 'noopener,noreferrer');
            });
        } else {
            document.exitFullscreen().then(() => setIsFullscreen(false));
        }
    };

    return (
        <section id="game" className="py-16 sm:py-24 bg-teal-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                        <Gamepad2 className="w-4 h-4" />
                        Interactive Experience
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Play the Boundary Setting Game
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Practice setting healthy boundaries in real-life scenarios. This interactive game helps teens
                        build confidence and communication skills in a safe, fun environment.
                    </p>
                </div>

                {/* Game container */}
                {!iframeError ? (
                    <div
                        ref={containerRef}
                        className="relative rounded-2xl overflow-hidden shadow-card border border-teal-100 bg-cream-50"
                        style={{ aspectRatio: '16/9', minHeight: '480px' }}
                    >
                        <iframe
                            src={GAME_URL}
                            title="Boundary Setting Game for Teens"
                            allow="fullscreen"
                            className="w-full h-full border-0"
                            onError={() => setIframeError(true)}
                            style={{ minHeight: '480px' }}
                        />

                        {/* Fullscreen toggle */}
                        <button
                            onClick={handleFullscreen}
                            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                            className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-white/90 hover:bg-white text-foreground px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm border border-cream-200 transition-colors"
                        >
                            {isFullscreen ? (
                                <>
                                    <Minimize2 className="w-3.5 h-3.5" />
                                    Exit Fullscreen
                                </>
                            ) : (
                                <>
                                    <Maximize2 className="w-3.5 h-3.5" />
                                    Fullscreen
                                </>
                            )}
                        </button>
                    </div>
                ) : (
                    /* Fallback if iframe is blocked */
                    <div className="rounded-2xl border-2 border-dashed border-teal-200 bg-cream-50 p-12 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-coral-100 flex items-center justify-center">
                                <AlertCircle className="w-8 h-8 text-coral-500" />
                            </div>
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">
                            Game Opens in a New Tab
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            The game is hosted on Figma and may not embed directly. Click below to play it in a new
                            tab — it works best in fullscreen!
                        </p>
                        <a
                            href={GAME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-3.5 rounded-full text-base transition-colors shadow-md"
                        >
                            <Gamepad2 className="w-5 h-5" />
                            Play the Game Now
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                )}

                {/* Always-visible open-in-new-tab link */}
                <div className="mt-5 text-center">
                    <a
                        href={GAME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 font-semibold underline underline-offset-2 transition-colors"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open game in a new tab
                    </a>
                </div>
            </div>
        </section>
    );
}
