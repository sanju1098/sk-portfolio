import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ErrorBoundary from "@/layout/ErrorBoundary";
import Loader from "@/layout/Loader";
import ScrollToTop from "@/layout/ScrollToTop";

const Index = lazy(() => import("../pages/Index"));
const Projects = lazy(() => import("../pages/Projects"));
const Skills = lazy(() => import("../pages/Skills"));
const Experience = lazy(() => import("../pages/Experience"));
const NotFound = lazy(() => import("../pages/NotFound"));
const About = lazy(() => import("../pages/About"));

const Layout = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Header />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
