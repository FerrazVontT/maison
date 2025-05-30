'use client';

import { useEffect, useRef } from "react";

export default function GucciContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const btn = btnRef.current;
    if (!video || !section || !btn) return;

    video.play().catch(() => {});

    let inside = false;

    const inViewport = () => {
      const r = section.getBoundingClientRect();
      return r.top >= 0 && r.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    };

    const sync = () => {
      if (!video) return;
      if (inViewport()) {
        if (!inside && video.paused) {
          video.play().catch(() => {});
          btn.textContent = "Pause";
          inside = true;
        }
      } else if (inside) {
        video.pause();
        btn.textContent = "Play";
        inside = false;
      }
    };

    btn.onclick = () => {
      if (video.paused) {
        video.play().catch(() => {});
        btn.textContent = "Pause";
      } else {
        video.pause();
        btn.textContent = "Play";
      }
    };

    window.addEventListener("scroll", sync);
    window.addEventListener("load", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("load", sync);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-[100vh] flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4 py-14 bg-white"
    >
      {/* vídeo */}
      <div className="w-full md:w-1/2">
        <video
          ref={videoRef}
          muted
          playsInline
          className="w-full h-[360px] object-cover bg-black rounded-md"
        >
          <source src="/0e134a40-03a2-4f52-a4f1-ea3828c91d7f.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mt-3 flex justify-center">
          <button
            ref={btnRef}
            className="border border-black px-4 py-2 text-sm hover:bg-gray-100 transition"
          >
            Pause
          </button>
        </div>
      </div>

      {/* texto */}
      <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0 px-4 text-center">
        <h1 className="text-4xl font-bold uppercase mb-4">Cruise 2025</h1>
        <p className="text-base leading-relaxed mb-6 max-w-prose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque fugit, exercitationem nulla nobis quam reprehenderit,
          odio hic vel omnis ut dignissimos expedita veritatis provident est veniam voluptates a explicabo.
        </p>
        <a
          href="https://example.com"
          target="_blank"
          className="font-bold relative inline-block text-black transition duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black hover:before:w-full before:transition-all before:duration-300"
        >
          DISCOVER MORE
        </a>
      </div>
    </div>
  );
}
