import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Intro Text */}

      <div className="relative w-64 h-64 mb-8 rounded-full overflow-hidden border-4 border-black transition-transform duration-500 hover:scale-105">
        <Image
          src="https://framerusercontent.com/images/G7pAzXNdA4oxyw4kbTVYB0npiM.png?scale-down-to=512&width=1254&height=1254"
          alt="Sammy"
          fill
          priority
          className="object-contain"
        />
      </div>
      <p className="text-text-main font-medium mb-2 tracking-wide uppercase">
        Hello!
      </p>

      <h1 className="text-5xl md:text-7xl font-bold text-text-main mb-4">
        I'm <span className="text-gold-rich">Samson</span>
      </h1>

      <h2 className="text-xl md:text-2xl text-text-muted mb-6">
        Full-Stack Developer
      </h2>

      <p className="max-w-md text-text-muted mb-8">
        I build high-impact, user-focused applications with a focus on clean
        code and elegant motion.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-transparent border border-gold-rich text-gold-rich rounded-full hover:bg-gold-rich/10 transition">
          View My Work
        </button>

        <button className="px-6 py-3 bg-gold-rich text-navy-base font-bold rounded-full hover:brightness-110 transition">
          Let's Connect
        </button>
      </div>
    </section>
  );
}
