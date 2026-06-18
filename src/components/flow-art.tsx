import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function cx(...parts: Array<string | undefined | false>): string {
  return parts.filter(Boolean).join(" ");
}

export interface FlowSectionProps {
  className?: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  disableStackPin?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
  "aria-label"?: string;
  id?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  containerClassName,
  containerStyle,
  disableStackPin = false,
  style = {},
  children,
  "aria-label": ariaLabel,
  id,
}) => (
  <section
    id={id}
    data-flow-section
    data-disable-stack-pin={disableStackPin ? "true" : undefined}
    aria-label={ariaLabel}
    className={cx("relative isolate w-full min-h-screen overflow-hidden bg-background", className)}
    style={style}
  >
    <div
      className={cx(
        "flow-art-container relative w-full min-h-screen bg-background",
        containerClassName,
      )}
      style={containerStyle}
    >
      {children}
    </div>
  </section>
);

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

const childCount = (children: React.ReactNode) => React.Children.count(children);

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  "aria-label": ariaLabel = "Story scroll",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return;

      const sections = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>("[data-flow-section]"),
      );
      if (sections.length === 0) return;

      const triggers: ScrollTrigger[] = [];

      sections.forEach((section, i) => {
        gsap.set(section, {
          zIndex: i + 1,
          position: "relative",
          force3D: true,
        });

        if (i < sections.length - 1 && section.dataset.disableStackPin !== "true") {
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              start: "bottom bottom",
              end: "bottom top",
              pin: true,
              pinSpacing: false,
            }),
          );
        }
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: containerRef, dependencies: [childCount(children), reducedMotion] },
  );

  return (
    <div ref={containerRef} aria-label={ariaLabel} className={cx("relative", className)}>
      {children}
    </div>
  );
};

export default FlowArt;
