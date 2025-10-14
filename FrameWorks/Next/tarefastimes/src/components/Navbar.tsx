import React from "react";

const Navbar: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Kanban StartUp</h1>
      <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
    </nav>
  );
};

export default Navbar;