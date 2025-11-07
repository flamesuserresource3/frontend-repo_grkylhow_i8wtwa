import { Shield, Sparkles, Gauge } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Best practices baked in so you can launch with confidence and scale safely.',
  },
  {
    icon: Sparkles,
    title: 'Polished interactions',
    desc: 'Subtle motion, refined spacing, and thoughtful micro-interactions throughout.',
  },
  {
    icon: Gauge,
    title: 'Blazing performance',
    desc: 'Fast by default with an experience optimized for every device and viewport.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need, nothing you don’t</h2>
        <p className="mt-3 text-gray-600">A focused set of essentials to present your product or service with clarity.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
