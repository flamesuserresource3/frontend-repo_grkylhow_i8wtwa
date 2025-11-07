export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-purple-100 pt-8 md:flex-row md:items-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Violet Labs. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-purple-700">Privacy</a>
          <a href="#" className="hover:text-purple-700">Terms</a>
          <a href="mailto:hello@example.com" className="hover:text-purple-700">hello@example.com</a>
        </div>
      </div>
    </footer>
  );
}
