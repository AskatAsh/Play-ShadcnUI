import AppLayout from "@/components/layouts/AppLayout";
import { createBrowserRouter, type RouteObject } from "react-router";

const rootChildren: RouteObject[] = [
  {
    index: true,
    lazy: async () => ({
      Component: (await import("@/pages/Home/Home")).default,
    }),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: rootChildren,
  },
]);

export default router;
