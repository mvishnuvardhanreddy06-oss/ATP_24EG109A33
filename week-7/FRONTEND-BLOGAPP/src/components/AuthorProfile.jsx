   import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";

import { pageWrapper, divider } from "../styles/common";

function AuthorProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  //call t6his function on logout
  const onLogout = async () => {
    //call login route
    await logout();
    //navigate to login component
    navigate("/login");
  };

  return (
    <div className={pageWrapper}>
      {/* PROFILE HEADER */}
      <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 mb-8 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border border-[#e2e8f0] shadow-sm"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] flex items-center justify-center text-2xl font-bold shadow-sm">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Name */}
          <div>
            <p className="text-sm font-medium text-[#94a3b8] uppercase tracking-wider mb-1">Author Portal</p>
            <h2 className="text-2xl font-bold text-[#0f172a]">{currentUser?.firstName}</h2>
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

      {/* NAVIGATION (TABS STYLE) */}
      <div className="flex gap-2 mb-6 bg-[#f8fafc] border border-[#e2e8f0]/60 p-1.5 rounded-xl w-fit drop-shadow-sm">
        <NavLink
          to="articles"
          end
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-lg text-[#4f46e5] text-sm font-bold shadow-sm transition-all"
              : "text-[#475569] hover:text-[#0f172a] px-5 py-2 text-sm font-medium transition-all"
          }
        >
          Manage Articles
        </NavLink>

        <NavLink
          to="write-article"
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-lg text-[#4f46e5] text-sm font-bold shadow-sm transition-all"
              : "text-[#475569] hover:text-[#0f172a] px-5 py-2 text-sm font-medium transition-all"
          }
        >
          Write Article
        </NavLink>
      </div>

      <div className={divider}></div>

      {/* CONTENT */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthorProfile;