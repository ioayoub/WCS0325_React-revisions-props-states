import App from "./App";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

export const routes = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <h1>Tu es perdu !</h1>,
      },
    ],
  },
];
