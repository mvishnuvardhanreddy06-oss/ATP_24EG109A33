// src/styles/common.js
// Theme: Slate Indigo Minimal — white/f8fafc background, #0f172a text, #4f46e5 accent

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-white min-h-screen text-[#0f172a] font-sans";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16";
export const section = "mb-14";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-[#f8fafc] rounded-2xl p-7 hover:bg-[#f1f5f9] hover:shadow-sm border border-[#e2e8f0]/50 transition-all duration-200 cursor-pointer";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-extrabold text-[#0f172a] tracking-tight leading-none mb-2";
export const headingClass = "text-2xl font-bold text-[#0f172a] tracking-tight";
export const subHeadingClass = "text-lg font-semibold text-[#0f172a] tracking-tight";
export const bodyText = "text-[#475569] leading-relaxed";
export const mutedText = "text-sm text-[#94a3b8]";
export const linkClass = "text-[#4f46e5] hover:text-[#4338ca] transition-colors";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-[#4f46e5] shadow-sm text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#4338ca] hover:shadow-md transition-all cursor-pointer text-sm tracking-tight flex items-center justify-center";
export const secondaryBtn =
  "border border-[#e2e8f0] text-[#0f172a] font-medium px-5 py-2.5 rounded-lg hover:bg-[#f8fafc] transition-all cursor-pointer text-sm flex items-center justify-center";
export const ghostBtn = "text-[#4f46e5] font-medium hover:text-[#4338ca] transition-colors cursor-pointer text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard = "bg-[#f8fafc] border border-[#e2e8f0]/60 shadow-sm rounded-2xl p-10 max-w-lg mx-auto";
export const formTitle = "text-3xl font-extrabold text-[#0f172a] tracking-tight text-center mb-7";
export const labelClass = "text-xs font-semibold uppercase tracking-wider text-[#475569] mb-1.5 block";
export const inputClass =
  "w-full bg-white border border-[#e2e8f0] rounded-lg px-4 py-3 text-[#0f172a] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#4f46e5] focus:ring-4 focus:ring-[#4f46e5]/10 transition-all";
export const formGroup = "mb-5";
export const submitBtn =
  "w-full bg-[#4f46e5] shadow-sm text-white font-semibold py-3 rounded-lg hover:bg-[#4338ca] hover:shadow-md transition-all cursor-pointer mt-4 text-sm tracking-tight";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] px-8 h-[64px] flex items-center sticky top-0 z-50";
export const navContainerClass = "max-w-5xl mx-auto w-full flex items-center justify-between";
export const navBrandClass = "text-lg font-bold text-[#0f172a] tracking-tight flex items-center gap-2";
export const navLinksClass = "flex items-center gap-8";
export const navLinkClass = "text-sm text-[#475569] hover:text-[#0f172a] transition-colors font-medium";
export const navLinkActiveClass = "text-sm text-[#4f46e5] font-semibold";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";
export const articleCardClass =
  "bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 hover:border-[#4f46e5]/30 transition-all duration-300 flex flex-col gap-3 cursor-pointer group";
export const articleTitle = "text-lg font-bold text-[#0f172a] leading-tight tracking-tight group-hover:text-[#4f46e5] transition-colors";
export const articleExcerpt = "text-sm text-[#475569] leading-relaxed line-clamp-3";
export const articleMeta = "text-xs text-[#94a3b8]";
export const articleBody = "text-[#475569] leading-[1.85] text-[0.95rem] max-w-2xl";
export const timestampClass = "text-[11px] font-medium text-[#94a3b8] flex items-center gap-1.5 uppercase tracking-wider";
export const tagClass = "text-[10px] font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-2.5 py-1 rounded-md uppercase tracking-wider w-fit";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-14";

export const articleHeader = "mb-10 flex flex-col gap-5";

export const articleCategory = "text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-md w-fit";

export const articleMainTitle = "text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight tracking-tight";

export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-[#e2e8f0] py-5 mt-4 text-sm text-[#475569]";

export const authorInfo = "flex items-center gap-3 font-semibold text-[#0f172a]";

export const articleContent = "text-[#334155] leading-loose text-lg whitespace-pre-wrap mt-8 font-serif";

export const articleFooter = "border-t border-[#e2e8f0] mt-16 pt-8 text-sm text-[#94a3b8]";
// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-3 mt-8";

export const editBtn = "bg-[#4f46e5] text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-[#4338ca] transition-colors shadow-sm";

export const deleteBtn = "bg-white border border-red-200 text-red-600 font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors shadow-sm";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-700 tracking-wider shadow-sm uppercase";

export const articleStatusDeleted =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-md bg-rose-100 text-rose-700 tracking-wider shadow-sm uppercase";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-rose-50 text-rose-600 border border-rose-200 rounded-lg px-4 py-3 text-sm flex items-center";
export const successClass =
  "bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg px-4 py-3 text-sm flex items-center";
export const loadingClass = "text-[#4f46e5] text-sm animate-pulse text-center py-12 font-medium tracking-wide";
export const emptyStateClass = "text-center text-[#94a3b8] py-20 text-sm border-2 border-dashed border-[#e2e8f0] rounded-2xl";

// ─── Comments ───────────────────────────────────────
export const commentsWrapper = "mt-16 flex flex-col gap-6";

export const commentCard = "bg-white border border-[#e2e8f0] shadow-sm rounded-xl p-6 transition-all hover:shadow-md";

export const commentHeader = "flex items-center justify-between mb-3";

export const commentUser = "text-sm font-bold text-[#0f172a]";

export const commentTime = "text-xs text-[#94a3b8] font-medium";

export const commentText = "text-[#475569] text-sm leading-relaxed";

export const avatar =
  "w-10 h-10 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4338ca] text-white flex items-center justify-center text-sm font-bold shadow-sm";

export const commentUserRow = "flex items-center gap-3";

// ─── Divider ──────────────────────────────────────────
export const divider = "border-t border-[#e2e8f0] my-10";