import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import AdminProfile from "./pages/AdminProfile.jsx";
import OwnerProfile from "./pages/OwnerProfile.jsx";
import JobFinder from "./pages/JobFinder.jsx";
import CareerGuidance from "./pages/CareerGuidance.jsx";
import RoomFinder from "./pages/RoomFinder.jsx";
import SkillAssessment from "./pages/SkillAssessment.jsx";
import Resources from "./pages/Resources.jsx";
import PaymentMethods from "./pages/PaymentMethod.jsx";
import Mentorship from "./pages/Mentorship.jsx";
import FreelanceMarketplace from "./pages/FreelanceMarketplace.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },{
        path: "/login",
        element: <Login />,
      },{
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/admin-profile",
        element: <AdminProfile />,
      },
      {
        path: "/owner-profile",
        element: <OwnerProfile />,
      },
      {
        path: "/job-finder",
        element: <JobFinder />,
      },
      {
        path: "/career-guidance",
        element: <CareerGuidance />
      },
      {
        path: "/room-finder",
        element: <RoomFinder />
      },
      {
        path: "/skill-assignment",
        element: <SkillAssessment />
      },
      {
        path: "/educational-resources",
        element: <Resources />
      },
      {
        path: "/payment-methods",
        element: <PaymentMethods />
      },
      {
        path: "/mentorship",
        element: <Mentorship />,
      },
      {
        path: "/freelance-marketplace",
        element: <FreelanceMarketplace />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
