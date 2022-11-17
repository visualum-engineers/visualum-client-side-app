import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
  ScrollRestoration,
} from "react-router-dom";
import LoadingIcon from "./utilities/loadingIcon/LoadingIcon";
const DashboardPage = lazy(() => import("./dashboardPage/DashboardPage"));
const SettingsPage = lazy(
  () => import("./dataAnalyticsPage/DataAnalyticsPage")
);
const SchedulingPage = lazy(() => import("./schedulingPage/SchedulingPage"));
const DataAnalytics = lazy(
  () => import("./dataAnalyticsPage/DataAnalyticsPage")
);
const AboutPage = lazy(() => import("./aboutPage/AboutPage"));
const HomePage = lazy(() => import("./homePage/HomePage"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="scheduling" element={<SchedulingPage />} />
      <Route path="data-analytics" element={<DataAnalytics />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingIcon entireViewPort />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
