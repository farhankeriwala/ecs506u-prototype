import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import { CurrentUserProvider } from "./context/CurrentUserContext.jsx";
import { UserRoleProvider } from "./context/UserRoleContext.jsx";
import { UserNameProvider } from "./context/UserNameContext.jsx";
import ReportIssueForm from "./components/ReportIssueForm.jsx";
import ClaimECForm from "./components/ClaimECForm.jsx";
import StudentClaims from "./components/StudentClaims.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CurrentClaims from "./components/CurrentClaims.jsx";
import App from "./App.jsx";
import HandleServiceIssues from "./components/HandleServiceIssues.jsx";
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/claimEC",
    element: (
      <ProtectedRoute>
        <ClaimECForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/myECs",
    element: (
      <ProtectedRoute>
        <CurrentClaims />
      </ProtectedRoute>
    ),
  },
  {
    path: "/trackStudentECs",
    element: (
      <ProtectedRoute>
        <StudentClaims />
      </ProtectedRoute>
    ),
  },
  {
    path: "/handleServiceIssues",
    element: (
      <ProtectedRoute>
        <HandleServiceIssues />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reportIssue",
    element: (
      <ProtectedRoute>
        <ReportIssueForm />
      </ProtectedRoute>
    ),
  },

  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/testing",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CurrentUserProvider>
        <UserRoleProvider>
          <UserNameProvider>
            <RouterProvider router={router} />
          </UserNameProvider>
        </UserRoleProvider>
      </CurrentUserProvider>
    </AuthProvider>
  </React.StrictMode>
);
