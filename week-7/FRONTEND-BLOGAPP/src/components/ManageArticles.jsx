import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-hot-toast";
import { loadingClass, errorClass } from "../styles/common";

function ManageArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/admin-api/all-articles");
      if (res.status === 200) {
        setArticles(res.data.payload);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const toggleArticleStatus = async (articleId, currentStatus) => {
    const newStatus = !currentStatus;
    const confirmMsg = newStatus ? "Activate this article?" : "Block this article?";
    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await axiosInstance.patch(
        "/admin-api/article-status",
        { articleId, isArticleActive: newStatus }
      );

      if (res.status === 200) {
        toast.success(res.data.message);
        setArticles(articles.map((a) => (a._id === articleId ? res.data.payload : a)));
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update article status");
    }
  };

  if (loading) return <p className={loadingClass}>Loading articles...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/3">Article Title</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {articles.map((article) => (
              <tr key={article._id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-slate-900 truncate max-w-md">{article.title}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tight font-medium">{article.category}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-bold">
                        {article.author?.firstName?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-xs text-slate-600 font-medium">{article.author?.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-slate-500 font-medium">{article.category}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold ${article.isArticleActive ? "text-emerald-600" : "text-rose-600"}`}>
                    {article.isArticleActive ? "● Active" : "● Blocked"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => toggleArticleStatus(article._id, article.isArticleActive)}
                    className={`text-xs font-bold px-4 py-1.5 rounded-lg transition shadow-sm ${article.isArticleActive ? "bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-100" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-100"}`}
                  >
                    {article.isArticleActive ? "Block" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {articles.length === 0 && <p className="text-center py-10 text-slate-400 text-sm">No articles found</p>}
    </div>
  );
}

export default ManageArticles;