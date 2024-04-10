import { useNavigate } from "react-router-dom";
import { STAFF_SIDEBAR_LINKS } from "../library/constants";
import { logout } from "../library/logout";
import { useUserRole } from "../context/UserRoleContext";

const StaffSidebar = () => {
  const userRole = useUserRole();
  const navigate = useNavigate();

  const handleNavigate = (linkPath) => {
    navigate(linkPath);
  };

  return (
    <div className="bg-white w-full md:w-64 h-full fixed md:top-7rem md:right-0 md:z-50 flex flex-col gap-1 items-center py-8 px-4">
      <p className="uppercase text-sm text-infoTeal my-5">{userRole}</p>{" "}
      {STAFF_SIDEBAR_LINKS.map((item, index) => (
        <button
          key={index}
          className="w-full h-12 my-2 p-1 rounded-xl text-matteBlack text-lg md:text-xl hover:bg-linkWater transition-colors duration-200"
          onClick={() => handleNavigate(item.linkPath)}
        >
          {item.linkName}
        </button>
      ))}
      <button
        className="w-full h-12 my-2 p-1 rounded-xl text-matteBlack text-lg md:text-xl bg-linkWater hover:bg-sail transition-colors duration-200"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default StaffSidebar;
