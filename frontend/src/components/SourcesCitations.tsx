import { ExternalLink, Heart } from 'lucide-react';

interface CitationProps {
    number: number;
    authors: string;
    title: string;
    organization: string;
    url: string;
    accessDate: string;
    note?: string;
}

function Citation({ number, authors, title, organization, url, accessDate, note }: CitationProps) {
    return (
        <div className="flex gap-4 group">
            <div className="w-8 h-8 rounded-full bg-coral-100 text-coral-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                {number}
            </div>
            <div className="flex-grow">
                <p className="text-foreground/80 text-sm leading-relaxed">
                    {authors && <span className="font-semibold">{authors}. </span>}
                    <em>{title}.</em>{' '}
                    {organization && <span>{organization}, </span>}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coral-500 hover:text-coral-600 hover:underline inline-flex items-center gap-1 break-all"
                    >
                        {url}
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    </a>
                    {'. '}
                    <span className="text-muted-foreground">Accessed {accessDate}.</span>
                </p>
                {note && (
                    <p className="text-muted-foreground text-xs mt-1 italic">{note}</p>
                )}
            </div>
        </div>
    );
}

export default function SourcesCitations() {
    const citations: CitationProps[] = [
        {
            number: 1,
            authors: 'BLume Behavioral Health',
            title: 'Teen Dating: Establishing Strong Boundaries for Teens',
            organization: '',
            url: 'https://blumebh.com/teen-dating',
            accessDate: '23 Feb. 2026',
        },
        {
            number: 2,
            authors: 'Reid, Sheldon, and Health Guild',
            title: 'Setting Healthy Boundaries in Relationships',
            organization: 'HelpGuide.org',
            url: 'https://www.helpguide.org/relationships/social-connection/setting-healthy-boundaries-in-relationships',
            accessDate: '23 Feb. 2026',
        },
        {
            number: 3,
            authors: 'Possibilities for Change',
            title: 'How to Teach Youth About Healthy Romantic Relationships',
            organization: '',
            url: 'https://possibilitiesforchange.org/how-to-teach-youth-about-healthy-romantic-relationships/',
            accessDate: '23 Feb. 2026',
        },
        {
            number: 4,
            authors: 'Our Watch',
            title: 'New Data on Young People and Relationship Boundaries',
            organization: '',
            url: 'https://www.ourwatch.org.au',
            accessDate: '23 Feb. 2026',
            note: 'Data released 3 June 2025.',
        },
    ];

    const hostname = typeof window !== 'undefined' ? window.location.hostname : 'unknown-app';
    const utmUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

    return (
        <footer className="bg-foreground text-background">
            {/* Sources section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <span className="inline-block bg-white/10 text-white/80 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                        References
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                        Sources &amp; Citations
                    </h2>
                    <p className="text-white/60 text-sm">
                        All information on this site is drawn from credible, research-backed sources.
                    </p>
                </div>

                <div className="space-y-6 mb-16">
                    {citations.map((c) => (
                        <Citation key={c.number} {...c} />
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Site info */}
                        <div className="text-center sm:text-left">
                            <p className="text-white/80 font-bold text-sm">BoundaryStrong</p>
                            <p className="text-white/50 text-xs mt-1">
                                A PBL Project on Teen Relationship Health · {new Date().getFullYear()}
                            </p>
                        </div>

                        {/* Attribution */}
                        <p className="text-white/50 text-xs text-center sm:text-right">
                            Built with{' '}
                            <Heart className="inline w-3 h-3 text-coral-400 fill-coral-400 mx-0.5" />
                            {' '}using{' '}
                            <a
                                href={utmUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-coral-400 hover:text-coral-300 hover:underline"
                            >
                                caffeine.ai
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
