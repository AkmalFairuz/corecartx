import AuthLayout from "@/layouts/AuthLayout.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import CartPage from "@/pages/CartPage.tsx";
import CheckoutPage from "@/pages/CheckoutPage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import ProductPage from "@/pages/ProductPage.tsx";
import ProfilePage from "@/pages/ProfilePage.tsx";
import RegisterPage from "@/pages/RegisterPage.tsx";
import ResetPasswordPage from "@/pages/ResetPasswordPage.tsx";
import ShipmentTrackingPage from "@/pages/ShipmentTrackingPage.tsx";
import { createBrowserRouter } from "react-router";
import SearchPage from "@/pages/SearchPage.tsx";
import RegisterVerificationPage from "@/pages/RegisterVerificationPage.tsx";

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
            {
                path: "/checkout",
                element: <CheckoutPage />,
            },
            {
                path: "/search",
                element: <SearchPage/>,
            }
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
            {
                path: "/register-verification",
                element: <RegisterVerificationPage/>
            }
        ],
    },
]);

export default router;
