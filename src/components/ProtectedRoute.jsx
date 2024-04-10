import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "../context/UserRoleContext";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const userRole = useUserRole();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate("/", { replace: true });
    } else {
      // Check if the user is a student, service admin, EC admin, or staff and accessing allowed paths
      if (userRole === "student") {
        const allowedStudentPaths = [
          "/dashboard",
          "/myECs",
          "/claimEC",
          "/reportIssue",
        ];
        const currentPath = window.location.pathname;
        if (allowedStudentPaths.includes(currentPath)) {
          setAllowed(true);
        } else {
          navigate("/unauthorized", { replace: true });
        }
      } else if (userRole === "service_admin") {
        const allowedServiceAdminPaths = [
          "/dashboard",
          "/reportIssue",
          "/trackIssues",
          "/handleIssues",
          '/handleServiceIssues'
        ];
        const currentPath = window.location.pathname;
        if (allowedServiceAdminPaths.includes(currentPath)) {
          setAllowed(true);
        } else {
          navigate("/unauthorized", { replace: true });
        }
      } else if (userRole === "ec_admin") {
        const allowedEcAdminPaths = [
          "/dashboard",
          "/trackStudentECs",
          "/handleECs",
          "/reportIssue",
          "/trackIssues",
        ];
        const currentPath = window.location.pathname;
        if (allowedEcAdminPaths.includes(currentPath)) {
          setAllowed(true);
        } else {
          navigate("/unauthorized", { replace: true });
        }
      } else if (userRole === "staff") {
        const allowedStaffPaths = [
          "/dashboard",
          "/trackStudentECs",
          "/reportIssue",
          "/trackIssues",
        ];
        const currentPath = window.location.pathname;
        if (allowedStaffPaths.includes(currentPath)) {
          setAllowed(true);
        } else {
          navigate("/unauthorized", { replace: true });
        }
      } else {
        // For other roles, allow access to all routes
        setAllowed(false);
      }
      setLoading(false);
    }
  }, [currentUser, navigate, userRole]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return allowed ? children : null;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
