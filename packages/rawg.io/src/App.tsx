import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./routes/root";
import theme from "./config/theme";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/games", element: <>Game</> },
            {
                path: "/browse",
                element: <>Browse</>,
            },
            {
                path: "/platforms",
                element: <>Platforms</>,
            },
            {
                path: "/stores",
                element: <>Stores</>,
            },
            {
                path: "/collections",
                element: <>Collections</>,
            },
            {
                path: "/reviews",
                element: <>Reviews</>,
            },
            {
                path: "/genres",
                element: <>Genres</>,
            },
            {
                path: "/creators",
                element: <>Creators</>,
            },
            {
                path: "/tags",
                element: <>Tags</>,
            },
            {
                path: "/developers",
                element: <>Developers</>,
            },
            {
                path: "/publishers",
                element: <>Publishers</>,
            },
            { path: "/platforms/:id", element: <>Platform ID</> },
            { path: "/genres/:id", element: <>Genres ID</> },
        ],
    },
]);

function App() {
    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
