import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "characters",
        element: <CharactersPage />
      },
      {
        path: "characterdetails/:id/", //{id} is a dynamic parameter
        element: <CharacterDetailsPage />
      },
      {
        path: "favorites",
        element: <Favorites />
      },
    ],
    errorElement: <NotFound />,
},
]);

export default router;