import React from "react";
import ReactDOM from "react-dom/client";
import Example from "./Example.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider>
            <Example />
        </ChakraProvider>
    </React.StrictMode>
);
