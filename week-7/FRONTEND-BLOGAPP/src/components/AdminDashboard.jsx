import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Users, BookOpen, PenTool, TrendingUp } from "lucide-react";
import { loadingClass, errorClass } from "../styles/common";

function AdminDashboard() {
  const [stats, setStats] = useState({ totalUsers: 0, totalAuthors: 0, totalArticles: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get("/admin-api/dashboard-stats");
        if (res.status === 200) {
          setStats(res.data.payload);
        }
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch statistics");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <p className={loadingClass}>Updating statistics...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  const statCards = [
    { label: "Total Users", value: stats.totalUsers, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Total Authors", value: stats.totalAuthors, icon: PenTool, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Published Articles", value: stats.totalArticles, icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  return (
    <div className="space-y-8">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((card, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${card.bg}`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12%
              </span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium mb-1">{card.label}</h3>
            <p className="text-3xl font-bold text-slate-900">{card.value.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Welcome Message */}
      <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-indigo-200">
         <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Platform Overview</h2>
            <p className="text-indigo-100 max-w-md">Welcome back! The platform is growing steadily. You have full control over user accounts and article moderation from this dashboard.</p>
         </div>
         <div className="absolute top-0 right-0 p-8 opacity-10">
            <TrendingUp className="w-48 h-48" />
         </div>
      </div>
    </div>
  );
}

export default AdminDashboard;