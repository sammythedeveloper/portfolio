// src/components/sections/Hero.tsx
export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-brand md:text-7xl">
          Building the Future.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
          I’m Sammy, a full-stack developer obsessed with motion, interaction, and clean code.
        </p>
      </section>
    );
  }