import HeroContent from "./HeroContent";
import TypingCodeEditor from "./TypingCodeEditor";

export default function Hero () {
    return (
        <section  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-2 md:py-15 relative min-h-[70vh]">
            <HeroContent/>
            <TypingCodeEditor/>
        </section>
    );
}