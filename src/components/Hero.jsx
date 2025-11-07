import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t6fYoL-pmPsm38nx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-36 pb-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-purple-700 shadow-sm ring-1 ring-purple-100 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-purple-500"></span>
          Minimal. Modern. Interactive.
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Build a professional presence with a clean, purple-accented design
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          A modern landing experience that pairs crisp typography with a subtle animated background. Perfect for tech, SaaS, and creative teams.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#get-started" className="rounded-full bg-purple-600 px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-purple-700 transition-colors">
            Get Started
          </a>
          <a href="#features" className="rounded-full px-5 py-3 text-sm font-medium text-purple-700 hover:text-purple-800 ring-1 ring-purple-200 hover:ring-purple-300 bg-white/80 backdrop-blur">
            Explore Features
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
