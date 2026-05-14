import { Link } from "react-router";
import { pageWrapper, primaryBtn, secondaryBtn, bodyText } from "../styles/common";

function Home() {
  return (
    <div className={`${pageWrapper} flex flex-col items-center justify-center min-h-[70vh] text-center`}>
      <div className="bg-[#4f46e5]/10 text-[#4f46e5] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-[#4f46e5]/20 shadow-sm">
        Welcome to BlogApp
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1] mb-6 max-w-4xl">
        Share your ideas with the world.
      </h1>

      <p className={`${bodyText} text-lg md:text-xl max-w-2xl mb-12`}>
        A premium platform for authors and readers to connect, share knowledge, and build inspired communities through beautiful storytelling.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link to="/register" className={primaryBtn + " py-3 px-8 text-base shadow-md hover:-translate-y-0.5 transition-transform"}>
          Start Writing Today
        </Link>
        <Link to="/login" className={secondaryBtn + " py-3 px-8 text-base bg-white shadow-sm hover:shadow-md transition-shadow"}>
          Sign In
        </Link>
      </div>

      {/* Stats or feature highlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-[#e2e8f0] pt-16 w-full">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#e2e8f0] flex items-center justify-center text-[#4f46e5] text-xl font-bold mb-2">
            ✍️
          </div>
          <h3 className="text-lg font-bold text-[#0f172a]">Quality Content</h3>
          <p className="text-sm text-[#475569] text-center max-w-[200px]">Curated and thought-provoking articles from passionate experts.</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#e2e8f0] flex items-center justify-center text-[#4f46e5] text-xl font-bold mb-2">
            📝
          </div>
          <h3 className="text-lg font-bold text-[#0f172a]">Focus on Writing</h3>
          <p className="text-sm text-[#475569] text-center max-w-[200px]">Distraction-free environment for authors to craft stories.</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#e2e8f0] flex items-center justify-center text-[#4f46e5] text-xl font-bold mb-2">
            🤝
          </div>
          <h3 className="text-lg font-bold text-[#0f172a]">Community Driven</h3>
          <p className="text-sm text-[#475569] text-center max-w-[200px]">Engage in meaningful discussions with readers who matter.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;