import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";

import axiosInstance from "../api/axiosInstance";
import { useEffect, useState } from "react";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function UserProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        //read articles of all authors
        let res=await axiosInstance.get("/user-api/articles")
        //update articles state
        if(res.status===200){
          setArticles((await res).data.payload)
        }
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  // convert UTC → IST
  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const onLogout = async () => {
    await logout();

    navigate("/login");
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* ERROR */}
      {error && <p className={errorClass}>{error}</p>}

      {/* PROFILE HEADER */}
      <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 mb-8 shadow-sm flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] flex items-center justify-center text-xl font-bold">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Name */}
          <div>
            <p className="text-sm text-[#94a3b8]">Welcome back</p>
            <h2 className="text-xl font-bold text-[#0f172a]">{currentUser?.firstName}</h2>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          className="bg-white border border-rose-200 text-rose-600 text-sm px-5 py-2.5 rounded-lg hover:bg-rose-50 transition shadow-sm font-medium"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* ARTICLES SECTION */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-[#0f172a] mb-6">Latest Articles</h3>

        {/* EMPTY STATE */}
        {articles.length === 0 ? (
          <p className="text-[#94a3b8] text-sm text-center py-16 border-2 border-dashed border-[#e2e8f0] rounded-2xl">No articles available yet</p>
        ) : (
          <div className={articleGrid}>
            {articles.map((articleObj) => (
              <div className={articleCardClass} key={articleObj._id}>
                <div className="flex flex-col h-full">
                  {/* TOP */}
                  <div>
                    <p className={articleTitle}>{articleObj.title}</p>

                    <p className="text-sm text-[#475569] mt-2 line-clamp-3 leading-relaxed">{articleObj.content}</p>

                    <p className={`${timestampClass} mt-4`}>{formatDateIST(articleObj.createdAt)}</p>
                  </div>

                  {/* ACTION */}
                  <button className={`${ghostBtn} mt-auto pt-4 flex justify-end items-center gap-2`} onClick={() => navigateToArticleByID(articleObj)}>
                    Read Article &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;