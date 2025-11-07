export default function CTA() {
  return (
    <section id="get-started" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-white to-purple-50 p-10 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Ready to elevate your brand?</h3>
            <p className="mt-2 max-w-xl text-sm text-gray-600">Launch a clean, modern landing page with interactive visuals and purple accents that feel professional and fresh.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="rounded-full bg-purple-600 px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-purple-700 transition-colors">Start free</a>
            <a href="#contact" className="rounded-full px-5 py-3 text-sm font-medium text-purple-700 hover:text-purple-800 ring-1 ring-purple-200 hover:ring-purple-300 bg-white">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
