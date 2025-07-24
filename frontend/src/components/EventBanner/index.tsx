import { useRef, useEffect } from "react";

const banners = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
];

export default function EventBanner() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const currentIndex = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const container = scrollRef.current;
            if (!container) return;

            const bannerWidth = container.clientWidth;
            currentIndex.current = (currentIndex.current + 1) % banners.length;
            container.scrollTo({
                left: currentIndex.current * bannerWidth,
                behavior: "smooth",
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {banners.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`banner-${idx}`}
                        className="min-w-full object-cover snap-center"
                    />
                ))}
            </div>
        </div>
    );
}