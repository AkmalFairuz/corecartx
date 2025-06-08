"use client";

import {
    ChakraProvider,
    createSystem,
    defaultConfig,
    defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: {
                    value: "'Public Sans', sans-serif",
                },
                body: {
                    value: "'Public Sans', sans-serif",
                },
            },
        },
    },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    );
}
