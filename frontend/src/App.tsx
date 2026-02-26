import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyBoundariesMatter from './components/WhyBoundariesMatter';
import TypesOfBoundaries from './components/TypesOfBoundaries';
import StatisticsThatMatter from './components/StatisticsThatMatter';
import TrustHealthyRelationships from './components/TrustHealthyRelationships';
import ActionStepsForTeens from './components/ActionStepsForTeens';
import GameSection from './components/GameSection';
import SourcesCitations from './components/SourcesCitations';

export default function App() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />
            <main>
                <HeroSection />
                <WhyBoundariesMatter />
                <TypesOfBoundaries />
                <StatisticsThatMatter />
                <TrustHealthyRelationships />
                <ActionStepsForTeens />
                <GameSection />
                <SourcesCitations />
            </main>
        </div>
    );
}
