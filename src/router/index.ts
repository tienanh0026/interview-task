import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{ index: true, Component: HomePage }],
  },
]);
