import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import CoursePage from "./pages/course";
import StudentPage from "./pages/students";
import PaymentPage from "./pages/payment";
import { urls } from "./lib/urls";
import RootLayout from "./layouts/root-layout";

export const routes = createBrowserRouter([
  {
    path: urls.home,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: urls.course,
        element: <CoursePage />,
      },
      {
        path: urls.students,
        element: <StudentPage />,
      },
      {
        path: urls.payment,
        element: <PaymentPage />,
      },
    ],
  },
]);
