import { createHashRouter } from "react-router-dom";

import { DashboardPage } from "../../pages/dashboardPage/dashboardPage";
import { DetailPage } from "../../pages/detailPage/detailPage";
import { QuizPage } from "../../pages/quizPage/quizPage";

export const mainRouter = createHashRouter([
    {
        path: "/",
        element: <DashboardPage></DashboardPage>,
    },
    {
        path: "/detail",
        element: <DetailPage></DetailPage>,
    },
    {
        path: "/quiz",
        element: <QuizPage></QuizPage>,
    },
])