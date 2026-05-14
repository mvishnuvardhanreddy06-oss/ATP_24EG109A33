import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";
import { pageWrapper, divider } from "../styles/common";

function AdminProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className={pageWrapper}>
      {/* PROFILE HEADER */}
      <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 mb-8 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center text-2xl font-bold shadow-sm">
            {currentUser?.firstName?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-medium text-indigo-500 uppercase tracking-wider mb-1">Admin Dashboard</p>
            <h2 className="text-2xl font-bold text-slate-900">{currentUser?.firstName} {currentUser?.lastName}</h2>
          </div>
        </div>

        <button
          className="bg-white border border-rose-200 text-rose-600 text-sm px-5 py-2.5 rounded-lg hover:bg-rose-50 transition shadow-sm font-medium"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* NAVIGATION */}
      <div className="flex gap-2 mb-6 bg-slate-50 border border-slate-200/60 p-1.5 rounded-xl w-fit drop-shadow-sm">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-lg text-indigo-600 text-sm font-bold shadow-sm transition-all"
              : "text-slate-600 hover:text-slate-900 px-5 py-2 text-sm font-medium transition-all"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-lg text-indigo-600 text-sm font-bold shadow-sm transition-all"
              : "text-slate-600 hover:text-slate-900 px-5 py-2 text-sm font-medium transition-all"
          }
        >
          Manage Users
        </NavLink>

        <NavLink
          to="articles"
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-lg text-indigo-600 text-sm font-bold shadow-sm transition-all"
              : "text-slate-600 hover:text-slate-900 px-5 py-2 text-sm font-medium transition-all"
          }
        >
          Manage Articles
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

export default AdminProfile;