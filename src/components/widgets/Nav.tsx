export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50">
        <div className="font-bold text-xl tracking-tighter">SAMSON.</div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-brand transition-colors">About</a>
          <a href="#projects" className="hover:text-brand transition-colors">Projects</a>
          {/* Placeholder for the Theme Toggle we'll build next */}
          <button className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </nav>
    );
  }