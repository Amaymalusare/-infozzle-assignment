import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { IconButton } from "../ui/IconButton.jsx";

export function PeekCarousel({ slides, autoplayInterval = 5500 }) {
  const [index, setIndex] = useState(0);
  const [autoplayReset, setAutoplayReset] = useState(0);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const slideRefs = useRef([]);

  const layout = useCallback(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    const slideEls = slideRefs.current.filter(Boolean);
    if (!track || !viewport || !slideEls.length) return;

    slideEls.forEach((el, i) => {
      el.classList.toggle("is-center", i === index);
    });

    const vpWidth = viewport.clientWidth;
    const centerEl = slideEls[index];
    const centerWidth = centerEl.offsetWidth;
    const gapStr = getComputedStyle(track).gap || "0";
    const gap = parseFloat(gapStr) || 0;
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += slideEls[i].offsetWidth + gap;
    }
    const target = offset - (vpWidth - centerWidth) / 2;
    track.style.transform = `translateX(${-Math.max(0, target)}px)`;
  }, [index]);

  useLayoutEffect(() => {
    layout();
  }, [index, layout, slides.length]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => layout());
    ro.observe(viewport);
    return () => ro.disconnect();
  }, [layout]);

  useEffect(() => {
    let id;
    const tick = () => setIndex((i) => (i + 1) % slides.length);
    const start = () => {
      window.clearInterval(id);
      id = window.setInterval(tick, autoplayInterval);
    };
    const onVis = () => {
      if (document.hidden) window.clearInterval(id);
      else start();
    };
    start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [autoplayInterval, slides.length, autoplayReset]);

  const bumpAutoplay = () => setAutoplayReset((k) => k + 1);

  const step = (delta) => {
    setIndex((i) => (i + delta + slides.length) % slides.length);
    bumpAutoplay();
  };

  const setSlideRef = (i) => (el) => {
    slideRefs.current[i] = el;
  };

  return (
    <div className="peek-carousel">
      <div className="peek-carousel__viewport rounded-4 shadow-sm mx-auto" ref={viewportRef}>
        <div className="peek-carousel__track" ref={trackRef}>
          {slides.map((slide, i) => (
            <article key={slide.src} className="peek-slide shadow rounded-4" ref={setSlideRef(i)}>
              <img src={slide.src} alt={slide.alt} onLoad={layout} />
              <p className="peek-slide__caption">{slide.caption}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="peek-carousel__controls">
        <IconButton label="Previous slide" onClick={() => step(-1)}>
          ‹
        </IconButton>
        <IconButton label="Next slide" onClick={() => step(1)}>
          ›
        </IconButton>
      </div>
    </div>
  );
}
