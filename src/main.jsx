import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import App from "./App";
import Courses from "./Components/Courses";
import ContactUs from "./Components/ContactUs";
import Accordion from "./Components/Accordion";
import PricingPlans from "./Components/PricingPlans";
import LiveQuranTeachers from "./Components/LiveQuranTeachers";
import DigitalLibrary from "./Components/DigitalLibrary";
import IslamicLearningSection from "./Components/IslamicLearningSection";
import FemaleQuranTeacher from "./Components/FemaleQuranTeacher";
import MaleQuranTeacher from "./Components/MaleQuranTeacher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/digital-library",
        element: <IslamicLearningSection />,
      },
      {
        path: "/downlode",
        element: <DigitalLibrary />,
      },

      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/testimonials",
        element: <Accordion />,
      },
      {
        path: "/hadiya",
        element: <PricingPlans />,
      },
      {
        path: "/about",
        element: <LiveQuranTeachers />,
      },
      {
        path: "/teachers",
        element: <MaleQuranTeacher />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
