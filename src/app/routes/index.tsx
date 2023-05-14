import { SuspenseLoader } from "@/utils/suspenseLoader";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layout";
import { ErrorElement } from "./errors/routeErrors/ErrorElement";

export const AppRoutes = () => {
    const routes = createBrowserRouter([
        {
            path: '',
            errorElement: <ErrorElement />,
            element: <SuspenseLoader><Layout /></SuspenseLoader>,
        }
    ]);
    return <>
        <AnimatePresence>
        <RouterProvider router={routes} />
        </AnimatePresence>
    </>
}
