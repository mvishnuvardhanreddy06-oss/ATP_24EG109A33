import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0] py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <h3 className="text-[#0f172a] font-bold text-lg tracking-tight">BlogPerfect</h3>
          <p className="text-sm text-[#475569]">Empowering creators since 2026.</p>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-[#475569]">
          <a href="#" className="hover:text-[#4f46e5] transition-colors">About</a>
          <a href="#" className="hover:text-[#4f46e5] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#4f46e5] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#4f46e5] transition-colors">Contact</a>
        </div>
      </div>
      <div className="text-center mt-6 text-xs text-[#94a3b8]">
        &copy; {new Date().getFullYear()} BlogPerfect. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;