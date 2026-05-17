import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-hot-toast";
import { loadingClass, errorClass } from "../styles/common";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/admin-api/users");
      if (res.status === 200) {
        setUsers(res.data.payload);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleUserStatus = async (userId, currentStatus) => {
    const newStatus = !currentStatus;
    const confirmMsg = newStatus ? "Unblock this user?" : "Block this user?";
    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await axiosInstance.patch(
        "/admin-api/user-status",
        { userId, isUserActive: newStatus }
      );

      if (res.status === 200) {
        toast.success(res.data.message);
        // Optimize: Update the local state instead of refetching
        setUsers(users.map((u) => (u._id === userId ? res.data.payload : u)));
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update status");
    }
  };

  if (loading) return <p className={loadingClass}>Loading users...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {user.profileImageUrl ? (
                      <img src={user.profileImageUrl} alt="" className="w-8 h-8 rounded-full object-cover border border-slate-200" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold">
                        {user.firstName?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-bold text-slate-900">{user.firstName} {user.lastName}</p>
                      <p className="text-xs text-slate-500 line-clamp-1">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${user.role === "AUTHOR" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold ${user.isUserActive ? "text-emerald-600" : "text-rose-600"}`}>
                    {user.isUserActive ? "● Active" : "● Blocked"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => toggleUserStatus(user._id, user.isUserActive)}
                    className={`text-xs font-bold px-4 py-1.5 rounded-lg transition shadow-sm ${user.isUserActive ? "bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-100" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-100"}`}
                  >
                    {user.isUserActive ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {users.length === 0 && <p className="text-center py-10 text-slate-400 text-sm">No users found</p>}
    </div>
  );
}

export default ManageUsers;