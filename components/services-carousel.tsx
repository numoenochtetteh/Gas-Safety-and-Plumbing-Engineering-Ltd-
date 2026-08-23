// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import type { Service } from "@/lib/data";
// import { pexelsPhoto } from "@/lib/media";

// function ServiceCarouselCard({ service }: { service: Service }) {
//   return (
//     <Link
//       href={`/services/${service.slug}`}
//       className="group flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border xs:w-[62%] sm:w-[46%] lg:w-[calc(25%-15px)]"
//     >
//       <div className="h-44 overflow-hidden sm:h-48">
//         <img
//           src={pexelsPhoto(service.image, 700)}
//           alt={service.title}
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//           loading="lazy"
//         />
//       </div>
//       <div className="flex flex-1 flex-col bg-slate-100 p-6">
//         <h3 className="font-display text-lg font-bold text-brand-blue-950 leading-snug">
//           {service.title}
//         </h3>
//         <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
//           {service.summary}
//         </p>
//         <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-blue-900">
//           Read more
//           <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-red-500 text-white transition-colors duration-300 group-hover:bg-brand-red-600">
//             <ChevronRight className="size-3.5" />
//           </span>
//         </span>
//       </div>
//     </Link>
//   );
// }

// export function ServicesCarousel({ services }: { services: Service[] }) {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const [activePage, setActivePage] = useState(0);
//   const [pageCount, setPageCount] = useState(1);

//   const updatePageCount = useCallback(() => {
//     const el = trackRef.current;
//     if (!el || el.clientWidth === 0) return;
//     setPageCount(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
//   }, []);

//   useEffect(() => {
//     updatePageCount();
//     window.addEventListener("resize", updatePageCount);
//     return () => window.removeEventListener("resize", updatePageCount);
//   }, [updatePageCount]);

//   const handleScroll = () => {
//     const el = trackRef.current;
//     if (!el || el.clientWidth === 0) return;
//     setActivePage(Math.round(el.scrollLeft / el.clientWidth));
//   };

//   const scrollToPage = (page: number) => {
//     const el = trackRef.current;
//     if (!el) return;
//     el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" });
//   };

//   const scrollByPage = (direction: 1 | -1) => {
//     const el = trackRef.current;
//     if (!el) return;
//     el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
//   };

//   return (
//     <div className="relative">
//       <button
//         type="button"
//         aria-label="Previous services"
//         onClick={() => scrollByPage(-1)}
//         className="absolute left-0 top-[38%] z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-brand-blue-900 shadow-md transition-colors hover:bg-brand-blue-50 md:flex"
//       >
//         <ChevronLeft className="size-5" />
//       </button>
//       <button
//         type="button"
//         aria-label="Next services"
//         onClick={() => scrollByPage(1)}
//         className="absolute right-0 top-[38%] z-10 hidden size-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-white text-brand-blue-900 shadow-md transition-colors hover:bg-brand-blue-50 md:flex"
//       >
//         <ChevronRight className="size-5" />
//       </button>

//       <div
//         ref={trackRef}
//         onScroll={handleScroll}
//         className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {services.map((service) => (
//           <ServiceCarouselCard key={service.slug} service={service} />
//         ))}
//       </div>

//       {pageCount > 1 && (
//         <div className="mt-7 flex items-center justify-center gap-2">
//           {Array.from({ length: pageCount }).map((_, i) => (
//             <button
//               key={i}
//               type="button"
//               aria-label={`Go to services page ${i + 1}`}
//               onClick={() => scrollToPage(i)}
//               className={`size-2.5 rounded-full transition-colors duration-300 ${
//                 i === activePage
//                   ? "bg-brand-red-500"
//                   : "bg-slate-300 hover:bg-slate-400"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /
// 1
// 1
// 1
// 1
// 1
// 1
// /

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { pexelsPhoto } from "@/lib/media";

function ServiceCarouselCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border xs:w-[62%] sm:w-[46%] lg:w-[340px] xl:w-[360px]"
    >
      <div className="h-44 overflow-hidden sm:h-48">
        <img
          src={pexelsPhoto(service.image, 800)}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col bg-slate-100 p-6">
        <h3 className="font-display text-lg font-bold leading-snug text-brand-blue-950">
          {service.title}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {service.summary}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-blue-900">
          Read more
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-red-500 text-white transition-colors duration-300 group-hover:bg-brand-red-600">
            <ChevronRight className="size-3.5" />
          </span>
        </span>
      </div>
    </Link>
  );
}

export function ServicesCarousel({ services }: { services: Service[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateCarouselState = useCallback(() => {
    const element = trackRef.current;

    if (!element || element.clientWidth === 0) return;

    const maximumScroll = Math.max(
      0,
      element.scrollWidth - element.clientWidth,
    );

    const totalPages =
      maximumScroll === 0
        ? 1
        : Math.ceil(maximumScroll / element.clientWidth) + 1;

    const isAtEnd = element.scrollLeft >= maximumScroll - 4;

    const currentPage = isAtEnd
      ? totalPages - 1
      : Math.min(
          totalPages - 1,
          Math.round(element.scrollLeft / element.clientWidth),
        );

    setPageCount(totalPages);
    setActivePage(currentPage);
    setCanScrollPrevious(element.scrollLeft > 4);
    setCanScrollNext(element.scrollLeft < maximumScroll - 4);
  }, []);

  useEffect(() => {
    const element = trackRef.current;

    if (!element) return;

    updateCarouselState();

    const resizeObserver = new ResizeObserver(() => {
      updateCarouselState();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [services.length, updateCarouselState]);

  const scrollToPage = (page: number) => {
    const element = trackRef.current;

    if (!element) return;

    const maximumScroll = Math.max(
      0,
      element.scrollWidth - element.clientWidth,
    );

    const left = Math.min(page * element.clientWidth, maximumScroll);

    element.scrollTo({
      left,
      behavior: "smooth",
    });
  };

  const scrollByPage = (direction: 1 | -1) => {
    const element = trackRef.current;

    if (!element) return;

    const maximumScroll = Math.max(
      0,
      element.scrollWidth - element.clientWidth,
    );

    const nextPosition = Math.min(
      maximumScroll,
      Math.max(0, element.scrollLeft + direction * element.clientWidth),
    );

    element.scrollTo({
      left: nextPosition,
      behavior: "smooth",
    });
  };

  if (services.length === 0) return null;

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous services"
        disabled={!canScrollPrevious}
        onClick={() => scrollByPage(-1)}
        className="absolute left-0 top-[38%] z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-brand-blue-900 shadow-md transition-all duration-300 hover:bg-brand-blue-50 disabled:pointer-events-none disabled:opacity-40 md:flex"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        type="button"
        aria-label="Next services"
        disabled={!canScrollNext}
        onClick={() => scrollByPage(1)}
        className="absolute right-0 top-[38%] z-10 hidden size-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-white text-brand-blue-900 shadow-md transition-all duration-300 hover:bg-brand-blue-50 disabled:pointer-events-none disabled:opacity-40 md:flex"
      >
        <ChevronRight className="size-5" />
      </button>

      <div
        ref={trackRef}
        onScroll={updateCarouselState}
        aria-label="Our services"
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service) => (
          <ServiceCarouselCard key={service.slug} service={service} />
        ))}
      </div>

      {pageCount > 1 && (
        <div
          className="mt-7 flex items-center justify-center gap-2"
          aria-label="Services carousel pagination"
        >
          {Array.from({ length: pageCount }).map((_, index) => {
            const isActive = index === activePage;

            return (
              <button
                key={index}
                type="button"
                aria-label={`Go to services page ${index + 1}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => scrollToPage(index)}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-2.5 w-7 bg-brand-red-500"
                    : "size-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
