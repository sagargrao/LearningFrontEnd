import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#fafafa",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          background: "#001529",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <span>Dashboard ({user?.role})</span>
        <button
          onClick={handleLogout}
          style={{
            background: "#ff4d4f",
            border: "none",
            color: "white",
            padding: "8px 16px",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </header>
      <main
        style={{
          flexGrow: 1,
          overflowY: "auto",
          padding: 24,
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}