import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { routes } from "./router";

// Etape 1
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/contact",
//     element: <ContactPage />,
//   },
//   {
//     path: "*",
//     element: <h1>Oula tu es perdu !</h1>,
//   },
// ]);

// Etape 2
// const router = createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },

//       {
//         path: "contact",
//         element: <ContactPage />,
//       },
//       {
//         path: "*",
//         element: <h1>Tu es perdu !</h1>,
//       },
//     ],
//   },
// ]);

// Etape 3
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
