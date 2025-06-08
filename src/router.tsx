import AuthLayout from "@/layouts/AuthLayout.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import CartPage from "@/pages/CartPage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import ProductPage from "@/pages/ProductPage.tsx";
import ProfilePage from "@/pages/ProfilePage.tsx";
import RegisterPage from "@/pages/RegisterPage.tsx";
import ResetPasswordPage from "@/pages/ResetPasswordPage.tsx";
import ShipmentTrackingPage from "@/pages/ShipmentTrackingPage.tsx";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },
            {
                path: "/product/:productId",
                element: <ProductPage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
            {
                path: "/shipment-tracking",
                element: <ShipmentTrackingPage />,
            },
        ],
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/reset-password",
                element: <ResetPasswordPage />,
            },
        ],
    },
]);

export default router;
