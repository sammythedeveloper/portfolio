"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  char: string;
  alpha: number;
  currentAlpha: number;
  delay: number;
  shimmer: number;
};

type AsciiPortraitProps = {
  src: string;
  size?: number;
};

const CHARS = " .:-=+*#%@";

export default function AsciiPortrait({
  src,
  size = 360,
}: AsciiPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const particlesRef = useRef<Particle[]>([]);

  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    active: false,
  });

  const mouseTargetRef = useRef({
    x: -1000,
    y: -1000,
  });

  const animationRef =
    useRef<number | null>(null);

  const startTimeRef = useRef(0);

  const [ready, setReady] =
    useState(false);

  /**
   * Convert the source image into ASCII particles.
   */
  const processImage = useCallback(
    (img: HTMLImageElement) => {
      const canvas =
        document.createElement("canvas");

      const ctx = canvas.getContext("2d", {
        willReadFrequently: true,
      });

      if (!ctx) return [];

      canvas.width = size;
      canvas.height = size;

      /**
       * Use more of the available canvas.
       */
      const scale = 0.94;

      const aspect =
        img.width / img.height;

      let width = size * scale;
      let height = width / aspect;

      if (height > size * scale) {
        height = size * scale;
        width = height * aspect;
      }

      const offsetX =
        (size - width) / 2;

      const offsetY =
        (size - height) / 2;

      ctx.clearRect(
        0,
        0,
        size,
        size
      );

      /**
       * Increase image contrast so
       * facial features survive the
       * ASCII conversion better.
       */
      ctx.filter =
        "contrast(1.25)";

      ctx.drawImage(
        img,
        offsetX,
        offsetY,
        width,
        height
      );

      ctx.filter = "none";

      const imageData =
        ctx.getImageData(
          0,
          0,
          size,
          size
        );

      const pixels =
        imageData.data;

      const particles: Particle[] = [];

      /**
       * Smaller characters create
       * a denser portrait.
       */
      const fontSize =
        size <= 300 ? 4.5 : 5.5;

      const columnGap =
        fontSize * 0.62;

      const rowGap =
        fontSize * 0.9;

      for (
        let y = 0;
        y < size;
        y += rowGap
      ) {
        for (
          let x = 0;
          x < size;
          x += columnGap
        ) {
          const px =
            Math.floor(x);

          const py =
            Math.floor(y);

          const index =
            (py * size + px) * 4;

          const r =
            pixels[index];

          const g =
            pixels[index + 1];

          const b =
            pixels[index + 2];

          const alpha =
            pixels[index + 3];

          /**
           * Ignore transparent pixels.
           */
          if (alpha < 80)
            continue;

          /**
           * RGB → brightness.
           */
          const brightness =
            (r + g + b) /
            (3 * 255);

          /**
           * Ignore completely dark
           * parts of the image.
           */
          if (
            brightness < 0.06
          )
            continue;

          const charIndex =
            Math.floor(
              brightness *
                (CHARS.length - 1)
            );

          const char =
            CHARS[
              Math.max(
                0,
                Math.min(
                  CHARS.length - 1,
                  charIndex
                )
              )
            ];

          particles.push({
            /**
             * Start particles scattered.
             */
            x:
              x +
              (Math.random() -
                0.5) *
                size *
                1.2,

            y:
              y +
              (Math.random() -
                0.5) *
                size *
                1.2,

            targetX: x,
            targetY: y,

            vx: 0,
            vy: 0,

            char,

            /**
             * MUCH stronger base opacity.
             */
            alpha:
              0.9 +
              brightness * 0.1,

            currentAlpha: 0,

            /**
             * Stagger the entrance.
             */
            delay:
              Math.random() * 0.8,

            shimmer:
              Math.random() *
              Math.PI *
              2,
          });
        }
      }

      return particles;
    },
    [size]
  );

  /**
   * Load the portrait.
   */
  useEffect(() => {
    let cancelled = false;

    const img =
      new Image();

    img.onload = () => {
      if (cancelled)
        return;

      const particles =
        processImage(img);

      particlesRef.current =
        particles;

      startTimeRef.current =
        performance.now();

      setReady(true);
    };

    img.onerror = () => {
      console.error(
        "Could not load ASCII portrait:",
        src
      );
    };

    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [
    src,
    processImage,
  ]);

  /**
   * Canvas + animation.
   */
  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas || !ready)
      return;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    const dpr =
      window.devicePixelRatio ||
      1;

    canvas.width =
      size * dpr;

    canvas.height =
      size * dpr;

    canvas.style.width =
      `${size}px`;

    canvas.style.height =
      `${size}px`;

    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );

    const particles =
      particlesRef.current;

    const draw = () => {
      animationRef.current =
        requestAnimationFrame(
          draw
        );

      ctx.clearRect(
        0,
        0,
        size,
        size
      );

      const elapsed =
        (performance.now() -
          startTimeRef.current) /
        1000;

      const mouse =
        mouseRef.current;

      const mouseTarget =
        mouseTargetRef.current;

      /**
       * Smooth cursor movement.
       */
      mouse.x +=
        (mouseTarget.x -
          mouse.x) *
        0.15;

      mouse.y +=
        (mouseTarget.y -
          mouse.y) *
        0.15;

      const fontSize =
        size <= 300
          ? 4.5
          : 5.5;

      ctx.font =
        `${fontSize}px monospace`;

      ctx.textAlign =
        "center";

      ctx.textBaseline =
        "middle";

      particles.forEach(
        (particle) => {
          const time =
            elapsed -
            particle.delay;

          if (time < 0)
            return;

          /**
           * Fade particles into
           * the final portrait.
           */
          const fadeProgress =
            Math.min(
              time / 1.5,
              1
            );

          const fade =
            1 -
            Math.pow(
              1 - fadeProgress,
              3
            );

          /**
           * Very subtle shimmer.
           *
           * Reduced from 0.06 so
           * particles don't become
           * noticeably transparent.
           */
          const shimmer =
            Math.sin(
              elapsed * 2 +
                particle.shimmer
            ) * 0.02;

          particle.currentAlpha =
            Math.max(
              0,
              particle.alpha *
                fade +
                shimmer
            );

          /**
           * --------------------------------
           * Mouse interaction
           * --------------------------------
           */
          if (mouse.active) {
            const dx =
              particle.x -
              mouse.x;

            const dy =
              particle.y -
              mouse.y;

            const distance =
              Math.sqrt(
                dx * dx +
                  dy * dy
              );

            const radius =
              size * 0.22;

            if (
              distance <
                radius &&
              distance > 0
            ) {
              const strength =
                Math.pow(
                  1 -
                    distance /
                      radius,
                  2
                ) * 3.5;

              particle.vx +=
                (dx / distance) *
                strength;

              particle.vy +=
                (dy / distance) *
                strength;
            }
          }

          /**
           * --------------------------------
           * Return to portrait
           * --------------------------------
           */
          const targetDx =
            particle.targetX -
            particle.x;

          const targetDy =
            particle.targetY -
            particle.y;

          particle.vx +=
            targetDx * 0.035;

          particle.vy +=
            targetDy * 0.035;

          /**
           * Tiny organic movement.
           */
          particle.vx +=
            Math.sin(
              elapsed * 0.7 +
                particle.targetY *
                  0.04
            ) * 0.008;

          particle.vy +=
            Math.cos(
              elapsed * 0.7 +
                particle.targetX *
                  0.04
            ) * 0.008;

          /**
           * Friction.
           */
          particle.vx *= 0.9;
          particle.vy *= 0.9;

          particle.x +=
            particle.vx;

          particle.y +=
            particle.vy;

          /**
           * Copper portrait.
           *
           * 1.8 multiplier makes
           * the portrait much brighter.
           */
          const finalAlpha =
            Math.min(
              particle.currentAlpha *
                1.8,
              1
            );

          ctx.fillStyle =
            `rgba(184, 115, 51, ${finalAlpha})`;

          ctx.fillText(
            particle.char,
            particle.x,
            particle.y
          );
        }
      );
    };

    draw();

    return () => {
      if (
        animationRef.current
      ) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, [size, ready]);

  /**
   * Mouse / touch handlers.
   */
  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const updatePointer = (
      clientX: number,
      clientY: number
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      mouseTargetRef.current.x =
        clientX -
        rect.left;

      mouseTargetRef.current.y =
        clientY -
        rect.top;

      mouseRef.current.active =
        true;
    };

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      updatePointer(
        event.clientX,
        event.clientY
      );
    };

    const handleTouchMove = (
      event: TouchEvent
    ) => {
      const touch =
        event.touches[0];

      if (!touch) return;

      updatePointer(
        touch.clientX,
        touch.clientY
      );

      if (
        event.cancelable
      ) {
        event.preventDefault();
      }
    };

    const handleLeave = () => {
      mouseRef.current.active =
        false;

      mouseTargetRef.current.x =
        -1000;

      mouseTargetRef.current.y =
        -1000;
    };

    canvas.addEventListener(
      "mousemove",
      handleMouseMove
    );

    canvas.addEventListener(
      "mouseleave",
      handleLeave
    );

    canvas.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive: false,
      }
    );

    canvas.addEventListener(
      "touchend",
      handleLeave
    );

    return () => {
      canvas.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      canvas.removeEventListener(
        "mouseleave",
        handleLeave
      );

      canvas.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      canvas.removeEventListener(
        "touchend",
        handleLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Interactive ASCII portrait of Samson Daba"
      role="img"
      className="block"
      style={{
        width: "100%",
        height: "100%",
        touchAction: "none",
        cursor: "crosshair",
      }}
    />
  );
}