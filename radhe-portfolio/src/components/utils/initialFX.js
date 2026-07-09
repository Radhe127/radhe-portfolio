import gsap from "gsap";
import { TextSplitter } from "../../utils/textSplitter";
import { startLenis } from "../../utils/lenis";

// Runs once after the loading overlay finishes.
export function initialFX() {
  document.body.style.overflowY = "auto";
  startLenis();

  const main = document.querySelector(".main-body");
  if (main) main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 0.2,
  });

  // Animate hero text similarly to Advay landing text.
  // Avoid splitting .hero-name (it contains styled spans/gradients).
  const splitTargets = [".hero-greeting", ".hero-title", ".hero-subtitle"];
  const elements = splitTargets.flatMap((sel) => Array.from(document.querySelectorAll(sel)));

  if (elements.length) {
    const split = new TextSplitter(elements, { type: "chars,lines", linesClass: "split-line" });
    gsap.fromTo(
      split.chars,
      { opacity: 0, y: 60, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.02,
        delay: 0.12,
      }
    );
  }

  gsap.fromTo(
    [".hero-name .first-name", ".hero-name .last-name"],
    { opacity: 0, y: 14 },
    { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.05, delay: 0.15 }
  );

  gsap.fromTo(
    ".navbar",
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
  );
}
