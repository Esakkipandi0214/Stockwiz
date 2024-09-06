"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    quote: string;
    name: string;
    src: StaticImageData;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-6 py-4", // Common classes
              "w-[300px] md:w-[350px] lg:w-[450px] max-w-full", // Responsiveness for card width
              "md:px-8 md:py-6" // Padding for larger screens
            )}
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              {/* Image and Title */}
              <div className="flex items-center space-x-2 mb-2 md:mb-4">
                <Image
                  src={item.src.src}
                  alt={item.name}
                  className="w-10 h-10 rounded-full md:w-12 md:h-12"
                  width={100}
                  height={100}
                />
                <span className="text-xs md:text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.title}
                </span>
              </div>

              {/* Quote */}
              <span className="relative z-20 text-xs md:text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>

              {/* Name */}
              <div className="relative z-20 mt-4 md:mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-xs md:text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
