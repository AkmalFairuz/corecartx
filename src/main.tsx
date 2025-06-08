import { Provider } from "@/components/ui/provider.tsx";
import router from "@/router.tsx";
import { Theme } from "@chakra-ui/react";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import "@fontsource/public-sans/800.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider>
            <Theme appearance={"dark"}>
                <RouterProvider router={router} />
            </Theme>
        </Provider>
    </StrictMode>,
);
