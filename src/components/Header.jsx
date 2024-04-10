import { useState } from "react";
import StudentSidebar from "./StudentSidebar";
import { useUserName } from "../context/UserNameContext";
import { useUserRole } from "../context/UserRoleContext";
import StaffSidebar from "./StaffSidebar";
import AdminSidebar from "./AdminSidebar";
import ECAdminSidebar from "./ECAdminSidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userName = useUserName();
  const userRole = useUserRole();
  console.log("User Role", userRole);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <header className="bg-royalPurple w-full p-8 flex flex-col md:flex-row gap-4 items-center justify-between relative z-10">
        <p className="font-Montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-coolWhite">
          QMUL Feedback & Issues Hub
        </p>
        <nav className="">
          <button className="text-3xl md:text-4xl mx-5">
            <i className="bx bx-home-alt text-coolWhite"></i>{" "}
          </button>
          <button className="text-3xl md:text-4xl mx-5">
            <i className="bx bx-bell text-coolWhite"></i>
          </button>
          <button className="text-3xl md:text-4xl mx-5" onClick={toggleSidebar}>
            {sidebarOpen ? (
              <i className="bx bx-x text-coolWhite"></i>
            ) : (
              <i className="bx bx-menu text-coolWhite"></i>
            )}
          </button>
        </nav>
      </header>
      <div className="flex">
        <h1 className="font-Roboto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-matteBlack text-center m-8">
          Welcome Back {userName}
        </h1>
        {sidebarOpen && userRole === "student" && <StudentSidebar />}
        {sidebarOpen && userRole === "staff" && <StaffSidebar />}
        {sidebarOpen && userRole === "service_admin" && <AdminSidebar />}
        {sidebarOpen && userRole === "ec_admin" && <ECAdminSidebar />}
      </div>
    </div>
  );
};

export default Header;
