import { createHashRouter } from "react-router-dom";

export const mainRouter = createHashRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
])